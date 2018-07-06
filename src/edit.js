import React from 'react'

export default function EditCard(props) {
  return (
    <div className='form-window'>
      <form
        id='card-form'
        onSubmit={props.handleSubmitEdit}
        className='create-card-form col-xl-3 col-lg-4 col-md-6 col-sm-8 col-xs-4'>
      <a
        className='text-dark close-form'
        href='#card-list'><i
        className='far fa-times-circle'></i></a>
        <div className='form-head text-center'>
          <h1>Edit Your Card</h1>
        </div>
        <div className='form-icon text-center'>
          <i className="fas fa-band-aid text-warning"></i>
        </div>
        <div className='form-inputs'>
          <div className='form-group'>
            <label>Question</label>
            <input
            name='question'
            type='text'
            className='form-control create-input'
            id='questionInput'
            aria-describedby='questionHelp'
            placeholder='Enter the question...'
            defaultValue={props.edit.question} />
          </div>
          <div className='form-group'>
            <label>Answer</label>
            <input
            name='answer'
            type='text'
            className='form-control create-input'
            id='answerInput'
            placeholder='Enter the answer...'
            defaultValue={props.edit.answer} />
          </div>
          <div className='form-button text-center'>
            <button
              type='submit'
              href='#card-list'
              className='btn btn-warning text-center'>Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}
