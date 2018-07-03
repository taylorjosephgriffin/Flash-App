import React from 'react'
import Form from './form.js'
import Nav from './nav-bar.js'
import Card from './card.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      path: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    window.location.hash = '#card-list'
  }

  renderView() {
    switch (this.state.path) {
      case 'create-card':
        return <Form handleSubmit={this.handleSubmit} />
    }
  }

  handleSubmit(event) {
    const card = {}

    event.preventDefault()
    const createForm = new FormData(event.target)
    card.question = createForm.get('question')
    card.answer = createForm.get('answer')
    this.state.cards.push(card)
    event.target.reset()
  }

  componentDidMount() {
    window.addEventListener("hashchange", event => {
      this.setState({
        path: window.location.hash.replace(/#/g, '')
      })
    }, false);
  }

  render() {
    return (
      <div>
        <Nav />
        {this.renderView()}
        <Card card={this.state.cards} />
      </div>
    )
  }
}
