import React from 'react'

export default function Delete (props) {
  return (
    <div className='form-window'>
      <div id='card-form' onSubmit={props.handleSubmit} className='create-card-form col-xl-3 col-lg-6 col-md-6 col-sm-8 col-xs-4'>
        <a className='text-dark close-form-delete' href='#card-list'><i className='far fa-times-circle text-center'></i></a>
        <div className='form-head text-center'>
          <h1 className='delete-head text-center'>Are you sure?</h1>
        </div>
        <div className='form-icon delete text-center'>
          <i className="far fa-trash-alt text-warning"></i>
        </div>
        <div className='warning-text delete text-center'>
          Cards cannot be retrieved once they are deleted.
        </div>
        <div className='form-button delete text-center'>
          <button type='submit' href='#card-list' className='btn btn-warning text-center' onClick={props.handleClickDelete}>Delete Card</button>
        </div>
      </div>
    </div>
  )
}
