import React, {Component} from 'react';

export default class Contact extends React.Component {
  render () {
    return(
      <form className='contactMe-root' netlify>
        <div className='contactMe-container'>
          <div name='contact' >
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
                <input type='text' required
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
          </div>
        </div>
      </form>
    )
  }
}
