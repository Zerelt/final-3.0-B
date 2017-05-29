import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.scss';
import Waves  from 'node-waves';
import '../../node_modules/node-waves/src/scss/waves.scss';
import {Motion, spring} from 'react-motion';
require('smoothscroll-polyfill').polyfill();
import throttle from '../../node_modules/lodash.throttle/index.js';
import debounce from '../../node_modules/lodash.debounce/index.js';

import MobiBtn  from './MobiBtn.jsx';
import NavBar  from './NavBar.jsx';
import Main  from './Main.jsx';
import About  from './About.jsx';
import SeparatorText from './SeparatorText.jsx';
import Projects  from './Projects.jsx';
import ProjectCard from './ProjectCard.jsx';
import Contact from './Contact.jsx';
import Separator1 from './Separator1.jsx';
import Separator2 from './Separator2.jsx';
import Separator3 from './Separator3.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.events = [];
    this.state = {
      currentYear: 20,
      availableWidth:0,
      distanceScrolled:0,
      bubbleBreakpoint:'',

      clickSelected: {main:'selected'},
      showMenu:false,
      delayHideShow:'none',
      svgClicked: {ThePerson:'svgClicked'},
      showDetails: true,
      prjctSelected:{},

      skillT:'',
      skillD:''
    };

    this.obtainScrolled = debounce(this.obtainScrolled.bind(this),1);
    this.obtainWindowWidth = debounce(this.obtainWindowWidth.bind(this),1);
    this.handleNavPosition = debounce(this.handleNavPosition.bind(this),1);
    this.bubbleBreakpoint = debounce(this.bubbleBreakpoint.bind(this),50);
  }

  componentDidMount () {
    Waves.init();

    let cDate = new Date();
    let cYear = cDate.getFullYear();

    this.setState({
      skillT: this.props.knowledge[4].skillTitle,
      skillD: this.props.knowledge[4].skillDescr,
      currentYear: cYear
    });

    // ReactDOM.findDOMNode(this.rDiv).addEventListener('resize', this.obtainWindowWidth.bind(this));
    // ReactDOM.findDOMNode(this.rDiv).addEventListener('resize', this.obtainScrolled.bind(this));
    // ReactDOM.findDOMNode(this.rDiv).addEventListener('resize', this.handleNavPosition.bind(this)); // doesn't work
    (this.obtainWindowWidth)();

    ReactDOM.findDOMNode(this.rDiv).addEventListener('scroll', this.obtainWindowWidth);
    ReactDOM.findDOMNode(this.rDiv).addEventListener('scroll', this.obtainScrolled);
    ReactDOM.findDOMNode(this.rDiv).addEventListener('scroll', this.handleNavPosition);
    ReactDOM.findDOMNode(this.rDiv).addEventListener('scroll', this.bubbleBreakpoint);

    window.addEventListener('resize',this.obtainWindowWidth);
    window.addEventListener('resize', this.obtainScrolled);
    window.addEventListener('resize', this.handleNavPosition); // this works
    window.addEventListener('resize',this.bubbleBreakpoint);

  }

  componentWillUnmount () {

    ReactDOM.findDOMNode(this.rDiv).removeEventListener('scroll', this.obtainWindowWidth);
    ReactDOM.findDOMNode(this.rDiv).removeEventListener('scroll', this.obtainScrolled);
    ReactDOM.findDOMNode(this.rDiv).removeEventListener('scroll', this.handleNavPosition);
    ReactDOM.findDOMNode(this.rDiv).removeEventListener('scroll', this.bubbleBreakpoint);

    window.removeEventListener('resize', this.obtainWindowWidth);
    window.removeEventListener('resize', this.obtainScrolled);
    window.removeEventListener('resize', this.handleNavPosition);
    window.removeEventListener('resize', this.bubbleBreakpoint);
  }

  //====================================== Window innerWidth + menuBtn + svg 2/3 width handlers ===================================
  obtainWindowWidth () {
    let watcher = window.innerWidth;
    let a = ReactDOM.findDOMNode(this.a).children[2];
    let b = ReactDOM.findDOMNode(this.a).children[3];
    this.setState({
      availableWidth:watcher
    });
    if (this.state.availableWidth >1024) { //watcher >1024
      this.setState({
        showMenu:false,
        delayHideShow:'none',
        prjctSelected:{}
      });
    }
    else {
      if( Math.abs(window.innerWidth - window.innerHeight) < 280 ) {
        a.style.width='55%';
        b.style.width='25%';
      } else {}
    }
  }

  //======================================== Window/rootDiv scroll event listener callback =============================
  obtainScrolled () {
    let dScrolled = ReactDOM.findDOMNode(this.rDiv).scrollTop; //document.body.scrollTop;
    this.setState({
      distanceScrolled: dScrolled
    });
    console.log('distance scrolled is: ' + this.state.distanceScrolled);
  }

  //========================================= Menu Appearance + Highlight on scroll handler ===========================================
  handleNavPosition () {
    let a = ReactDOM.findDOMNode(this.a).children[1]; //navbar
    let b = ReactDOM.findDOMNode(this.b);             //about
    let c = ReactDOM.findDOMNode(this.c);             //separator
    let d = ReactDOM.findDOMNode(this.d);             //projects
    let f = ReactDOM.findDOMNode(this.f);             //contacts

    let fW = ReactDOM.findDOMNode(this.a).getBoundingClientRect().width;
    let newStyle = 'background:#ff062a;  position:fixed; max-width:'+fW+'px; width:'+fW+'px; top:0; bottom:inherit; box-shadow:0px 12px 8px -8px rgba(0,0,0,0.435); ';
    //#DA2F54  fffefc 3498db
    //bottom:inherit; instead of initial for IE to work

    let topHeightDifference = f.offsetTop - f.getBoundingClientRect().height; //why does f.offsetTop return the offsetTop + the height of the container in this case ?
    console.log('contacts offsetTop is : '+f.offsetTop);
    console.log('top - height is: ' + topHeightDifference);

    if(this.state.availableWidth > 1024 ) {
      if ( this.state.distanceScrolled >= a.offsetTop ) {
        a.style.cssText= newStyle;
        if(this.state.distanceScrolled < (c.offsetTop-120)) {
          this.setState({
            clickSelected: {about:'selected'}
          });
        }
        else if (this.state.distanceScrolled >= topHeightDifference-200 ) {
          this.setState({
            clickSelected:{contacts:'selected'}
          });
        }
        else if ( this.state.distanceScrolled >= (c.offsetTop-120) ) {
          this.setState({
            clickSelected:{projects:'selected'}
          });
        }
      }

      if( this.state.distanceScrolled < b.offsetTop-220) {
        a.style.cssText='background:none; position:absolute; top:initial; bottom:0 ';
        this.setState({
          clickSelected: {main:'selected'}
        });
      }
    }

    else if (this.state.availableWidth <= 1024) {
      a.style.cssText='background:rgba(0,0,0,0.35); position:fixed; top:initial; bottom:0 ';

      if ( this.state.distanceScrolled >= a.offsetTop ) {
        a.style.cssText= newStyle;
        if(this.state.distanceScrolled < (c.offsetTop-120)) {
          this.setState({
            clickSelected: {about:'selected'}
          });
        } else if (this.state.distanceScrolled >= (topHeightDifference - 200) ) {
          this.setState({
            clickSelected:{contacts:'selected'}
          });
        } else if ( this.state.distanceScrolled >= (c.offsetTop-120) ) {
          this.setState({
            clickSelected:{projects:'selected'}
          });
        }
      }
      // console.log('top to navbar is: '+ (Math.abs(ReactDOM.findDOMNode(this.a).getBoundingClientRect().top)-120));
      if( this.state.distanceScrolled < b.offsetTop-220) {
        a.style.cssText='background:none; position:absolute; top:initial; bottom:0 ';
        this.setState({
          clickSelected: {main:'selected'}
        });
      }

      a.style.cssText='background:rgba(0,0,0,0.35); position:fixed; top:initial; bottom:0; display:'+this.state.delayHideShow+'; ';
    }


  };

  //================================= Menu Highlight on click handler ================================
  handleMenuColor ( item  , id ) {
    var selected = this.state.clickSelected;
    selected = {};
    selected[item] = this.state.clickSelected[item] == "selected" ? "selected" : "selected";
    this.setState({
      // clickSelected: selected
      // ,
      // showMenu: false,
      // delayHideShow:'none'
    });
    setTimeout(function(){
      this.setState({
        showMenu: false,
        delayHideShow:'none'
      });

    }.bind(this),550);
    if(item=='main') {
      ReactDOM.findDOMNode(this.a).scrollIntoView({ behavior: 'smooth'});
      console.log('cliked MAIN');
    } else if(item=='about') {
      ReactDOM.findDOMNode(this.b).scrollIntoView({ behavior: 'smooth'});
      console.log('cliked about');
    } else if(item=='projects') {
      ReactDOM.findDOMNode(this.d).scrollIntoView({block:'start', behavior: 'smooth'});
      console.log('cliked projects');
    } else if(item=='contacts') {
      ReactDOM.findDOMNode(this.g).scrollIntoView({block: 'start', behavior: 'smooth'});
      console.log('clicked contacts');
    }
  }

  //==================================== mobiBtn menu handler ==============================
  handleMenu () {
    this.setState({
      showMenu: !this.state.showMenu
    });
    console.log(this.state.showMenu + ' showMenu');
    if(this.state.showMenu) {
      setTimeout(function () {
          this.setState({
            delayHideShow:'none'
          });
        }.bind(this), 500);
        document.body.style.overflowY='auto';
    } else {
      this.setState({
        delayHideShow:'block'
      });
      document.body.style.overflowY='hidden';
    }
    // console.log(this.state.delayHideShow + ' delayHideShow');
  }

  //==================================== reveal bubbles breakpoint =========================
  bubbleBreakpoint () {
    let a = ReactDOM.findDOMNode(this.a);             //main
    let b = ReactDOM.findDOMNode(this.b);             //about
    let c = ReactDOM.findDOMNode(this.c);             //separator

    if (this.state.availableWidth > 1024 ) {
      this.setState({
        bubbleBreakpoint: a.getBoundingClientRect().height
      });
    } else {
      this.setState({
        bubbleBreakpoint: (a.getBoundingClientRect().height+85)
      });
    }
  }

  //========================================== SVG skill click handler ================================
  handleSvgClick (item, id) {
    let selectedSvg = this.state.svgClicked;
    selectedSvg = {};
    selectedSvg[item] = this.state.svgClicked[item] == 'svgClicked' ? 'svgClicked' : 'svgClicked';
    this.setState({
      svgClicked: selectedSvg
    });

    let x='';

    if(selectedSvg['Sass']=='svgClicked') {
      x=0;
    } else if(selectedSvg['React']=='svgClicked') {
      x=1;
    } else if(selectedSvg['jQuery']=='svgClicked') {
      x=2;
    } else if(selectedSvg['Javascript']=='svgClicked') {
      x=3;
    } else if(selectedSvg['ThePerson']=='svgClicked') {
      x=4;
    } else if(selectedSvg['ThisSite']=='svgClicked') {
      x=5;
    } else if(selectedSvg['Illustrator']=='svgClicked') {
      x=6;
    } else if(selectedSvg['UX/UI']=='svgClicked') {
      x=7;
    } else if(selectedSvg['Misc.']=='svgClicked') {
      x=8;
    }

    let skillT=this.props.knowledge[x]['skillTitle'];
    let skillD=this.props.knowledge[x]['skillDescr'];
    setTimeout(function(){
      this.setState({
        skillT: skillT,
        skillD: skillD
      });
    }.bind(this),300)


    if(!this.state.showDetails){
      this.setState({
        showDetails:true
      });
    } else {
      setTimeout(function () {
          this.setState({
            showDetails:false
          });
        }.bind(this), 100);
        setTimeout(function () {
            this.setState({
              showDetails:true
            });
          }.bind(this), 300);
    }
    console.log(this.state.showDetails);
  }

  //========================================== Project Click Handler < 1024px ========================
  prjctHandler (item, id) {
    if(this.state.availableWidth<=1024){
      let prSelected = this.state.prjctSelected;
      prSelected = {};
      prSelected[item] = this.state.prjctSelected[item] == 'prSelected' ? '' : 'prSelected';
      this.setState({
        prjctSelected: prSelected
      });
      console.log("works");
      console.log(this.state.prjctSelected);
    }
  }

  //========================================== RENDER to the DOM ======================================
  render() {
    let stopScroll = this.state.showMenu ? 'scroll' : 'auto'; //? 'hidden' : 'auto';

    let prjcts = function (item, index) {
      return(
        <ProjectCard
          title={item.titles}
          descr={item.descr}
          tools={item.tools}
          prjLink={item.prjLink}
          imgSrc={item.imgSrc} key={index}
          prjctHandler={this.prjctHandler.bind(this)}
          prjctSelected={this.state.prjctSelected}
        />
      );
    }.bind(this);
    let prjctsList = this.props.rootInfo.map(prjcts);



    return (
      <div className='rootDiv' style={{overflowY:stopScroll}} ref={ (rDiv) => this.rDiv = rDiv}>
        <Main
          handleMenu={this.handleMenu.bind(this)}

          handleMenuColor1={this.handleMenuColor.bind(this)}
          clickSelected1={this.state.clickSelected}
          availableWidth={this.state.availableWidth}
          showMenu={this.state.showMenu}
          delayHideShow={this.state.delayHideShow}

          ref={(a) => this.a = a}
        />
        <Separator1 />
        <About
          handleSvgClick={this.handleSvgClick.bind(this)}
          svgClicked={this.state.svgClicked}
          showDetails={this.state.showDetails}
          distanceScrolled={this.state.distanceScrolled}
          availableWidth={this.state.availableWidth}
          bubbleBreakpoint={this.state.bubbleBreakpoint}

          knowledge={this.props.knowledge}
          skillT={this.state.skillT}
          skillD={this.state.skillD}

          ref={ (b) => this.b = b}
        />
        <Separator2 />
        <SeparatorText ref={(c) => this.c = c}/>
        <Projects prjctsList={prjctsList} ref={(d) => this.d = d} />
        <Separator3 />
        <Contact ref={(f) => this.f = f}/>
        <Footer ref= {(g) => this.g = g}
          availableWidth={this.state.availableWidth}
          currentYear={this.state.currentYear}
        />
      </div>
    )
  }
}

// can't use imgSrc:'../images/10TicTacToe.png' and pass it down to <img src={this.props.imgSrc} /> or even require it
App.defaultProps={
  rootInfo:[
    {
      titles:'React Date Countdown',
      tools:'React, Sass, Webpack, Illustrator, Material Design',
      descr:'App that counts how many days have past or remain since/until the important event you specified, with a separate screen showing the closest upcoming event.',
      imgSrc:'01rDate',
      prjLink:'https://datecountdown.netlify.com'
    },
    {
      titles:'React Clock',
      tools:'React, Sass, Webpack, Illustrator, Material Design',
      descr:'React app that shows the current date and time, with changing backgrounds depending if it\'s morning afternoon evening or night.',
      imgSrc:'02rClock',
      prjLink:'https://reactclock.netlify.com'
    },
    {
      titles:'Calculator',
      tools:'jQuery, Css, Gulp, Illustrator',
      descr:'Javascript calculator with 2 displays, one returning the current operation and result and the other all your operations.',
      imgSrc:'03Calculator',
      prjLink:'https://calculatorapp.netlify.com'
    },
    {
      titles:'Wikipedia App',
      tools:'jQuery, CSS, JSON(Wikipedia API), Gulp',
      descr:'App using the Wikiepdia API that returns 10 Wikipedia articles matching your input as you type, and a button that returns a random article.',
      imgSrc:'04Wikipedia',
      prjLink:'https://wikipediaapp.netlify.com'
    },
    {
      titles:'Math App',
      tools:'jQuery, CSS Gulp',
      descr:'Elementary math game for kids where the users have 1 minute to get as many answers right as they can. Restart the game after 1 min to try to get a better score.',
      imgSrc:'05Math',
      prjLink:'https://mathgame.netlify.com'
    },
    {
      titles:'TwitchTv App',
      tools:'jQuery CSS JSON(TwitchTV API), Gulp',
      descr:'App showing which of the pre-loaded streamers are online, what they are playing and how many current viewers. Click on the info to go to the live channel.',
      imgSrc:'06Twitch',
      prjLink:'https://twitchtv.netlify.com'
    },
    {
      titles:'Simon Game',
      tools:'jQuery, CSS, Gulp',
      descr:'A JS replica of the Simon Game. Flip the switch to power on and then press the red button to start. For a bigger challange press the yellow button. Match 20 sequences to win.',
      imgSrc:'07Simon',
      prjLink:'https://simongameapp.netlify.com'
    },
    {
      titles:'Pomodoro Timer',
      tools:'jQuery, CSS, Gulp',
      descr:'Javascript Pomodoro timer with different audio and visual notifications when the Session and Break periods end.',
      imgSrc:'08Pomodoro',
      prjLink:'https://pomodoroapp.netlify.com'
    },
    {
      titles:'Weather App',
      tools:'jQuery, CSS, JSON(Open Weather Maps API), Google Maps, Gulp',
      descr:'App that displays weather information from your current location. Type in another city to view that place\'s current weather information.',
      imgSrc:'09Weather',
      prjLink:'https://weatherapp.netlify.com'
    },
    {
      titles:'TicTacToe',
      tools:'jQuery, CSS, Gulp',
      descr:'Chose your sign and start playing a game of tic tac toe against an easy AI.',
      imgSrc:'10TicTacToe',
      prjLink:'https://tictactoeapp.netlify.com'
    }
  ],

  knowledge:[
    {
      skillTitle:'Sass / CSS',
      skillDescr:'At first when I was told about this I wasn\'t too excited about it because in my mind it was just one more thing that someone thought up to complicate things more. After playing around with it a little I realized I was wrong and that it\'s actually very usefull and allows quick modifications, allows a better structuring of our css and lots of other features that improve workflow like variables, loops arrays/maps (even nested), mixins with which I\'ve worked with in my projects, and more.'
    },
    {
      skillTitle:'React and its ecosystem',
      skillDescr:'Altough it was easy and fast to grasp the basic functionality of this library, for me it took a little to get to the point where I don\'t instinctively want to grab elements from the virtual DOM and work with them. I now have very good knowledge and experience working with React (both es5 and es6), state, ref callbacks, lifecycle methods and have learned to plan ahead more carefully than usual when working with react. Currently learning more about React Router and Redux. This site was made with react.'
    },
    {
      skillTitle:'jQuery',
      skillDescr:'I have very good practice and experience working with the jquery library - a lot of the apps below are written with it.'
    },
    {
      skillTitle:'Javascript',
      skillDescr:'What I know I\'ve learned mostly by doing. After I started working with react I felt the need to get a better understanding of JS so I read almost all the books in Kyle Simpsons\' "You don\'t know Js" series and Douglas Crockfords\' "Javascript the Good parts" and altough closures aren\'t really clear yet, I do feel I\'ve learned more about how javascript works, from simple things like LHS and RHS assignment and finally getting why global variables are to be avoided to scopes , more knowledge on Objects(although to be honest I haven\'t worked with them much) and es6 JS ( not a fan of arrow functions sorry ). Trying to keep up to date with everything and to learn more with egghead courses and blogs.'
    },
    {
      skillTitle:'About Me',
      skillDescr:'Hello and welcome ! My name\'s Alex, I\'m a self-taught front end developer with a good sense of design, keen eye and attention to details and huge interest in UI/UX and tech in general. I started learning web development by myself over a year ago after reading an article about remote online coding bootcamps and the excellent job prospects people learning to code have. I started out with codecademy tutorials, tried ruby for a bit but liked javascript more and decided to stick with it. Later I found out about free code camp and did all the algorithms, challanges, and all the js, jQuery and frontend related projects. Besides this I also learned from Udemy and Udacity courses, blogs, replicating what they did, and spent time in general going through other people\'s code on codepen and github/npm modules. Worked with a small group on a small project. Throughout all this I realized I like coding, making projects come to life. I also came to apreciate a good design very much and I enjoy making things looks good a lot, and am really looking forward to working on projects with a design that makes people wanna look again not because they didn\'t understood something but because they want to see it again.'
    },
    {
      skillTitle:'About this website',
      skillDescr:'This is my little window to the world. A portoflio website made from scratch with React and es6 javascript. I went through 2 other versions (not just a design version but code too) before finally coming up with this one. Altough it\'s not as impactfull as the first and with a bit less code than the second I believe this version has the best balance between simplicity, intuitive usage and aspect. Here I tried to make use of a lot of the characteristics and effects you see in top modern day websites:hand-made scroll-based events hand-made scrollspy (just for the sake of doing them myself and not using a library) -both with a bit of debounce to lessen the lag on IE- and ease-out menu activated scrolling (again,no plugins - I managed to find a small polyfill that adds the scrolling with easing that\'s available in Firefox); svg animations and icons; responsive design; googles\' material design guidelines; a basic grid to make things look orderly; a color theme throughout the site; custom hand-made backgrounds and not just generic images/videos grabbed from google; automatic copyright year updates; a bit of typography play and sublimation.'
    },
    {
      skillTitle:'Adobe Illustrator',
      skillDescr:'I have knowledge of Adobe Illustrator at an advanced/intermediate level, am comfortable and used to working with keyboard shortcuts to speed up workflow, capable of making anything from icons and wireframes to full out prototypes. Basic knowledge of Adobe Photoshop for now.'
    },
    {
      skillTitle:'User Experience / User Interface',
      skillDescr:'Lately I\'ve been spending a lot of time learning about UX/UI: from simple things like proximity, alignment, consistency/repetition to typography, colors, contrast allowing us to create visual hierarchies and keeping users informed. Most of which I\'ve tried to use in this site as well. '
    },
    {
      skillTitle:'Misc.',
      skillDescr:'In addition to what I have already listed I have working knowledge of npm, Git, Github, Bootstrap3 and Bootstrap 4. In the past I\'ve played a bit with nodejs and mongodb, but decided to focus on front-end development. I also have basic SEO knowledge.'
    },
  ]
};


ReactDOM.render(<App  />, document.getElementById('app'));
