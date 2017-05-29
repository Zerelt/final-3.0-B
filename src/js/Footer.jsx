import React, {Component} from 'react';

export default class Footer extends React.Component {
  render () {
    let cc = this.props.availableWidth > 768 ? 'Copyright ' : '';
    return (
      <div className='footer-container'>
        <div className='divB'><p>{cc}&#169; {this.props.currentYear} Dobre Alexandru</p>
          <a href='https://twitter.com/Dobre_Alexander' target='_blank'>
            {/* <img src={require('../images/twitter.svg')} /> */}
            <svg version="1.0" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle className="st0_1" style={{fill:'#fff3f4'}} cx="16" cy="16.3" id="XMLID_871_" r="15.1"/>
            <g id="zkT7EV.tif_4_">
            	<g id="XMLID_863_">
            		<path className="st1_1" style={{fill:'#211f1f'}} d="M20,8.7c0.1,0,0.3,0,0.4,0c0,0,0.1,0,0.1,0c0.3,0,0.5,0.1,0.8,0.1c0.8,0.2,1.5,0.6,2.1,1.2     c0.1,0.1,0.1,0.1,0.2,0.1c0.9-0.2,1.8-0.5,2.6-1c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0c-0.1,0.2-0.2,0.5-0.3,0.7     c-0.4,0.7-0.9,1.3-1.6,1.7c0.9-0.1,1.7-0.3,2.5-0.7c-0.3,0.5-0.7,0.9-1,1.3c-0.4,0.4-0.7,0.7-1.2,1c0,0,0,0.1-0.1,0.1     c0,0.5,0,1.1,0,1.6c0,0.6-0.2,1.2-0.3,1.9c-0.5,2.3-1.6,4.3-3.2,6c-1.1,1.2-2.3,2.1-3.7,2.7c-1.8,0.9-3.8,1.2-5.8,1.2     c-0.8,0-1.6-0.1-2.4-0.3c-1.5-0.3-3-0.9-4.3-1.7c0,0,0,0-0.1-0.1c1.2,0.1,2.4,0,3.5-0.3c1.1-0.3,2.2-0.8,3.1-1.6     c-2.5-0.1-3.8-1.9-4.2-3.1c0.2,0,0.3,0,0.5,0.1c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0,0.5,0c0.2,0,0.3-0.1,0.5-0.1     c-1-0.3-1.9-0.8-2.6-1.6c-0.7-0.8-1-1.8-1-2.8c0.3,0.1,0.6,0.3,1,0.4c0.3,0.1,0.7,0.2,1,0.2c-2.3-1.6-2.3-4.5-1.4-6     c2.4,2.9,5.5,4.4,9.3,4.7c0,0,0,0,0,0c-0.1-0.6-0.1-1.1,0-1.7c0.1-0.9,0.5-1.6,1.1-2.3c0.7-0.8,1.5-1.2,2.5-1.4     C19.6,8.7,19.8,8.7,20,8.7z" />
            	</g>
            </g>
            </svg>
          </a>
        </div>
        <div className='divW'>
          <a href='https://www.linkedin.com/in/alexandru-dobre-492242143/' target='_blank'>
            {/* <img src={require('../images/linkedIn.svg')} /> */}
            <svg version="1.1"
            	 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60 60" >
            <g>
            	<circle className="st0_2" style={{fill:'#ffffff'}} cx="30" cy="30" r="30"/>
            	<path className="st1_2" style={{fill:'#211f1f'}} d="M46.8,44.1V32.4c0-6.3-3.3-9.2-7.8-9.2c-3.6,0-5.2,2-6.1,3.4v-2.9h-6.8c0.1,1.9,0,20.4,0,20.4h6.8V32.7
            		c0-0.6,0-1.2,0.2-1.7c0.5-1.2,1.6-2.5,3.5-2.5c2.5,0,3.4,1.9,3.4,4.6v10.9L46.8,44.1L46.8,44.1z M19,20.9c2.4,0,3.8-1.6,3.8-3.5
            		c0-2-1.5-3.5-3.8-3.5s-3.8,1.5-3.8,3.5C15.2,19.4,16.6,20.9,19,20.9L19,20.9z M30,60C13.4,60,0,46.6,0,30C0,13.4,13.4,0,30,0
            		s30,13.4,30,30C60,46.6,46.6,60,30,60z M22.4,44.1V23.7h-6.8v20.4H22.4z"/>
            </g>
            </svg>
          </a>
        </div>
        <div className='divR'>
          <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=axel.xander1@gmail.com&su=SUBJECT&body=BODY&bcc=axel.xander1@gmail.com' target='_blank'>
            {/* <img src={require('../images/gmail.svg')} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" x={"0px"} y={"0px"}
            	 viewBox={"-429 231 100 100"} >
            <g>
            	<circle className="st0_3" style={{fill:'#fff3f4'}} cx="-379" cy="280.8" r="45.2"/>
            	<g>
            		<path className="st1_3" style={{fill:'#211F1F'}} d="M-379,236c-24.9,0-45,20.1-45,45c0,8.9,2.6,17.2,7.1,24.2c2.3-3.1,5.6-5,9.1-6.5c3.5-1.4,7.2-2.2,10.9-2.6
            			c2-0.2,4-0.4,6.2-0.6c-3-3.4-4.3-7.2-2.2-11.6c-0.7,0-1.3,0.1-2,0.1c-9.4,0.7-17.8-4.8-19.5-14.5c-0.8-4.6,0.3-8.8,2.6-12.8
            			c2.3-3.8,5.5-6.4,9.5-8.3c4-1.9,8.2-2.9,12.6-3.1c4.6-0.2,9.2-0.1,13.9-0.2c3.3,0,6.6,0,9.9,0c0.2,0,0.5,0,0.7,0
            			c0,0,0,0.1,0.1,0.1c-0.2,0.1-0.3,0.2-0.5,0.3c-2,1.3-4,2.5-6,3.8c-0.3,0.2-0.8,0.3-1.2,0.3c-1.7,0-3.4,0-5.1,0c-0.2,0-0.4,0-0.9,0
            			c0.4,0.3,0.6,0.5,0.8,0.7c3,2.6,5.3,5.6,6.2,9.4c1.7,6.9,0,12.9-5.4,17.7c-1.5,1.4-3.1,2.7-4.6,4.2c-1,1-1.6,2.2-1.7,3.6
            			c-0.1,1.5,0.4,2.8,1.5,3.7c1.6,1.4,3.3,2.7,5,4.1c2.7,2.2,5.4,4.4,7.3,7.4c1.9,2.9,2.6,6.2,2.3,9.6c-0.5,6.1-3.7,10.5-8.5,14
            			c-0.9,0.6-1.8,1.2-2.7,1.7c24.7-0.2,44.7-20.2,44.7-45C-334,256.1-354.1,236-379,236z M-338.6,286.3c-3.2,0-6.4,0-9.6,0
            			c-0.5,0-0.7,0.2-0.7,0.7c0,3.3,0,6.5,0,9.8c0,0.6-0.2,0.7-0.7,0.7c-1.4,0-2.8,0-4.2,0c-0.5,0-0.7-0.2-0.7-0.7c0-3.2,0-6.5,0-9.7
            			c0-0.6-0.1-0.8-0.8-0.8c-3.1,0-6.2,0-9.4,0c-0.3,0-0.5,0-0.8,0c0-1.9,0-3.7,0-5.6c3.6,0,7.2,0,10.9,0c0-0.3,0.1-0.6,0.1-0.9
            			c0-3.1,0-6.3,0-9.4c0-0.6,0.2-0.8,0.8-0.8c1.6,0,3.1,0,4.8,0c0,3.7,0,7.3,0,11c3.8,0,7.4,0,11.1,0c0,1.9,0,3.7,0,5.6
            			C-338.1,286.3-338.4,286.3-338.6,286.3z"/>
            		<path className="st1_3" style={{fill:'#211F1F'}} d="M-380.4,322.8c3.5-2.1,5.4-5.2,5.5-9.4c0-2.9-1.1-5.3-3.1-7.4c-2.3-2.5-5.1-4.4-7.8-6.4
            			c-0.8-0.6-1.6-0.9-2.6-0.8c-2.6,0.2-5.2,0.3-7.8,0.7c-3,0.4-5.9,1.3-8.6,2.9c-4.1,2.5-6.1,6.5-5.4,11.1c6,5.8,13.6,10,22.1,11.7
            			C-385.4,324.8-382.7,324.2-380.4,322.8z"/>
            		<path className="st1_3" style={{fill:'#211F1F'}} d="M-381.8,274.7c0.7-1.8,0.9-3.7,0.8-5.7c-0.1-3.1-0.8-6.1-1.9-9c-1.3-3.2-2.9-6.1-5.7-8.3
            			c-5.2-4.1-12.7-2.3-15.2,3.7c-0.8,1.9-1,3.9-1.1,6.5c0.1,0.9,0.2,2.4,0.5,3.9c0.7,3.9,2.1,7.6,4.7,10.7c2.7,3.2,6,4.9,10.2,4.1
            			C-385.9,280-383.1,278.2-381.8,274.7z"/>
            	</g>
            </g>
            </svg>
          </a>
        </div>
      </div>
    )
  }
}
