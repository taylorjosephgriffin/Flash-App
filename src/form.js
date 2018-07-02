import React from 'react'

export default function Form (props) {
  return (
    <form onSubmit={props.handleSubmit} className='create-card-form col-lg-4'>
      <div className='form-head text-center'>
        <h1>Create a Card</h1>
      </div>
      <div className='form-icon text-center'>
        <i className="fas fa-bolt"></i>
      </div>
      <div className='form'>
        <div className='form-group'>
          <label>Question</label>
          <input name='question' type='input' className='form-control' id='questionInput' aria-describedby='questionHelp' placeholder='Enter the question...'/>
        </div>
        <div className='form-group'>
          <label>Answer</label>
          <input name='answer' type='input' className='form-control' id='answerInput' placeholder='Enter the answer...'/>
        </div>
        <div className='form-button text-center'>
          <button type='submit' className='btn btn-success text-center'>Create Card</button>
        </div>
      </div>
    </form>
  )
}
