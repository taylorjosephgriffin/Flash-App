import React from 'react'
import Form from './form.js'
import Nav from './nav-bar.js'
import Card from './card.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [{
        question: 'What is a "factorial"',
        answer: 'to take a factorial of a number, you multiply that number by each number between itself and one. So the factorial of 5 is equal to 5 * 4 * 3 * 2 * 1, or 120.'
      },{
        question: 'What is "recursion?"',
        answer: 'calling a function on itself'
      },{
        question: 'what is the "base case?"',
        answer: 'this is a statement, usually within a conditional clause like if, that stops the recursion. If you don\'t have a base case, the recursion will go on infinitely and your program will crash'
      },{
        question: 'What is a "termination condition?"',
        answer: 'a statement that will cancel recursion in the event of bad input or other potential error.'
      },{
        question: 'How to build your recursive case (the code that will be repeated)',
        answer: 'ensure that the arguments you use for the recursion will lead to your base case'
      },{
        question: 'where is the data stored while you are running a function?',
        answer: 'When you run a program, the data that is produced within that program (variables, function calls, etc.) are stored in the stack, which you can think of as a temporary storage device for the computer. Every time a function is called within a program, the returned value of that function is stored in the stack.'
      }],
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
