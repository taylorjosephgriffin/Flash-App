import React from 'react'
import App from './app.js'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showAnswer: false,
      currentIndex: 0
    }
    this.onShowClick = this.onShowClick.bind(this)
  }

  onShowClick() {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer
    }))
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xl-4 col-lg-6 col-md-8 col-sm-8 practice-card-container'>
        <a href='#practice-cards' className='practice-right text-dark'><i id='right' className="far fa-arrow-alt-circle-right practice-right-icon"></i></a>
        <a href='#practice-cards' className='practice-left text-dark'><i id='left' className="far fa-arrow-alt-circle-left practice-left-icon"></i></a>
          <div className='card practice-card'>
          <div className='show-card text-center'>
            <button onClick={this.onShowClick} className='btn btn-warning show-card-button'>show answer</button>
          </div>
            <div className='card-body'>
              <h2 className='card-text pracitce-question text-center'>{this.props.card[this.state.currentIndex].question}</h2>
              {this.state.showAnswer ? <h4 className='card-text practice-answer text-center text-dark'>{this.props.card[this.state.currentIndex].answer}</h4> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
