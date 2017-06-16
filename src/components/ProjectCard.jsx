import React , {Component} from 'react';

export default class ProjectCard extends React.Component {
  render() {
    // console.log(typeof this.props.barTitle);
    return (
      <div className='prj'>
        <div className='prj-inner'>
          <div className='prj-content'>
            <div className='content-svg'>
              {/*
                can't use imgSrc:'../images/10TicTacToe.png' and pass it down to <img src={this.props.imgSrc} /> or even require it;
                you need to use -- dynamic require --
                https://github.com/facebookincubator/create-react-app/issues/585 (search for 'dynamic require')
                */}
              <img className='preview' src={require('../images/'+this.props.imgSrc+'.png')} />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 500 500"}>
                <g id="XMLID_15_">
                  <path id="XMLID_18_" d="M0 0h500v500H0z" className="st0_D"/>
                  <circle id="XMLID_17_" cx="250.2" cy="250.3" r="134.3" className="st1_D"/>
                  <path id="XMLID_16_" d="M347.5 241H259v-88c0-4.9-4.1-9-9-9s-9 4-9 9v88h-88.1c-4.9 0-9 4.1-9 9s4 9 9 9H241v88.6c0 4.9 4.1 9 9 9s9-4 9-9V259h88.5c4.9 0 9-4.1 9-9s-4-9-9-9z" className="st2_D"/>
                </g>
              </svg>
            </div>
            <div className='content-descr'>
              <h3>{this.props.title}</h3>
              <br/>
              <p>Tools Used:</p>
              <p>{this.props.tools}</p>
              <p>Description</p>
              <p>{'\u00A0\u00A0\u00A0\u00A0'}{this.props.descr}</p>
              <span>
                <a href={this.props.prjLink} target='_blank'>
                  Live App :
                  <svg xmlns="http://www.w3.org/2000/svg" className='titleBarSvgONW'
                    width="24" height="24"
                    viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


/*
<div className={'project ' + this.props.prjctSelected[this.props.barTitle]}
  onClick={this.props.prjctHandler.bind(this, this.props.barTitle)} >
  <div className='titleBar' >
    <svg version="1.1" className="titleBarSvgNumber"
       xmlns="http://www.w3.org/2000/svg"
      //  width="204.1px" height="125.9px"
       viewBox="0 0 204.1 125.9"
       preserveAspectRatio='none'>
    <polygon  points="136,0 204.1,62.7 136.2,125.9 0,125.9 0,0 "/>
    <g>
      <path d={this.props.nr1}/>
      <path d={this.props.nr2}/>
    </g>
    </svg>
    <div className='titleBarTitle'>{this.props.barTitle}</div>

    <svg xmlns="http://www.w3.org/2000/svg" className='titleBarSvgONW'
      width="24" height="24"
      viewBox="0 0 24 24">
      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
    </svg>
  </div>
  <div className='projectDetails'>
    <p>Tools used:</p>
    <div className='projectTools'>{this.props.prTools}</div>
    <br/><br/><br/>
    <div className='projectDescr'>{'\u00A0\u00A0\u00A0'}{this.props.descr}</div>
  </div>

  <img className='prPreview' src={require('../images/'+this.props.imgSrc+'.png')} />
</div>
{/*
  can't use imgSrc:'../images/10TicTacToe.png' and pass it down to <img src={this.props.imgSrc} /> or even require it;
  you need to use -- dynamic require --
  https://github.com/facebookincubator/create-react-app/issues/585 (search for 'dynamic require')
}*/
