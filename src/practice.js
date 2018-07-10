import React from 'react'
import App from './app.js'
import {NoCards} from './card.js'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showAnswer: false,
      currentIndex: 0
    }
    this.onShowClick = this.onShowClick.bind(this)
    this.onNextClick = this.onNextClick.bind(this)
  }

  onShowClick() {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer
    }))
  }

  onNextClick(event) {
    if (event.target.dataset.id === 'left') {
      if (this.state.currentIndex > 0) {
        this.setState({
          currentIndex: this.state.currentIndex - 1,
          showAnswer: false
        })
      }
    }
    if (event.target.dataset.id === 'right') {
      if (this.state.currentIndex < this.props.card.length - 1) {
        this.setState({
          currentIndex: this.state.currentIndex + 1,
          showAnswer: false
        })
      }
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='card practice-card-container col-xl-6 col-lg-6 col-md-8 col-sm-10'>
            <div className='row'>
              <div className='card-header justify-content-center col-md-12'>
                <h2 className='card-title text-center'>
                  {this.props.card[this.state.currentIndex].question}
                </h2>
              </div>
            </div>

            <div className='card-body'>
              <div className='row'>
                <div className='col-md-12 col-sm-12'>
                  <div className='practice-card'>
                    <div className='show-card text-center'>
                      <p className={this.state.showAnswer
                          ? 'card-text text-center'
                          : 'card-text text-center hidden-text'}>
                        {this.props.card[this.state.currentIndex].answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 col-sm-6 cycle-practice'>
                  <a
                  onClick={this.onNextClick}
                  href='#practice-cards'
                  className='practice-left text-dark'>
                    <i
                    data-id='left'
                    className='far fa-arrow-alt-circle-left practice-left-icon'></i></a>
                </div>
                <div className='col-md-6 col-sm-6 cycle-practice'>
                  <a
                  onClick={this.onNextClick}
                  href='#practice-cards'
                  className='practice-right text-dark'>
                    <i
                    data-id='right'
                    className='far fa-arrow-alt-circle-right practice-right-icon float-right'></i></a>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12 show-button text-center'>
                  <a onClick={this.onShowClick} className='btn btn-warning'>show answer</a>
                </div>
              </div>
            </div>
            <div className="progress prog-bar">
              <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: (100 / this.props.card.length) * (this.state.currentIndex + 1) + '%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
