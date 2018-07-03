import React from 'react'

export default function Card(props) {
  return (
    props.card.length !== 0 ?
    <div className='container-fluid card-list'>
      <div className='row'>
        { props.card.map((card, index) =>
          <div key={index} className='card-container col-xl-4'>
            <div className="card flash-card">
              <div className="card-header">
                <span>{index + 1 + '. '}</span>{card.question}
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
    </div> : <div>You have no cards</div>
  )
}
