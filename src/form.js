import React from 'react'

export default function Form (props) {
  return (
    <div className='form-window'>
      <form id='card-form' onSubmit={props.handleSubmit} className='create-card-form col-xl-2 col-lg-4 col-md-6 col-sm-8'>
        <div className='form-head text-center'>
          <h1>Create a Card</h1>
        </div>
        <div className='form-icon text-center'>
          <i className="fas fa-bolt text-warning"></i>
        </div>
        <div className='form-inputs'>
          <div className='form-group'>
            <label>Question</label>
            <input name='question' type='text' className='form-control create-input' id='questionInput' aria-describedby='questionHelp' placeholder='Enter the question...'/>
          </div>
          <div className='form-group'>
            <label>Answer</label>
            <input name='answer' type='text' className='form-control create-input' id='answerInput' placeholder='Enter the answer...'/>
          </div>
          <div className='form-button text-center'>
            <button type='submit' href='#card-list' className='btn btn-warning text-center'>Create Card</button>
          </div>
          <div className='close-form'>
            <a className='text-dark' href='#card-list'><i className='far fa-times-circle'></i></a>
          </div>
        </div>
      </form>
    </div>
  )
}
