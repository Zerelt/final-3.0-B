import React , {Component} from 'react';
import {Motion, spring, presets} from 'react-motion';
import ReactDOM from 'react-dom';

export default class NavBar extends React.Component {

  render () {
    // let showNav = this.props.showMenu ? 'block' : this.props.delayHideShow;
    let showNav = this.props.availableWidth > 1024 ? 'block' : this.props.delayHideShow;
    let x = ((this.props.showMenu==true) ? -2 : -300);
// console.log(this.props.showMenu);
    // console.log(this.props.availableWidth);

    return (

      <Motion
        style={{
          right:spring(x, {stiffness: 120, damping: 17})
        }}>
        {
          ({right}) => {
            return(
              <nav style={{display:showNav}} ref={(a1) => this.a1 = a1} >
               <ul style={{right:right}}>
                 <li onClick={this.props.handleMenuColor.bind(this,"main")}
                   className={'navOpt waves-effect ' + this.props.clickSelected["main"]}  >
                   <a href='#'>Main</a>
                 </li>
                 <li onClick={this.props.handleMenuColor.bind(this,"about")}
                   className={'navOpt waves-effect ' + this.props.clickSelected["about"]}  >
                   <a href='#'>About</a>
                 </li>
                 <li onClick={this.props.handleMenuColor.bind(this,"projects")}
                   className={'navOpt waves-effect ' + this.props.clickSelected["projects"]}  >
                   <a href='#'>Projects</a>
                 </li>
                 <li onClick={this.props.handleMenuColor.bind(this,"contacts")}
                   className={'navOpt waves-effect ' + this.props.clickSelected["contacts"]}  >
                   <a href='#'>Contact</a>
                 </li>
               </ul>
               </nav>
            )
          }
        }
      </Motion>

    )
  }
}
// ref={node => this.myRefName = node}
