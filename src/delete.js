import React from 'react'

export default function Delete(props) {
  return (
    <div onClick={props.handleFormClick} className='form-window'>
      <div className='container form-container'>
        <div className='row'>
          <div className='container card-form col-xl-3 col-lg-4 col-md-6 col-sm-8 col-xs-4'>
            <div className='row'>
              <div className='col'>
               <a
                 className='text-dark close-form mt-2 float-right'
                 href='#card-list'>
                 <i className='far fa-times-circle'></i>
               </a>
             </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-head text-center'>
                  <h1>Are you sure?</h1>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-icon text-center'>
                  <i className='far fa-trash-alt text-warning form-icon delete'></i>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-head mt-2 mb-4 text-center'>
                  <h5>Cards cannot be retrieved once they are deleted.</h5>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-button text-center'>
                  <button
                    type='submit'
                    href='#card-list'
                    className='shadow-sm btn btn-warning text-center'
                    onClick={props.handleClickDelete}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
