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
    
  }

  render() {
    return (
      <Form handleSubmit={this.handleSubmit} />
    )
  }
}