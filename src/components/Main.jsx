import React, {Component} from 'react';
import MobiBtn from './MobiBtn.jsx';
import NavBar from './NavBar.jsx';

export default class Main extends React.Component {
    render() {

        return (
            <section className='mainContainer'>
                <MobiBtn showMenu={this.props.showMenu}
                  handleMenu={this.props.handleMenu}/>
                <NavBar handleMenuColor={this.props.handleMenuColor1}
                  clickSelected={this.props.clickSelected1}
                  availableWidth={this.props.availableWidth}
                  showMenu={this.props.showMenu}
                  delayHideShow={this.props.delayHideShow}
                  ref={(a1) => this.a1 = a1}/>

                 {/*width={"765.8px"} height={"145.2px"}*/}
                <svg version="1.1" id='outlinedText_1' width={'765.8px'} height={"145.2px"}
                	 xmlns="http://www.w3.org/2000/svg"
                	 x="0px" y="0px"  viewBox={"0 0 765.8 145.2"} >
                <g id="XMLID_131_">
                	<path id="XMLID_263_" className="st0_B" d="M6.1,50V2.7C6.1,2.3,6.5,2,6.9,2h24.3c1,0,1,1.5,0,1.5H7.6V50C7.6,51,6.1,51,6.1,50z M31.1,13
                		H17v7.9h9.8c1,0,1,1.6,0,1.6H16.2c-0.5,0-0.8-0.4-0.8-0.8v-9.5c0-0.4,0.3-0.7,0.8-0.7h14.9C32.1,11.4,32.1,13,31.1,13z M26.8,31.9
                		H17V50c0,1-1.6,1-1.6,0V31.1c0-0.5,0.3-0.8,0.8-0.8h10.6C27.8,30.3,27.8,31.9,26.8,31.9z"/>
                	<path id="XMLID_259_" className="st1_B" d="M40.4,50.8c-0.4,0-0.7-0.4-0.7-0.8V2.7c0-0.4,0.3-0.8,0.7-0.8h18.4c8.2,0,14.7,6.8,14.7,15
                		c0,7.5-5.6,14.1-13.1,14.9L74,49.5c0.3,0.3,0.2,0.8-0.1,1c-0.3,0.3-0.8,0.3-1.1-0.1L58.3,31.6c-0.1-0.1-0.2-0.3-0.2-0.5
                		c0-0.5,0.3-0.8,0.7-0.8c7.3,0,13.1-6.1,13.1-13.4c0-7.3-5.8-13.4-13.1-13.4H41.2V50C41.2,50.4,40.8,50.8,40.4,50.8z M62.4,50.6
                		c-0.3,0.3-0.9,0.2-1.1-0.2L50.5,35.9V50c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.7-0.4-0.7-0.8V33.6c-0.1-0.2,0.1-0.5,0.3-0.7
                		c0.3-0.2,0.8-0.1,1,0.2l12.2,16.4C62.8,49.9,62.7,50.3,62.4,50.6z M55.4,22.4c-0.5,0-0.8-0.3-0.8-0.7c0-0.4,0.3-0.7,0.8-0.7H58
                		c2.2,0,4.1-1.7,4.1-4c0-2.3-1.8-4-4.1-4h-8.3c-1,0-1-1.5,0-1.5H58c3.1,0,5.6,2.3,5.6,5.5c0,3.1-2.5,5.4-5.6,5.4H55.4z"/>
                	<path id="XMLID_256_" className="st1_B" d="M127.5,19.7c-0.5,0.1-0.9-0.1-1-0.5c-3.1-9.9-12.4-16.5-22.8-16.5c-13.9,0-23.6,9.9-23.6,23.7
                		S89.9,50,103.8,50c10.4,0,19.6-6.6,22.8-16.6c0.1-0.5,0.5-0.7,1-0.5c0.4,0.1,0.7,0.6,0.5,1c-3.3,10.6-13.3,17.7-24.3,17.7
                		c-14.8,0-25.1-10.7-25.1-25.3C78.7,11.7,89,1,103.8,1c11,0,20.9,7.1,24.3,17.7C128.2,19.1,127.9,19.6,127.5,19.7z M90.9,32.9
                		c0.4-0.2,0.9-0.1,1.1,0.3c2.4,4.3,6.8,7,11.7,7c7.6,0,13.6-6.3,13.6-14s-6-14-13.6-14c-4.9,0-9.4,2.7-11.7,7
                		c-0.2,0.4-0.7,0.5-1.1,0.3c-0.3-0.3-0.5-0.7-0.3-1.1c2.7-4.8,7.7-7.7,13.1-7.7c8.5,0,15.2,7.1,15.2,15.5c0,8.5-6.7,15.5-15.2,15.5
                		c-5.4,0-10.4-3-13.1-7.8C90.5,33.7,90.6,33.1,90.9,32.9z"/>
                	<path id="XMLID_251_" className="st1_B" d="M136.9,50V2.8c0-1.1,1.5-1.1,1.5,0V50C138.4,51,136.9,51,136.9,50z M146.8,2.3l19,27.4V2.8
                		c0-1.1,1.6-1.1,1.6,0v29.4c0,0.7-1,1.1-1.4,0.5L145.6,3.2C145,2.4,146.2,1.5,146.8,2.3z M166.8,50.5L147.9,23v27c0,1-1.6,1-1.6,0
                		V20.6c0-0.7,0.9-1.1,1.4-0.5l20.3,29.4C168.6,50.4,167.4,51.3,166.8,50.5z M175.1,50V2.8c0-1.1,1.6-1.1,1.6,0V50
                		C176.7,51,175.1,51,175.1,50z"/>
                	<path id="XMLID_247_" className="st1_B" d="M183.3,2.8c0-0.4,0.3-0.7,0.7-0.7h32.7c0.5,0,0.8,0.3,0.8,0.7c0,0.4-0.3,0.7-0.8,0.7H184
                		C183.6,3.5,183.3,3.2,183.3,2.8z M183.3,12.2c0-0.4,0.3-0.7,0.7-0.7h11.7c0.4,0,0.7,0.3,0.7,0.7V50c0,0.4-0.3,0.7-0.7,0.7
                		c-0.5,0-0.8-0.3-0.8-0.7V13h-11C183.6,13,183.3,12.6,183.3,12.2z M217.5,12.2c0,0.5-0.3,0.9-0.7,0.9h-11v37c0,0.4-0.3,0.7-0.7,0.7
                		c-0.4,0-0.7-0.3-0.7-0.7V12.2c0-0.4,0.3-0.7,0.7-0.7h11.7C217.2,11.4,217.5,11.8,217.5,12.2z"/>
                	<path id="XMLID_245_" className="st1_B" d="M224.9,27.9c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.7,0.8-0.7h17.9c0.4,0,0.7,0.3,0.7,0.7
                		c0,0.4-0.3,0.8-0.7,0.8H224.9z"/>
                	<path id="XMLID_241_" className="st1_B" d="M277.9,50c0,0.4-0.3,0.7-0.7,0.7h-24.3c-0.5,0-0.8-0.3-0.8-0.7V2.7c0-0.4,0.3-0.7,0.8-0.7
                		h24.3c0.4,0,0.7,0.3,0.7,0.7c0,0.5-0.3,0.8-0.7,0.8h-23.6v45.7h23.6C277.5,49.2,277.9,49.5,277.9,50z M277.9,12.2
                		c0,0.5-0.3,0.8-0.7,0.8H263v7.9h9.8c0.5,0,0.8,0.4,0.8,0.8c0,0.4-0.3,0.8-0.8,0.8h-10.5c-0.5,0-0.8-0.4-0.8-0.8v-9.5
                		c0-0.4,0.3-0.7,0.8-0.7h14.9C277.5,11.4,277.9,11.8,277.9,12.2z M273.5,31.1c0,0.4-0.3,0.7-0.8,0.7H263v7.9h14.2
                		c0.4,0,0.7,0.3,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-14.9c-0.5,0-0.8-0.3-0.8-0.7v-9.5c0-0.5,0.3-0.8,0.8-0.8h10.5
                		C273.2,30.3,273.5,30.6,273.5,31.1z"/>
                	<path id="XMLID_236_" className="st1_B" d="M286.7,50V2.8c0-1.1,1.5-1.1,1.5,0V50C288.2,51,286.7,51,286.7,50z M296.5,2.3l19,27.4V2.8
                		c0-1.1,1.6-1.1,1.6,0v29.4c0,0.7-1,1.1-1.4,0.5L295.3,3.2C294.7,2.4,296,1.5,296.5,2.3z M316.5,50.5L297.6,23v27c0,1-1.6,1-1.6,0
                		V20.6c0-0.7,0.9-1.1,1.4-0.5l20.3,29.4C318.3,50.4,317.2,51.3,316.5,50.5z M324.8,50V2.8c0-1.1,1.6-1.1,1.6,0V50
                		C326.4,51,324.8,51,324.8,50z"/>
                	<path id="XMLID_233_" className="st1_B" d="M374,16.4c2.6,6.3,2.6,13.6,0,19.9c-3.2,8.1-10.6,14.4-22.2,14.4H347c-0.5,0-0.8-0.3-0.8-0.7
                		c0-0.5,0.3-0.8,0.8-0.8h4.7c10.9,0,17.8-5.9,20.9-13.5c2.4-5.9,2.4-12.8,0-18.7c-3-7.6-10-13.5-20.9-13.5h-13.3V50
                		c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V2.7c0-0.4,0.3-0.7,0.7-0.7h14C363.3,2,370.7,8.3,374,16.4z M347.1,31.8
                		c-0.4,0-0.8-0.3-0.8-0.7V12.2c0-0.5,0.4-0.8,0.8-0.8h4.7c6.9,0,11.3,3.9,13.3,8.9c1.5,3.9,1.5,8.3,0,12.2c-1.9,5-6.4,8.9-13.3,8.9
                		h-4.7c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8h4.7c6.2,0,10.1-3.4,11.9-7.9c1.3-3.5,1.3-7.6,0-11c-1.8-4.4-5.7-7.9-11.9-7.9h-3.9
                		v18.2C347.9,31.5,347.5,31.8,347.1,31.8z"/>
                	<path id="XMLID_230_" className="st0_B" d="M440.3,16.4c2.6,6.3,2.6,13.6,0,19.9c-3.2,8.1-10.6,14.4-22.2,14.4h-4.7
                		c-0.5,0-0.8-0.3-0.8-0.7c0-0.5,0.3-0.8,0.8-0.8h4.7c10.9,0,17.8-5.9,20.9-13.5c2.4-5.9,2.4-12.8,0-18.7c-3-7.6-10-13.5-20.9-13.5
                		h-13.3V50c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V2.7c0-0.4,0.3-0.7,0.7-0.7h14C429.7,2,437.1,8.3,440.3,16.4z M413.4,31.8
                		c-0.4,0-0.8-0.3-0.8-0.7V12.2c0-0.5,0.4-0.8,0.8-0.8h4.7c6.9,0,11.3,3.9,13.3,8.9c1.5,3.9,1.5,8.3,0,12.2c-1.9,5-6.4,8.9-13.3,8.9
                		h-4.7c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8h4.7c6.2,0,10.1-3.4,11.9-7.9c1.3-3.5,1.3-7.6,0-11c-1.8-4.4-5.7-7.9-11.9-7.9h-3.9
                		v18.2C414.2,31.5,413.8,31.8,413.4,31.8z"/>
                	<path id="XMLID_226_" className="st1_B" d="M476.9,50c0,0.4-0.3,0.7-0.7,0.7h-24.3c-0.5,0-0.8-0.3-0.8-0.7V2.7c0-0.4,0.3-0.7,0.8-0.7
                		h24.3c0.4,0,0.7,0.3,0.7,0.7c0,0.5-0.3,0.8-0.7,0.8h-23.6v45.7h23.6C476.5,49.2,476.9,49.5,476.9,50z M476.9,12.2
                		c0,0.5-0.3,0.8-0.7,0.8H462v7.9h9.8c0.5,0,0.8,0.4,0.8,0.8c0,0.4-0.3,0.8-0.8,0.8h-10.5c-0.5,0-0.8-0.4-0.8-0.8v-9.5
                		c0-0.4,0.3-0.7,0.8-0.7h14.9C476.5,11.4,476.9,11.8,476.9,12.2z M472.5,31.1c0,0.4-0.3,0.7-0.8,0.7H462v7.9h14.2
                		c0.4,0,0.7,0.3,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-14.9c-0.5,0-0.8-0.3-0.8-0.7v-9.5c0-0.5,0.3-0.8,0.8-0.8h10.5
                		C472.2,30.3,472.5,30.6,472.5,31.1z"/>
                	<path id="XMLID_223_" className="st1_B" d="M520.6,2.8c0.3,0.1,0.5,0.6,0.4,0.9l-19.4,47.9c-0.3,0.7-1.1,0.7-1.4,0L480.9,3.7
                		c-0.1-0.3,0.1-0.8,0.4-0.9c0.4-0.1,0.9,0,1,0.4l18.6,46.2l18.6-46.2C519.8,2.8,520.2,2.7,520.6,2.8z M491.6,2.8
                		c0.4-0.1,0.8,0,0.9,0.4l8.5,20.8l8.4-20.8c0.1-0.4,0.6-0.5,1-0.4c0.4,0.1,0.5,0.6,0.4,0.9l-9.1,22.6c-0.2,0.6-1.1,0.7-1.4,0
                		l-9.1-22.6C491,3.4,491.1,2.9,491.6,2.8z"/>
                	<path id="XMLID_219_" className="st1_B" d="M552.6,50c0,0.4-0.3,0.7-0.7,0.7h-24.3c-0.5,0-0.8-0.3-0.8-0.7V2.7c0-0.4,0.3-0.7,0.8-0.7
                		h24.3c0.4,0,0.7,0.3,0.7,0.7c0,0.5-0.3,0.8-0.7,0.8h-23.6v45.7h23.6C552.2,49.2,552.6,49.5,552.6,50z M552.6,12.2
                		c0,0.5-0.3,0.8-0.7,0.8h-14.2v7.9h9.8c0.5,0,0.8,0.4,0.8,0.8c0,0.4-0.3,0.8-0.8,0.8h-10.5c-0.5,0-0.8-0.4-0.8-0.8v-9.5
                		c0-0.4,0.3-0.7,0.8-0.7h14.9C552.2,11.4,552.6,11.8,552.6,12.2z M548.2,31.1c0,0.4-0.3,0.7-0.8,0.7h-9.8v7.9h14.2
                		c0.4,0,0.7,0.3,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-14.9c-0.5,0-0.8-0.3-0.8-0.7v-9.5c0-0.5,0.3-0.8,0.8-0.8h10.5
                		C547.9,30.3,548.2,30.6,548.2,31.1z"/>
                	<path id="XMLID_216_" className="st1_B" d="M590.1,50c0,0.4-0.3,0.7-0.8,0.7h-27.3c-0.4,0-0.7-0.3-0.7-0.7V2.7c0-0.4,0.3-0.7,0.7-0.7
                		c0.5,0,0.8,0.3,0.8,0.7v46.5h26.5C589.8,49.2,590.1,49.5,590.1,50z M571.4,2c0.4,0,0.8,0.3,0.8,0.7v37h17.1c0.5,0,0.8,0.3,0.8,0.8
                		c0,0.4-0.3,0.7-0.8,0.7h-17.9c-0.4,0-0.8-0.3-0.8-0.7V2.7C570.7,2.3,571.1,2,571.4,2z"/>
                	<path id="XMLID_213_" className="st1_B" d="M645.4,19.7c-0.5,0.1-0.9-0.1-1-0.5C641.2,9.2,632,2.6,621.6,2.6c-13.9,0-23.6,9.9-23.6,23.7
                		S607.7,50,621.6,50c10.4,0,19.6-6.6,22.8-16.6c0.1-0.5,0.5-0.7,1-0.5c0.4,0.1,0.7,0.6,0.5,1c-3.3,10.6-13.3,17.7-24.3,17.7
                		c-14.8,0-25.1-10.7-25.1-25.3c0-14.5,10.2-25.3,25.1-25.3c11,0,20.9,7.1,24.3,17.7C646,19.1,645.8,19.6,645.4,19.7z M608.8,32.9
                		c0.4-0.2,0.9-0.1,1.1,0.3c2.4,4.3,6.8,7,11.7,7c7.6,0,13.6-6.3,13.6-14s-6-14-13.6-14c-4.9,0-9.4,2.7-11.7,7
                		c-0.2,0.4-0.7,0.5-1.1,0.3c-0.3-0.3-0.5-0.7-0.3-1.1c2.7-4.8,7.7-7.7,13.1-7.7c8.5,0,15.2,7.1,15.2,15.5c0,8.5-6.7,15.5-15.2,15.5
                		c-5.4,0-10.4-3-13.1-7.8C608.3,33.7,608.4,33.1,608.8,32.9z"/>
                	<path id="XMLID_210_" className="st1_B" d="M655.5,50.7c-0.4,0-0.7-0.3-0.7-0.7V2.8c0-0.4,0.3-0.8,0.7-0.8h18.4c6.9,0,11.3,3.9,13.3,8.9
                		c1.4,3.8,1.4,8.3,0,12.2c-2,4.9-6.4,8.9-13.3,8.9h-8.3V50c0,0.4-0.3,0.7-0.7,0.7c-0.5,0-0.8-0.3-0.8-0.7V31c0-0.4,0.3-0.7,0.8-0.7
                		h9.1c6.2,0,10.1-3.4,11.9-7.9c1.3-3.4,1.3-7.5,0-10.9c-1.8-4.5-5.7-7.9-11.9-7.9h-17.6V50C656.3,50.4,655.9,50.7,655.5,50.7z
                		 M670.4,22.4c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7h2.7c1.8,0,3.1-1,3.7-2.4c0.4-1,0.4-2.2,0-3.2c-0.5-1.3-1.8-2.3-3.7-2.3
                		h-8.3c-0.5,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.7,0.8-0.7h8.3c2.6,0,4.3,1.4,5.1,3.2c0.6,1.4,0.6,3,0,4.4c-0.8,1.9-2.4,3.2-5.1,3.2
                		H670.4z"/>
                	<path id="XMLID_206_" className="st1_B" d="M721.5,50c0,0.4-0.3,0.7-0.7,0.7h-24.3c-0.5,0-0.8-0.3-0.8-0.7V2.7c0-0.4,0.3-0.7,0.8-0.7
                		h24.3c0.4,0,0.7,0.3,0.7,0.7c0,0.5-0.3,0.8-0.7,0.8h-23.6v45.7h23.6C721.2,49.2,721.5,49.5,721.5,50z M721.5,12.2
                		c0,0.5-0.3,0.8-0.7,0.8h-14.2v7.9h9.8c0.5,0,0.8,0.4,0.8,0.8c0,0.4-0.3,0.8-0.8,0.8h-10.5c-0.5,0-0.8-0.4-0.8-0.8v-9.5
                		c0-0.4,0.3-0.7,0.8-0.7h14.9C721.2,11.4,721.5,11.8,721.5,12.2z M717.2,31.1c0,0.4-0.3,0.7-0.8,0.7h-9.8v7.9h14.2
                		c0.4,0,0.7,0.3,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-14.9c-0.5,0-0.8-0.3-0.8-0.7v-9.5c0-0.5,0.3-0.8,0.8-0.8h10.5
                		C716.9,30.3,717.2,30.6,717.2,31.1z"/>
                	<path id="XMLID_202_" className="st1_B" d="M731,50.8c-0.4,0-0.7-0.4-0.7-0.8V2.7c0-0.4,0.3-0.8,0.7-0.8h18.4c8.2,0,14.7,6.8,14.7,15
                		c0,7.5-5.6,14.1-13.1,14.9l13.6,17.7c0.3,0.3,0.2,0.8-0.1,1c-0.3,0.3-0.8,0.3-1.1-0.1l-14.4-18.8c-0.1-0.1-0.2-0.3-0.2-0.5
                		c0-0.5,0.3-0.8,0.7-0.8c7.3,0,13.1-6.1,13.1-13.4c0-7.3-5.8-13.4-13.1-13.4h-17.6V50C731.8,50.4,731.5,50.8,731,50.8z M753.1,50.6
                		c-0.3,0.3-0.9,0.2-1.1-0.2l-10.8-14.6V50c0,0.4-0.4,0.8-0.8,0.8s-0.7-0.4-0.7-0.8V33.6c-0.1-0.2,0.1-0.5,0.3-0.7
                		c0.3-0.2,0.8-0.1,1,0.2l12.2,16.4C753.5,49.9,753.4,50.3,753.1,50.6z M746,22.4c-0.5,0-0.8-0.3-0.8-0.7c0-0.4,0.3-0.7,0.8-0.7h2.6
                		c2.2,0,4.1-1.7,4.1-4c0-2.3-1.8-4-4.1-4h-8.3c-1,0-1-1.5,0-1.5h8.3c3.1,0,5.6,2.3,5.6,5.5c0,3.1-2.5,5.4-5.6,5.4H746z"/>
                	<path id="XMLID_199_" className="st2_B" d="M25.9,76.2c0.2,0.1,0.2,0.3,0.2,0.4l-8.3,20.6c-0.1,0.2-0.3,0.2-0.4,0.2
                		c-0.1,0-0.2-0.1-0.2-0.2l-3.6-9l-3.6,9c-0.1,0.2-0.3,0.2-0.4,0.2c-0.1,0-0.2-0.1-0.2-0.2L1,76.6c-0.1-0.2,0-0.3,0.2-0.4
                		c0.1-0.1,0.3,0,0.4,0.2l8.1,19.8l3.6-8.9c0.1-0.3,0.5-0.3,0.6,0l3.6,8.9l8-19.8C25.6,76.2,25.7,76.1,25.9,76.2z M5.6,76.2
                		c0.2-0.1,0.4,0,0.5,0.2l3.6,8.9l3.6-8.9c0.1-0.2,0.3-0.3,0.4-0.2c0.1,0.1,0.2,0.1,0.2,0.2l3.6,8.9l3.6-8.9c0.1-0.2,0.3-0.3,0.4-0.2
                		c0.2,0.1,0.3,0.3,0.2,0.4l-3.9,9.7c-0.1,0.3-0.5,0.3-0.6,0l-3.6-9l-3.6,9c-0.1,0.3-0.5,0.3-0.6,0l-3.9-9.7
                		C5.4,76.5,5.5,76.3,5.6,76.2z"/>
                	<path id="XMLID_196_" className="st2_B" d="M28.9,97c-0.2,0-0.3-0.1-0.3-0.3V76.3c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3v20.4
                		C29.3,96.9,29.1,97,28.9,97z M33,97c-0.2,0-0.3-0.1-0.3-0.3V76.3c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3v20.4
                		C33.3,96.9,33.2,97,33,97z"/>
                	<path id="XMLID_192_" className="st2_B" d="M36.2,76.3c0-0.2,0.1-0.3,0.3-0.3h14.1c0.2,0,0.3,0.1,0.3,0.3c0,0.2-0.1,0.3-0.3,0.3H36.5
                		C36.3,76.6,36.2,76.5,36.2,76.3z M36.2,80.4c0-0.2,0.1-0.3,0.3-0.3h5.1c0.2,0,0.3,0.1,0.3,0.3v16.3c0,0.2-0.1,0.3-0.3,0.3
                		c-0.2,0-0.3-0.1-0.3-0.3V80.7h-4.7C36.3,80.7,36.2,80.6,36.2,80.4z M50.9,80.4c0,0.2-0.1,0.4-0.3,0.4h-4.8v15.9
                		c0,0.2-0.1,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3V80.4c0-0.2,0.1-0.3,0.3-0.3h5.1C50.8,80.1,50.9,80.2,50.9,80.4z"/>
                	<path id="XMLID_187_" className="st2_B" d="M54.3,97c-0.2,0-0.3-0.1-0.3-0.3V76.3c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3v20.4
                		C54.6,96.9,54.5,97,54.3,97z M58.3,76c0.2,0,0.3,0.1,0.3,0.3v7.8h5.4v-7.8c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3v8.2
                		c0,0.2-0.1,0.3-0.3,0.3h-6.1c-0.2,0-0.3-0.2-0.3-0.3v-8.2C58,76.1,58.2,76,58.3,76z M64.4,97c-0.2,0-0.3-0.1-0.3-0.3v-7.8h-5.4v7.8
                		c0,0.2-0.2,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3v-8.2c0-0.2,0.2-0.3,0.3-0.3h6.1c0.2,0,0.3,0.1,0.3,0.3v8.2
                		C64.7,96.9,64.6,97,64.4,97z M68.4,76c0.2,0,0.3,0.1,0.3,0.3v20.4c0,0.2-0.1,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3V76.3
                		C68.1,76.1,68.3,76,68.4,76z"/>
                	<path id="XMLID_183_" className="st2_B" d="M79.8,96.7c-0.2-0.1-0.3-0.3-0.2-0.4l8.3-20.5c0.1-0.3,0.5-0.3,0.6,0l8.3,20.5
                		c0.1,0.1,0,0.4-0.2,0.4c-0.2,0.1-0.4,0-0.4-0.2l-8-19.8l-8,19.8C80.2,96.7,80,96.7,79.8,96.7z M84.2,96.7c-0.2-0.1-0.3-0.3-0.2-0.4
                		l0.8-1.9c0-0.1,0.2-0.2,0.3-0.2h6.3c0.2,0,0.3,0.1,0.3,0.2l0.8,1.9c0.1,0.1,0,0.4-0.2,0.4c-0.2,0.1-0.3,0-0.4-0.2l-0.7-1.7h-5.9
                		l-0.7,1.7C84.5,96.7,84.4,96.7,84.2,96.7z M86.4,90.4c0-0.2,0.2-0.3,0.3-0.3h2.5l-1.3-3.3c-0.1-0.2,0-0.4,0.2-0.4
                		c0.2-0.1,0.4,0,0.5,0.2l1.5,3.7c0,0.1,0,0.1,0,0.1c0,0.2-0.1,0.3-0.3,0.3h-3C86.5,90.7,86.4,90.6,86.4,90.4z"/>
                	<path id="XMLID_179_" className="st2_B" d="M106,76.3c0-0.2,0.1-0.3,0.3-0.3h14.1c0.2,0,0.3,0.1,0.3,0.3c0,0.2-0.1,0.3-0.3,0.3h-14.1
                		C106.2,76.6,106,76.5,106,76.3z M106,80.4c0-0.2,0.1-0.3,0.3-0.3h5.1c0.2,0,0.3,0.1,0.3,0.3v16.3c0,0.2-0.1,0.3-0.3,0.3
                		c-0.2,0-0.3-0.1-0.3-0.3V80.7h-4.7C106.2,80.7,106,80.6,106,80.4z M120.8,80.4c0,0.2-0.1,0.4-0.3,0.4h-4.8v15.9
                		c0,0.2-0.1,0.3-0.3,0.3s-0.3-0.1-0.3-0.3V80.4c0-0.2,0.1-0.3,0.3-0.3h5.1C120.6,80.1,120.8,80.2,120.8,80.4z"/>
                	<path id="XMLID_176_" className="st2_B" d="M143.5,83.6c-0.2,0.1-0.4,0-0.4-0.2c-1.4-4.3-5.3-7.1-9.8-7.1c-6,0-10.2,4.3-10.2,10.2
                		c0,5.9,4.2,10.2,10.2,10.2c4.5,0,8.5-2.9,9.8-7.2c0.1-0.2,0.2-0.3,0.4-0.2c0.2,0.1,0.3,0.3,0.2,0.4c-1.4,4.6-5.7,7.6-10.5,7.6
                		c-6.4,0-10.8-4.6-10.8-10.9c0-6.3,4.4-10.9,10.8-10.9c4.7,0,9,3.1,10.5,7.6C143.8,83.3,143.7,83.6,143.5,83.6z M127.7,89.3
                		c0.2-0.1,0.4,0,0.5,0.1c1,1.9,2.9,3,5.1,3c3.3,0,5.9-2.7,5.9-6c0-3.3-2.6-6-5.9-6c-2.1,0-4,1.2-5.1,3c-0.1,0.2-0.3,0.2-0.5,0.1
                		c-0.1-0.1-0.2-0.3-0.1-0.5c1.2-2.1,3.3-3.3,5.7-3.3c3.6,0,6.5,3.1,6.5,6.7c0,3.7-2.9,6.7-6.5,6.7c-2.3,0-4.5-1.3-5.7-3.4
                		C127.5,89.6,127.6,89.4,127.7,89.3z"/>
                	<path id="XMLID_173_" className="st2_B" d="M162.6,76c0.2,0,0.3,0.1,0.3,0.3v13.1c0,4.6-3.4,7.7-7.7,7.7c-4.4,0-7.7-3.2-7.7-7.7V76.3
                		c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3v13.1c0,4.2,3,7,7.1,7c3.9,0,7.1-2.7,7.1-7V76.3C162.3,76.2,162.4,76,162.6,76z
                		 M151.6,76.3c0-0.2,0.1-0.3,0.3-0.3s0.3,0.1,0.3,0.3v12.9c0,1.8,1.2,3.1,3,3.1c1.8,0,3-1.3,3-3.1V76.3c0-0.2,0.1-0.3,0.3-0.3
                		c0.2,0,0.3,0.1,0.3,0.3v12.9c0,2.2-1.5,3.7-3.6,3.7c-2.1,0-3.6-1.5-3.6-3.7V76.3z"/>
                	<path id="XMLID_170_" className="st2_B" d="M181.2,77c-0.1,0.2-0.3,0.2-0.4,0.2c-1.2-0.5-2.5-0.8-3.8-0.8c-4.8,0-7.8,2.6-9.1,5.8
                		c-1,2.6-1,5.6,0,8.2c1.3,3.3,4.4,5.8,9.1,5.8c1.3,0,2.6-0.2,3.8-0.8c0.1-0.1,0.4,0,0.4,0.2c0.1,0.2,0,0.4-0.2,0.5
                		c-1.3,0.5-2.7,0.8-4.1,0.8c-5,0-8.3-2.7-9.7-6.2c-1.1-2.7-1.1-5.9,0-8.6c1.4-3.5,4.6-6.3,9.7-6.3c1.4,0,2.8,0.3,4.1,0.8
                		C181.2,76.7,181.3,76.9,181.2,77z M180.7,91.5c0.1,0.1,0,0.3-0.1,0.4c-1.2,0.7-2.2,0.9-3.6,0.9c-3,0-4.9-1.7-5.8-3.8
                		c-0.7-1.7-0.7-3.6,0-5.3c0.8-2.2,2.8-3.9,5.8-3.9c1.4,0,2.4,0.2,3.6,0.9c0.1,0.1,0.2,0.3,0.1,0.5c-0.1,0.1-0.3,0.2-0.4,0.1
                		c-1.1-0.6-2-0.8-3.3-0.8c-2.7,0-4.4,1.5-5.2,3.4c-0.6,1.5-0.6,3.3,0,4.8c0.8,1.9,2.5,3.4,5.2,3.4c1.3,0,2.2-0.2,3.3-0.9
                		C180.4,91.3,180.6,91.3,180.7,91.5z"/>
                	<path id="XMLID_165_" className="st2_B" d="M184.8,97c-0.2,0-0.3-0.1-0.3-0.3V76.3c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3v20.4
                		C185.2,96.9,185,97,184.8,97z M188.9,76c0.2,0,0.3,0.1,0.3,0.3v7.8h5.4v-7.8c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3v8.2
                		c0,0.2-0.1,0.3-0.3,0.3h-6.1c-0.2,0-0.3-0.2-0.3-0.3v-8.2C188.5,76.1,188.7,76,188.9,76z M194.9,97c-0.2,0-0.3-0.1-0.3-0.3v-7.8
                		h-5.4v7.8c0,0.2-0.2,0.3-0.3,0.3s-0.3-0.1-0.3-0.3v-8.2c0-0.2,0.2-0.3,0.3-0.3h6.1c0.2,0,0.3,0.1,0.3,0.3v8.2
                		C195.3,96.9,195.1,97,194.9,97z M199,76c0.2,0,0.3,0.1,0.3,0.3v20.4c0,0.2-0.1,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3V76.3
                		C198.7,76.1,198.8,76,199,76z"/>
                	<path id="XMLID_162_" className="st2_B" d="M232.2,83.6c-0.2,0.1-0.4,0-0.4-0.2c-1.4-4.3-5.3-7.1-9.8-7.1c-6,0-10.2,4.3-10.2,10.2
                		c0,5.9,4.2,10.2,10.2,10.2c4.5,0,8.5-2.9,9.8-7.2c0.1-0.2,0.2-0.3,0.4-0.2c0.2,0.1,0.3,0.3,0.2,0.4c-1.4,4.6-5.7,7.6-10.5,7.6
                		c-6.4,0-10.8-4.6-10.8-10.9c0-6.3,4.4-10.9,10.8-10.9c4.7,0,9,3.1,10.5,7.6C232.5,83.3,232.4,83.6,232.2,83.6z M216.5,89.3
                		c0.2-0.1,0.4,0,0.5,0.1c1,1.9,2.9,3,5.1,3c3.3,0,5.9-2.7,5.9-6c0-3.3-2.6-6-5.9-6c-2.1,0-4,1.2-5.1,3c-0.1,0.2-0.3,0.2-0.5,0.1
                		c-0.1-0.1-0.2-0.3-0.1-0.5c1.2-2.1,3.3-3.3,5.7-3.3c3.6,0,6.5,3.1,6.5,6.7c0,3.7-2.9,6.7-6.5,6.7c-2.3,0-4.5-1.3-5.7-3.4
                		C216.3,89.6,216.3,89.4,216.5,89.3z"/>
                	<path id="XMLID_158_" className="st2_B" d="M236.3,96.7V76.3c0-0.2,0.2-0.3,0.3-0.3h10.5c0.4,0,0.4,0.7,0,0.7H237v20.1
                		C237,97.1,236.3,97.1,236.3,96.7z M247.1,80.7H241v3.4h4.2c0.4,0,0.4,0.7,0,0.7h-4.6c-0.2,0-0.3-0.2-0.3-0.3v-4.1
                		c0-0.2,0.1-0.3,0.3-0.3h6.4C247.5,80.1,247.5,80.7,247.1,80.7z M245.2,88.9H241v7.8c0,0.4-0.7,0.4-0.7,0v-8.2
                		c0-0.2,0.1-0.3,0.3-0.3h4.6C245.7,88.2,245.7,88.9,245.2,88.9z"/>
                	<path id="XMLID_155_" className="st1_B" d="M32.3,105.8c0.3,0,0.6,0.3,0.6,0.6v23.9c0,8.5-6.2,14-14,14c-8.1,0-14-5.8-14-14v-23.9
                		c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6v23.9c0,7.6,5.4,12.8,12.9,12.8c7.2,0,12.9-5,12.9-12.8v-23.9
                		C31.6,106,31.9,105.8,32.3,105.8z M12.2,106.3c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6v23.5c0,3.3,2.3,5.6,5.5,5.6
                		c3.2,0,5.5-2.3,5.5-5.6v-23.5c0-0.3,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v23.5c0,3.9-2.8,6.7-6.6,6.7s-6.6-2.8-6.6-6.7V106.3z"/>
                	<path id="XMLID_150_" className="st0_B" d="M37.4,143.8c-0.3-0.2-0.3-0.5-0.2-0.8l11.9-19.4l-10.5-17c-0.2-0.3-0.1-0.7,0.2-0.9
                		c0.3-0.2,0.6-0.1,0.8,0.2l10.8,17.4c0.1,0.2,0.1,0.5,0,0.6l-12.1,19.8C38.1,143.9,37.7,144,37.4,143.8z M61.3,143.9
                		c-0.3,0.2-0.7,0.1-0.8-0.2l-6.6-10.7l-6.6,10.7c-0.2,0.3-0.5,0.4-0.8,0.2c-0.3-0.2-0.4-0.5-0.2-0.8l7-11.6c0.3-0.4,0.8-0.4,1.1,0
                		l7,11.6C61.7,143.3,61.6,143.7,61.3,143.9z M47.4,105.7c0.3-0.2,0.7-0.1,0.9,0.2l5.6,9.1l5.6-9.1c0.2-0.3,0.6-0.4,0.9-0.2
                		c0.3,0.2,0.4,0.6,0.2,0.8l-6.1,10c-0.3,0.4-0.8,0.4-1.1,0l-6.1-10C47.1,106.2,47.2,105.8,47.4,105.7z M68.9,105.7
                		c0.3,0.2,0.4,0.6,0.2,0.9l-10.5,17L70.5,143c0.2,0.3,0.1,0.7-0.2,0.8c-0.3,0.2-0.7,0.1-0.9-0.2l-12.1-19.8c-0.1-0.2-0.1-0.4,0-0.6
                		l10.8-17.4C68.3,105.6,68.6,105.5,68.9,105.7z"/>
                	<path id="XMLID_148_" className="st2_B" d="M84.8,143.3c-0.3-0.2-0.4-0.5-0.3-0.8l20.4-36c0.2-0.3,0.5-0.4,0.8-0.2
                		c0.3,0.2,0.4,0.5,0.2,0.8l-20.4,35.9C85.4,143.4,85.1,143.5,84.8,143.3z"/>
                	<path id="XMLID_145_" className="st1_B" d="M154,105.8c0.3,0,0.6,0.3,0.6,0.6v23.9c0,8.5-6.2,14-14,14c-8.1,0-14-5.8-14-14v-23.9
                		c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6v23.9c0,7.6,5.4,12.8,12.9,12.8c7.2,0,12.9-5,12.9-12.8v-23.9
                		C153.4,106,153.7,105.8,154,105.8z M134,106.3c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v23.5c0,3.3,2.3,5.6,5.5,5.6
                		c3.2,0,5.5-2.3,5.5-5.6v-23.5c0-0.3,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v23.5c0,3.9-2.8,6.7-6.6,6.7s-6.6-2.8-6.6-6.7V106.3z"/>
                	<path id="XMLID_142_" className="st0_B" d="M163.3,143.9c-0.4,0-0.6-0.3-0.6-0.6v-37.1c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6v37.1
                		C163.9,143.7,163.6,143.9,163.3,143.9z M170.7,143.9c-0.4,0-0.6-0.3-0.6-0.6v-37.1c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6
                		v37.1C171.2,143.7,171,143.9,170.7,143.9z"/>
                </g>
                </svg>


                {/*width={"347.2px"} height={"147px"}*/}
                <svg version="1.1" id='outlinedText_2' width={'347.2px'} height={"147px"}
                	 xmlns="http://www.w3.org/2000/svg"
                	 x="0px" y="0px" viewBox={"0 0 347.2 147"}>
                <g id="XMLID_16_">
                	<path id="XMLID_98_" className="st0_C" d="M3,25.8c-0.2,0-0.4-0.2-0.4-0.4V1.8c0-0.2,0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4v23.6
                		C3.4,25.6,3.2,25.8,3,25.8z M22.2,1.5c0.2,0.1,0.2,0.4,0.1,0.5l-7.4,10.6c-0.1,0.2-0.3,0.2-0.6,0.1c0,0-0.1-0.1-0.1-0.1L6.9,2
                		C6.8,1.9,6.9,1.6,7,1.5c0.2-0.1,0.4-0.1,0.5,0.1l7.1,10.1l7.1-10.1C21.8,1.4,22,1.4,22.2,1.5z M21.5,25.8c-0.2,0-0.4-0.2-0.4-0.4
                		V11.9l-6.2,8.9C14.8,21,14.6,21,14.4,21c0,0-0.1-0.1-0.1-0.1l-6.2-8.9v13.5c0,0.2-0.2,0.4-0.4,0.4c-0.2,0-0.4-0.2-0.4-0.4V10.7
                		c0-0.4,0.5-0.5,0.7-0.2l6.6,9.5l6.6-9.4c0.2-0.4,0.7-0.2,0.7,0.2v14.7C21.9,25.6,21.7,25.8,21.5,25.8z M26.2,25.8
                		c-0.2,0-0.4-0.2-0.4-0.4V1.8c0-0.2,0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4v23.6C26.6,25.6,26.5,25.8,26.2,25.8z"/>
                	<path id="XMLID_94_" className="st0_C" d="M37.9,25.8c-0.2,0-0.4-0.2-0.4-0.4V15.1l-8-12.8c-0.1-0.2-0.1-0.4,0.1-0.5
                		c0.2-0.1,0.4,0,0.5,0.1l8.1,12.8c0,0.1,0.1,0.1,0.1,0.2v10.3C38.3,25.6,38.2,25.8,37.9,25.8z M35.3,1.8c0.2-0.1,0.4,0,0.5,0.1
                		l4.4,7.5L44.7,2c0.2-0.2,0.4-0.2,0.6-0.1c0.2,0.1,0.2,0.3,0.1,0.5l-4.7,8.1c-0.2,0.3-0.5,0.3-0.7,0l-4.7-8.1
                		C35.1,2.2,35.1,1.9,35.3,1.8z M50.9,1.8C51.1,2,51.1,2.2,51,2.4l-8.1,12.8v10.2c0,0.3-0.2,0.4-0.4,0.4c-0.2,0-0.4-0.2-0.4-0.4V15
                		c0-0.1,0-0.1,0-0.2L50.4,2C50.5,1.8,50.7,1.7,50.9,1.8z"/>
                	<path id="XMLID_89_" className="st0_C" d="M63,25.4V2.2c0-0.5,0.7-0.5,0.7,0v23.2C63.7,25.9,63,25.9,63,25.4z M67.9,2l9.4,13.5V2.2
                		c0-0.5,0.8-0.5,0.8,0v14.4c0,0.4-0.5,0.6-0.7,0.2L67.3,2.4C67,2,67.6,1.5,67.9,2z M77.8,25.6l-9.4-13.5v13.3c0,0.5-0.8,0.5-0.8,0
                		V10.9c0-0.4,0.5-0.5,0.7-0.2l10.1,14.5C78.7,25.6,78.1,26,77.8,25.6z M81.9,25.4V2.2c0-0.5,0.8-0.5,0.8,0v23.2
                		C82.7,25.9,81.9,25.9,81.9,25.4z"/>
                	<path id="XMLID_85_" className="st0_C" d="M86.1,25.4c-0.2-0.1-0.3-0.3-0.2-0.5l9.5-23.4c0.1-0.4,0.6-0.3,0.7,0l9.5,23.4
                		c0.1,0.2,0,0.4-0.2,0.5c-0.2,0.1-0.4,0-0.5-0.2L95.8,2.6l-9.2,22.5C86.5,25.4,86.3,25.5,86.1,25.4z M91.2,25.4
                		c-0.2-0.1-0.3-0.3-0.2-0.5l0.9-2.1c0-0.2,0.2-0.2,0.4-0.2h7.2c0.2,0,0.3,0.1,0.4,0.2l0.9,2.1c0.1,0.2,0,0.4-0.2,0.5s-0.4,0-0.5-0.2
                		l-0.8-1.9h-6.7l-0.8,1.9C91.6,25.4,91.4,25.5,91.2,25.4z M93.7,18.3c0-0.2,0.2-0.4,0.4-0.4H97l-1.5-3.7c-0.1-0.2,0-0.4,0.2-0.5
                		c0.2-0.1,0.4,0,0.5,0.2l1.7,4.2c0,0.1,0,0.1,0,0.2c0,0.2-0.2,0.4-0.4,0.4h-3.4C93.9,18.6,93.7,18.4,93.7,18.3z"/>
                	<path id="XMLID_80_" className="st0_C" d="M109.3,25.8c-0.2,0-0.4-0.2-0.4-0.4V1.8c0-0.2,0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4v23.6
                		C109.7,25.6,109.6,25.8,109.3,25.8z M128.6,1.5c0.2,0.1,0.2,0.4,0.1,0.5l-7.4,10.6c-0.1,0.2-0.3,0.2-0.6,0.1c0,0-0.1-0.1-0.1-0.1
                		L113.3,2c-0.1-0.2-0.1-0.4,0.1-0.5c0.2-0.1,0.4-0.1,0.5,0.1l7.1,10.1L128,1.6C128.1,1.4,128.4,1.4,128.6,1.5z M127.9,25.8
                		c-0.2,0-0.4-0.2-0.4-0.4V11.9l-6.2,8.9c-0.1,0.2-0.3,0.2-0.6,0.1c0,0-0.1-0.1-0.1-0.1l-6.2-8.9v13.5c0,0.2-0.2,0.4-0.4,0.4
                		c-0.2,0-0.4-0.2-0.4-0.4V10.7c0-0.4,0.5-0.5,0.7-0.2l6.6,9.5l6.6-9.4c0.2-0.4,0.7-0.2,0.7,0.2v14.7
                		C128.3,25.6,128.1,25.8,127.9,25.8z M132.6,25.8c-0.2,0-0.4-0.2-0.4-0.4V1.8c0-0.2,0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4v23.6
                		C133,25.6,132.8,25.8,132.6,25.8z"/>
                	<path id="XMLID_76_" className="st0_C" d="M151,25.4c0,0.2-0.2,0.4-0.4,0.4h-12c-0.2,0-0.4-0.2-0.4-0.4V2.2c0-0.2,0.2-0.4,0.4-0.4h12
                		c0.2,0,0.4,0.2,0.4,0.4c0,0.2-0.2,0.4-0.4,0.4H139V25h11.7C150.8,25,151,25.2,151,25.4z M151,6.8c0,0.2-0.2,0.4-0.4,0.4h-7v3.9h4.8
                		c0.2,0,0.4,0.2,0.4,0.4c0,0.2-0.2,0.4-0.4,0.4h-5.2c-0.2,0-0.4-0.2-0.4-0.4V6.8c0-0.2,0.2-0.4,0.4-0.4h7.4
                		C150.8,6.4,151,6.6,151,6.8z M148.9,16.1c0,0.2-0.2,0.4-0.4,0.4h-4.8v3.9h7c0.2,0,0.4,0.2,0.4,0.4c0,0.2-0.2,0.4-0.4,0.4h-7.4
                		c-0.2,0-0.4-0.2-0.4-0.4v-4.6c0-0.2,0.2-0.4,0.4-0.4h5.2C148.7,15.7,148.9,15.9,148.9,16.1z"/>
                	<path id="XMLID_73_" className="st0_C" d="M165,25.8c-0.2,0-0.4-0.2-0.4-0.4V2.2c0-0.2,0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4v23.2
                		C165.4,25.6,165.2,25.8,165,25.8z M169.6,25.8c-0.2,0-0.4-0.2-0.4-0.4V2.2c0-0.2,0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4v23.2
                		C170,25.6,169.8,25.8,169.6,25.8z"/>
                	<path id="XMLID_70_" className="st0_C" d="M174.8,23.6c3.7,2,9,2.6,11.9-0.3c2.2-2.2,2.7-6.3-0.1-8.8c-3.2-3-7.2-2.4-7.4-5.3
                		c-0.1-1.5,1.1-2.6,2.6-2.7c1.6-0.1,3,0.2,4.9,1c0.5,0.2,0.2,0.9-0.3,0.7c-1.1-0.5-3.1-1.1-4.6-0.9c-1,0.1-1.9,0.7-1.8,1.8
                		c0,0.5,0.3,1,0.7,1.4c1.5,1.1,8.6,2.3,8.6,8.2c0,5.9-5.2,8.4-11.2,7c-1.2-0.3-2.4-0.7-3.7-1.3C173.9,24,174.3,23.3,174.8,23.6z
                		 M187,3.4c-3.5-1.2-7.5-1.7-10,1.1c-2.1,2.2-2.6,6.4,0.2,8.9c3.2,2.8,7.2,2.2,7.3,5.2c0.1,1.5-1.3,2.6-2.8,2.7
                		c-2,0.1-4.7-0.4-6.8-1.9c-0.4-0.3,0-0.9,0.4-0.6c2,1.4,6.2,2.6,7.9,1.1c0.8-0.7,0.7-1.9-0.1-2.6c-1.5-1.3-8.6-2.1-8.6-8.2
                		c0-5,3.9-8.1,9.2-7.3c0.9,0.1,2.1,0.4,3.6,0.9C187.7,2.8,187.5,3.6,187,3.4z"/>
                	<path id="XMLID_67_" className="st1_C" d="M38.5,54.8c2.3,5.7,2.3,12.3,0,18c-2.9,7.3-9.7,13-20.3,13h-4.3c-0.4,0-0.7-0.3-0.7-0.7
                		c0-0.4,0.3-0.7,0.7-0.7h4.3c9.9,0,16.3-5.3,19-12.2c2.2-5.3,2.2-11.6,0-16.9c-2.8-6.9-9.1-12.2-19-12.2H6.2v42.1
                		c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.5c0-0.4,0.3-0.7,0.7-0.7h12.8C28.8,41.8,35.6,47.5,38.5,54.8z M14,68.8
                		c-0.4,0-0.7-0.3-0.7-0.7V51c0-0.4,0.4-0.7,0.7-0.7h4.2c6.3,0,10.4,3.5,12.1,8c1.4,3.5,1.4,7.5,0,11c-1.7,4.5-5.8,8.1-12.1,8.1H14
                		c-0.4,0-0.7-0.4-0.7-0.7c0-0.4,0.4-0.7,0.7-0.7h4.2c5.6,0,9.2-3.1,10.8-7.1c1.2-3.2,1.2-6.9,0-10c-1.6-4-5.2-7.2-10.8-7.2h-3.5
                		v16.5C14.7,68.5,14.4,68.8,14,68.8z"/>
                	<path id="XMLID_64_" className="st2_C" d="M91.4,57.8c-0.4,0.1-0.8-0.1-0.9-0.5c-2.9-9-11.3-15-20.8-15c-12.7,0-21.5,9-21.5,21.4
                		c0,12.4,8.8,21.5,21.5,21.5c9.5,0,17.9-6,20.8-15c0.1-0.4,0.5-0.6,0.9-0.5c0.4,0.1,0.6,0.5,0.5,0.9c-3.1,9.6-12.1,16-22.1,16
                		c-13.5,0-22.9-9.7-22.9-22.9c0-13.2,9.3-22.9,22.9-22.9c10,0,19.1,6.5,22.1,16C92,57.2,91.7,57.7,91.4,57.8z M58,69.8
                		c0.4-0.2,0.8-0.1,1,0.2c2.2,3.9,6.2,6.3,10.7,6.3c6.9,0,12.4-5.7,12.4-12.6c0-6.9-5.4-12.6-12.4-12.6c-4.5,0-8.6,2.5-10.7,6.3
                		c-0.2,0.4-0.7,0.5-1,0.3c-0.3-0.2-0.4-0.7-0.2-1c2.5-4.3,7-7,12-7c7.7,0,13.8,6.4,13.8,14c0,7.7-6.1,14.1-13.8,14.1
                		c-5,0-9.5-2.8-12-7.1C57.6,70.5,57.7,70,58,69.8z"/>
                	<path id="XMLID_60_" className="st2_C" d="M100.6,86c-0.4,0-0.7-0.3-0.7-0.8V42.4c0-0.4,0.3-0.8,0.7-0.8h16.9c7.5,0,13.4,6.2,13.4,13.6
                		c0,3.1-1.1,6.2-3,8.6c1.9,2.5,3,5.4,3,8.6c0,7.5-5.9,13.6-13.4,13.6h-8.3c-0.4,0-0.7-0.3-0.7-0.8c0-0.4,0.3-0.7,0.7-0.7h8.3
                		c6.7,0,12-5.6,12-12.2c0-3-1-5.8-3-8.1c-0.2-0.2-0.2-0.7,0-0.9c2-2.3,3-5.1,3-8.1c0-6.7-5.3-12.2-12-12.2h-16.2v42.2
                		C101.4,85.7,101,86,100.6,86z M108.5,50.9c0-0.4,0.3-0.7,0.8-0.7h7.5c2.9,0,5.1,2.2,5.1,5c0,2.8-2.3,5-5.1,5h-2.5
                		c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7h2.5c2,0,3.7-1.5,3.7-3.6c0-2.1-1.7-3.6-3.7-3.6h-7.5
                		C108.8,51.7,108.5,51.3,108.5,50.9z M114.3,77.4c-0.4,0-0.7-0.4-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7h2.5c2,0,3.7-1.5,3.7-3.6
                		c0-2.1-1.7-3.6-3.7-3.6h-7.5c-0.4,0-0.8-0.3-0.8-0.7c0-0.4,0.4-0.7,0.8-0.7h7.5c2.9,0,5.1,2.1,5.1,4.9c0,2.9-2.3,5-5.1,5H114.3z"/>
                	<path id="XMLID_56_" className="st2_C" d="M139.2,86c-0.4,0-0.7-0.4-0.7-0.7V42.5c0-0.4,0.3-0.7,0.7-0.7H156c7.5,0,13.4,6.2,13.4,13.6
                		c0,6.8-5.1,12.7-12,13.5l12.4,16c0.2,0.3,0.2,0.7-0.1,0.9c-0.3,0.3-0.7,0.2-1-0.1l-13.2-17c-0.1-0.1-0.2-0.3-0.2-0.5
                		c0-0.4,0.3-0.7,0.7-0.7c6.7,0,12-5.5,12-12.1c0-6.6-5.3-12.1-12-12.1h-16.1v42.1C139.9,85.6,139.6,86,139.2,86z M159.3,85.8
                		c-0.3,0.2-0.8,0.2-1-0.2l-9.8-13.2v12.8c0,0.4-0.4,0.7-0.7,0.7s-0.7-0.4-0.7-0.7V70.4c-0.1-0.2,0.1-0.4,0.2-0.6
                		c0.3-0.2,0.7-0.1,1,0.2l11.1,14.8C159.6,85.1,159.6,85.5,159.3,85.8z M152.9,60.2c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
                		h2.4c2,0,3.7-1.6,3.7-3.6c0-2.1-1.7-3.6-3.7-3.6h-7.5c-0.9,0-0.9-1.4,0-1.4h7.5c2.8,0,5.1,2.1,5.1,5c0,2.8-2.3,4.9-5.1,4.9H152.9z"
                		/>
                	<path id="XMLID_52_" className="st2_C" d="M199.2,85.2c0,0.4-0.3,0.7-0.7,0.7h-22.1c-0.4,0-0.7-0.3-0.7-0.7V42.5c0-0.4,0.3-0.7,0.7-0.7
                		h22.1c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7H177v41.4h21.5C198.9,84.5,199.2,84.8,199.2,85.2z M199.2,51
                		c0,0.4-0.3,0.7-0.7,0.7h-12.9v7.1h8.9c0.4,0,0.7,0.4,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-9.6c-0.4,0-0.7-0.4-0.7-0.7V51
                		c0-0.4,0.3-0.7,0.7-0.7h13.6C198.9,50.4,199.2,50.7,199.2,51z M195.2,68.1c0,0.4-0.3,0.7-0.7,0.7h-8.9V76h12.9
                		c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-13.6c-0.4,0-0.7-0.3-0.7-0.7v-8.6c0-0.4,0.3-0.7,0.7-0.7h9.6
                		C194.9,67.4,195.2,67.7,195.2,68.1z"/>
                	<path id="XMLID_48_" className="st2_C" d="M1.4,145.1c-0.4-0.1-0.5-0.6-0.4-0.9l17.5-43c0.2-0.7,1.1-0.6,1.3,0l17.5,43
                		c0.1,0.3,0,0.8-0.4,0.9c-0.4,0.1-0.8,0-0.9-0.4l-16.9-41.5L2.3,144.7C2.2,145.1,1.8,145.2,1.4,145.1z M10.8,145.1
                		c-0.4-0.1-0.6-0.6-0.4-0.9l1.6-3.9c0.1-0.3,0.4-0.4,0.7-0.4h13.3c0.4,0,0.6,0.2,0.7,0.4l1.6,3.9c0.1,0.3-0.1,0.8-0.4,0.9
                		c-0.4,0.1-0.7,0-0.9-0.4l-1.4-3.5H13l-1.4,3.5C11.5,145.1,11.1,145.2,10.8,145.1z M15.4,131.9c0-0.4,0.4-0.7,0.7-0.7h5.3l-2.8-6.8
                		c-0.1-0.4,0.1-0.8,0.4-0.9c0.4-0.2,0.8,0,1,0.4l3.1,7.7c0.1,0.1,0.1,0.2,0.1,0.3c0,0.4-0.3,0.7-0.7,0.7h-6.3
                		C15.7,132.6,15.4,132.3,15.4,131.9z"/>
                	<path id="XMLID_45_" className="st2_C" d="M69.8,145.1c0,0.4-0.3,0.7-0.7,0.7H44.2c-0.4,0-0.7-0.3-0.7-0.7v-42.8c0-0.4,0.3-0.7,0.7-0.7
                		c0.4,0,0.7,0.3,0.7,0.7v42.1H69C69.5,144.4,69.8,144.7,69.8,145.1z M52.7,101.6c0.4,0,0.7,0.3,0.7,0.7v33.5H69
                		c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7H52.7c-0.4,0-0.7-0.3-0.7-0.7v-34.2C52,101.9,52.4,101.6,52.7,101.6z"/>
                	<path id="XMLID_41_" className="st2_C" d="M100.6,145.1c0,0.4-0.3,0.7-0.7,0.7H77.8c-0.4,0-0.7-0.3-0.7-0.7v-42.8c0-0.4,0.3-0.7,0.7-0.7
                		H100c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7H78.5v41.4H100C100.3,144.4,100.6,144.7,100.6,145.1z M100.6,110.8
                		c0,0.4-0.3,0.7-0.7,0.7H87.1v7.1H96c0.4,0,0.7,0.4,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-9.6c-0.4,0-0.7-0.4-0.7-0.7v-8.6
                		c0-0.4,0.3-0.7,0.7-0.7H100C100.3,110.2,100.6,110.5,100.6,110.8z M96.7,128c0,0.4-0.3,0.7-0.7,0.7h-8.9v7.2H100
                		c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7H86.4c-0.4,0-0.7-0.3-0.7-0.7V128c0-0.4,0.3-0.7,0.7-0.7H96
                		C96.4,127.2,96.7,127.5,96.7,128z"/>
                	<path id="XMLID_36_" className="st2_C" d="M104.5,145.6c-0.3-0.2-0.4-0.6-0.2-1l13.9-22.4L106,102.6c-0.2-0.4-0.1-0.8,0.2-1
                		c0.3-0.2,0.7-0.1,0.9,0.2l12.5,20c0.1,0.2,0.1,0.5,0,0.7l-14.1,22.8C105.4,145.7,104.9,145.8,104.5,145.6z M132.4,145.7
                		c-0.4,0.2-0.8,0.1-1-0.2l-7.7-12.4l-7.7,12.4c-0.2,0.3-0.6,0.4-1,0.2c-0.3-0.2-0.4-0.6-0.2-0.9l8.2-13.3c0.3-0.4,1-0.4,1.3,0
                		l8.2,13.3C132.8,145,132.7,145.4,132.4,145.7z M116.2,101.6c0.3-0.2,0.8-0.1,1,0.2l6.5,10.5l6.5-10.5c0.2-0.4,0.7-0.4,1-0.2
                		c0.3,0.2,0.4,0.7,0.2,1l-7.1,11.5c-0.3,0.4-1,0.4-1.3,0l-7.1-11.5C115.8,102.2,115.9,101.8,116.2,101.6z M141.1,101.6
                		c0.4,0.2,0.4,0.7,0.2,1l-12.2,19.6l13.9,22.4c0.2,0.4,0.1,0.8-0.2,1c-0.4,0.2-0.8,0.1-1-0.2l-14.1-22.8c-0.1-0.2-0.1-0.5,0-0.7
                		l12.5-20C140.4,101.5,140.9,101.4,141.1,101.6z"/>
                	<path id="XMLID_32_" className="st2_C" d="M145.1,145.1c-0.4-0.1-0.5-0.6-0.4-0.9l17.5-43c0.2-0.7,1.1-0.6,1.3,0l17.5,43
                		c0.1,0.3,0,0.8-0.4,0.9c-0.4,0.1-0.8,0-0.9-0.4l-16.9-41.5L146,144.7C145.9,145.1,145.5,145.2,145.1,145.1z M154.4,145.1
                		c-0.4-0.1-0.6-0.6-0.4-0.9l1.6-3.9c0.1-0.3,0.4-0.4,0.7-0.4h13.3c0.4,0,0.6,0.2,0.7,0.4l1.6,3.9c0.1,0.3-0.1,0.8-0.4,0.9
                		c-0.4,0.1-0.7,0-0.9-0.4l-1.4-3.5h-12.4l-1.4,3.5C155.1,145.1,154.8,145.2,154.4,145.1z M159,131.9c0-0.4,0.4-0.7,0.7-0.7h5.3
                		l-2.8-6.8c-0.1-0.4,0.1-0.8,0.4-0.9c0.4-0.2,0.8,0,1,0.4l3.1,7.7c0.1,0.1,0.1,0.2,0.1,0.3c0,0.4-0.3,0.7-0.7,0.7h-6.3
                		C159.4,132.6,159,132.3,159,131.9z"/>
                	<path id="XMLID_27_" className="st2_C" d="M187.2,145.1v-42.7c0-1,1.4-1,1.4,0v42.7C188.5,146,187.2,146,187.2,145.1z M196.1,101.9
                		l17.4,24.8v-24.4c0-1,1.4-1,1.4,0v26.6c0,0.7-1,1-1.3,0.4l-18.6-26.6C194.5,102,195.7,101.2,196.1,101.9z M214.4,145.5l-17.2-24.8
                		v24.4c0,0.9-1.4,0.9-1.4,0v-26.6c0-0.7,0.8-1,1.3-0.4l18.6,26.6C216.1,145.4,215,146.2,214.4,145.5z M222,145.1v-42.7
                		c0-1,1.4-1,1.4,0v42.7C223.4,146,222,146,222,145.1z"/>
                	<path id="XMLID_24_" className="st2_C" d="M266.8,114.7c2.3,5.7,2.3,12.3,0,18c-2.9,7.3-9.7,13-20.3,13h-4.3c-0.4,0-0.7-0.3-0.7-0.7
                		c0-0.4,0.3-0.7,0.7-0.7h4.3c9.9,0,16.3-5.3,19-12.2c2.2-5.3,2.2-11.6,0-16.9c-2.8-6.9-9.1-12.2-19-12.2h-12.1v42.1
                		c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7v-42.8c0-0.4,0.3-0.7,0.7-0.7h12.8C257.1,101.6,263.9,107.3,266.8,114.7z
                		 M242.3,128.6c-0.4,0-0.7-0.3-0.7-0.7v-17.1c0-0.4,0.4-0.7,0.7-0.7h4.2c6.3,0,10.4,3.5,12.1,8c1.4,3.5,1.4,7.5,0,11
                		c-1.7,4.5-5.8,8.1-12.1,8.1h-4.2c-0.4,0-0.7-0.4-0.7-0.7c0-0.4,0.4-0.7,0.7-0.7h4.2c5.6,0,9.2-3.1,10.8-7.1c1.2-3.2,1.2-6.9,0-10
                		c-1.6-4-5.2-7.2-10.8-7.2H243V128C243,128.3,242.6,128.6,242.3,128.6z"/>
                	<path id="XMLID_20_" className="st2_C" d="M277.3,145.8c-0.4,0-0.7-0.4-0.7-0.7v-42.8c0-0.4,0.3-0.7,0.7-0.7h16.8
                		c7.5,0,13.4,6.2,13.4,13.6c0,6.8-5.1,12.7-12,13.5l12.4,16c0.2,0.3,0.2,0.7-0.1,0.9c-0.3,0.3-0.7,0.2-1-0.1l-13.2-17
                		c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.4,0.3-0.7,0.7-0.7c6.7,0,12-5.5,12-12.1c0-6.6-5.3-12.1-12-12.1H278v42.1
                		C278,145.4,277.7,145.8,277.3,145.8z M297.4,145.6c-0.3,0.2-0.8,0.2-1-0.2l-9.8-13.2v12.8c0,0.4-0.4,0.7-0.7,0.7
                		c-0.4,0-0.7-0.4-0.7-0.7v-14.8c-0.1-0.2,0.1-0.4,0.2-0.6c0.3-0.2,0.7-0.1,1,0.2l11.1,14.8C297.7,145,297.7,145.4,297.4,145.6z
                		 M291,120.1c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7h2.4c2,0,3.7-1.6,3.7-3.6c0-2.1-1.7-3.6-3.7-3.6h-7.5
                		c-0.9,0-0.9-1.4,0-1.4h7.5c2.8,0,5.1,2.1,5.1,5c0,2.8-2.3,4.9-5.1,4.9H291z"/>
                	<path id="XMLID_17_" className="st2_C" d="M345.5,101.7c0.4,0,0.7,0.3,0.7,0.7v27.6c0,9.8-7.2,16.1-16.3,16.1c-9.4,0-16.3-6.6-16.3-16.1
                		v-27.6c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7v27.6c0,8.7,6.3,14.7,15,14.7c8.3,0,15-5.7,15-14.7v-27.6
                		C344.8,102,345.1,101.7,345.5,101.7z M322.2,102.3c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7v27.1c0,3.8,2.6,6.5,6.3,6.5
                		c3.8,0,6.3-2.7,6.3-6.5v-27.1c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7v27.1c0,4.5-3.2,7.8-7.7,7.8c-4.5,0-7.7-3.2-7.7-7.8
                		V102.3z"/>
                </g>
                </svg>
            </section>
        )
    }
}

// ref={node => this.myRefName = node}
