import React from 'react'

export default function EditCard(props) {
  return (
    <div onClick={props.handleFormClick} className='form-window'>
      <div className='container form-container'>
        <div className='row'>
          <form
            id='card-form'
            onSubmit={props.handleSubmitEdit}
            className='card-form col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-4'>
            <div className='row'>
              <div className='col'>
               <a
                 className='text-dark close-form float-right'
                 href='#card-list'>
                 <i className='far fa-times-circle'></i>
               </a>
             </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-head text-center'>
                  <h1>Edit Your Card</h1>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-icon text-center'>
                  <i className='fas fa-band-aid text-warning'></i>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-inputs'>
                  <div className='form-group'>
                    <label>Question</label>
                    <input
                      name='question'
                      type='text'
                      className='form-control create-input'
                      id='questionInput'
                      aria-describedby='questionHelp'
                      defaultValue={props.edit.question}
                      placeholder='Enter the question...'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-inputs'>
                  <div className='form-group'>
                    <label>Answer</label>
                    <input
                      name='answer'
                      type='text'
                      className='form-control create-input'
                      id='answerInput'
                      aria-describedby='answerHelp'
                      defaultValue={props.edit.answer}
                      placeholder='Enter the answer...'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-button text-center'>
                  <button
                    type='submit'
                    href='#card-list'
                    className='btn btn-warning text-center'>Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
