import React from 'react'

export function NoCards(props) {
  return (
    <div className="jumbotron no-cards-alert bg-warning col-xl-5 col-lg-6 col-md-6 text-center">
      <h1 className="display-4 text-center no-cards-text">You have no cards!</h1>
      <hr className="my-2" />
      <div className='no-cards-button'>
        <a className="btn btn-light btn-md" href="#create-card" role="button">Create Card</a>
      </div>
    </div>
  )
}

export default function CardList(props) {
  return (
    <div className='container-fluid card-list'>
      <div className='row'>
        { props.card.map((card, index) =>
          <div key={index} className='card-container col-xl-4 col-lg-6 col-md-6 col-sm-12'>
            <div className="card flash-card">
              <div className="card-header card-question">
                <span>{index + 1 + '. '}</span>{card.question}
                  <div className='edit-container'>
                    <a className='text-dark' title='Edit' href='#edit-card'><i className="far fa-edit float-right"></i></a>
                  </div>
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{card.answer}</p>
                </blockquote>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
