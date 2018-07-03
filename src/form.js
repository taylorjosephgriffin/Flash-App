import React from 'react'

export default function Form (props) {
  return (
    <div className='form-window'>
      <form id='card-form' onSubmit={props.handleSubmit} className='create-card-form col-xl-4 col-lg-4 col-md-6 col-sm-8'>
        <div className='form-head text-center'>
          <h1>Create a Card</h1>
        </div>
        <div className='form-icon text-center'>
          <i className="fas fa-bolt text-warning"></i>
        </div>
        <div className='form'>
          <div className='form-group'>
            <label>Question</label>
            <input type='question' className='form-control' id='questionInput' aria-describedby='questionHelp' placeholder='Enter the question...'/>
          </div>
          <div className='form-group'>
            <label>Answer</label>
            <input name='answer' type='answer' className='form-control' id='answerInput' placeholder='Enter the answer...'/>
          </div>
          <div className='form-button text-center'>
            <button type='submit' className='btn btn-warning text-center'>Create Card</button>
          </div>
        </div>
      </form>
    </div>
  )
}
