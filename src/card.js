import React from 'react'

export function NoCards(props) {
  return (
    <div className='container no-cards-form bg-warning'>
      <div className='row'>
        <div className='container bg-warning card-form col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-4'>
          <div className='row'>
            <div className='col'>
              <div className='form-head text-center'>
                <hr></hr>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='form-head text-center'>
                <h1>You have no cards!</h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='text-center'>
                <hr></hr>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='form-button text-center'>
                <a href='#create-card'>
                  <button
                    type='submit'
                    href='#card-list'
                    className='btn btn-light text-center'
                    onClick={props.handleClickDelete}>Create Card</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CardList(props) {
  return (
    <div className='container-fluid card-list'>
      <div className='row'>
        { props.card.map((card, index) =>
          <div key={card.id} className='card-container col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <div className='card flash-card'>
              <div className='row'>
                <div className='col'>
                  <div className='card-header card-question'>
                    <span>{index + 1 + '. '}</span>{card.question}
                      <div className='col-xl-3 col-lg-2 col-md-3 col-sm-2 col-xs-2 float-right edit-delete-icon'>
                        <a
                          className='text-danger'
                          title='Delete'
                          href='#delete-card'
                          onClick={props.handleClickSetDelete}>
                          <i
                            id={card.id}
                            className='far fa-trash-alt float-right edit-delete-icon'></i></a>
                        <a className='text-success'
                          title='Edit'
                          onClick={props.handleClickSetEdit}
                          href='#edit-card'>
                          <i
                            id={card.id}
                            className='far fa-edit float-right'></i></a>
                      </div>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <blockquote className='blockquote mb-0'>
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
