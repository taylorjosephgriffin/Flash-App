import React from 'react'
import Form from './form.js'
import Nav from './nav-bar.js'
import Card from './card.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
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

  render() {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}
