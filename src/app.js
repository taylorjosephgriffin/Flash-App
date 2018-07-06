import React from 'react'
import Form from './form.js'
import Nav from './nav-bar.js'
import CardList from './card.js'
import {NoCards} from './card.js'
import EditCard from './edit.js'
import Delete from './delete.js'
import Practice from './practice.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    const cardJSON = window.localStorage.getItem('cards')
    const editJSON = window.localStorage.getItem('edit')
    const countJSON = window.localStorage.getItem('count')

    this.state = {
      cards: JSON.parse(cardJSON) || [],
      path: window.location.hash.replace(/#/g, ''),
      edit: JSON.parse(editJSON) || {},
      delete: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this)
    this.handleClickSetEdit = this.handleClickSetEdit.bind(this)
    this.handleClickDelete = this.handleClickDelete.bind(this)
    this.handleClickSetDelete = this.handleClickSetDelete.bind(this)
    this.count = JSON.parse(countJSON) || 1
  }

  renderView() {
    switch (this.state.path) {
      case 'create-card':
        return <Form handleSubmit={this.handleSubmit} />
      case 'edit-card':
        return <EditCard
          edit={this.state.edit}
          handleSubmitEdit={this.handleSubmitEdit}
          card={this.state.cards} />
      case 'delete-card':
        return <Delete handleClickDelete={this.handleClickDelete}/>
    }
  }

  renderModeView() {
    if (this.state.path === 'card-list' || this.renderView()) {
      if (this.state.cards.length === 0) {
        return <NoCards card={this.state.cards} />
      }
      else {
        return <CardList handleClickSetDelete={this.handleClickSetDelete} handleClickSetEdit={this.handleClickSetEdit} card={this.state.cards} />
      }
    }
    else if (this.state.path === 'practice-cards') {
      return <Practice card={this.state.cards} />
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    const cards = this.state.cards.slice()
    const createForm = new FormData(event.target)

    if (createForm.get('question') || createForm.get('answer')) {
      let card = {
        id: this.count,
        question: createForm.get('question'),
        answer: createForm.get('answer')
      }

      this.count++
      cards.push(card)
      window.location.hash = 'card-list'
      this.setState({
        cards: cards
      })
    }
    else {
      return null
    }
    event.target.reset()
  }

  handleClickSetEdit(event) {
    const clickedCard = this.state.cards.find(card => {
      return event.target.id === card.id.toString()
    })
    this.setState({edit: clickedCard})
  }

  handleClickSetDelete(event) {
    const deleteCard = this.state.cards.find(card => {
      return event.target.id === card.id.toString()
    })
    this.setState({delete: deleteCard})
  }

  handleClickDelete(event) {
    const newCards = this.state.cards.slice(0)
    const notDeleted = newCards.filter(card => this.state.delete.id !== card.id)
      this.setState({cards: notDeleted})
      window.location.hash = 'card-list'
    }

  handleSubmitEdit(event) {
    event.preventDefault()

    const editForm = new FormData(event.target)
    const newCards = this.state.cards.slice(0)
    const edit = newCards.map(card => {
      if (this.state.edit.id === card.id) {
        window.location.hash = 'card-list'
        return {id: this.state.edit.id, question: editForm.get('question'), answer: editForm.get('answer')}
      }
      else {
        return card
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
      localStorage.setItem('count', JSON.stringify(this.count))
    })
  }

  render() {
    return (
      <div>
        <Nav />
        {this.renderView()}
        {this.renderModeView()}
      </div>
    )
  }
}
