import React from 'react'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div className='row'>
        <div className='col-xl-4 col-lg-6 col-md-8 col-sm-8 practice-card-container'>
        <a href='#practice-cards' className='practice-right text-dark'><i className="far fa-arrow-alt-circle-right practice-right-icon"></i></a>
        <a href='#practice-cards' className='practice-left text-dark'><i className="far fa-arrow-alt-circle-left practice-left-icon"></i></a>
          <div className='card practice-card'>
            <div className='card-body'>
              <h2 className='card-text pracitce-question text-center'>Test Question #1</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
