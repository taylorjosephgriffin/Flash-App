import React from 'react'
import Form from './form.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const card = {}
    card.question = event.target.children[2].children[0].children[1].value
    card.answer = event.target.children[2].children[1].children[1].value
    this.state.cards.push(card)
  }

  render() {
    return (
      <Form handleSubmit={this.handleSubmit} />
    )
  }
}
