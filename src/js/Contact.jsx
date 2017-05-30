import React, {Component} from 'react';

export default class Contact extends React.Component {
  render () {
    return(
      <div className='contactMe-root'>
        <div className='contactMe-container'>
          <form name='contact' netlify>
            <div>
              <p className='userP'>
                <input type='text' required
                  name='userName'
                  className='userInp'/>
                <label htmlFor='userName' className='userLbl'>
                  Name
                </label>
                <i className='iLine'></i>
              </p>
              <p className='emailP'>
                <input type='text'
                  required autoComplete='off'
                  name='email'
                  className='userInp'/>
                <label htmlFor='email' className='emailLbl'>
                  Email
                </label>
                <i className='iLine'></i>
              </p>
            </div>

            <div>
              <p className='tAreaP'>
                <textarea name='message'
                  className='message'
                  required >
                </textarea>
                <label htmlFor='textarea' className='textareaLbl'>
                  Your message:
                </label>
                <i className='iLine'></i>
              </p>
            </div>

            <button type='submit' className='submitBtn waves-effect '>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}
