import React from 'react'
import Form from './form.js'
import Nav from './nav-bar.js'
import CardList from './card.js'
import {NoCards} from './card.js'
import EditCard from './edit.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const cardJSON = window.localStorage.getItem('cards')
    const editJSON = window.localStorage.getItem('edit')
    this.state = {
      cards: JSON.parse(cardJSON) || [],
      path: window.location.hash.replace(/#/g, ''),
      edit: JSON.parse(editJSON) || {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  renderView() {
    switch (this.state.path) {
      case 'create-card':
        return <Form handleSubmit={this.handleSubmit} />
      case 'edit-card':
        return <EditCard edit={this.state.edit} handleSubmitEdit={this.handleSubmitEdit} card={this.state.cards} />
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const cards = this.state.cards.slice()
    const card = {}
    const createForm = new FormData(event.target)

    if (!createForm.get('question') || !createForm.get('answer')) return null
    else {
      card.id = this.state.cards.length + 1
      card.question = createForm.get('question')
      card.answer = createForm.get('answer')
      cards.push(card)
      window.location.hash = 'card-list'
      this.setState({
        cards: cards
      })
    }
    event.target.reset()
  }

  handleClick(event) {
    const clickedCard = this.state.cards.find(card => {
      return event.target.id === card.id.toString()
    })
    this.setState({edit: clickedCard})
  }

  handleSubmitEdit(event) {
  event.preventDefault()
  const editForm = new FormData(event.target)
  const newCards = this.state.cards.slice(0)
  const edit = newCards.map(card => {
    if (this.state.edit.id !== card.id) return card
    else {
      window.location.hash = 'card-list'
      return {id: this.state.edit.id, question: editForm.get('question'), answer: editForm.get('answer')}
    }
  })
    this.setState({
      cards: edit
    })
  }

  componentDidMount() {
    window.addEventListener("hashchange", event => {
      this.setState({
        path: window.location.hash.replace(/#/g, '')
      })
    }, false)
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('edit', JSON.stringify(this.state.edit))
      localStorage.setItem('cards', JSON.stringify(this.state.cards))
    })
  }

  render() {
    return (
      <div>
        <Nav />
        {this.renderView()}
        { this.state.cards.length === 0
          ? <NoCards card={this.state.cards} />
          : <CardList handleClick={this.handleClick} card={this.state.cards} /> }
      </div>
    )
  }
}
