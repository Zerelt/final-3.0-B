import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';

export default class About extends React.Component {
    render() {

        var x = ((this.props.showDetails == true) ? 0 : -300);
        var scale_1 = ((this.props.showDetails == true) ? 1 : 0);

        let ds = this.props.distanceScrolled;
        let aw = this.props.availableWidth;
        let brP = this.props.bubbleBreakpoint;

        let a1= ds > brP ? '0' : '600%';
        let b1 = ds > brP ? '1' : '0';
        let a2= ds > brP ? '0' : '450%';
        let a3= ds > brP ? '0' : '300%';
        let a4= ds > brP ? '0' : '150%';


        return (
            <section className='aboutContainer'>
                <div className='skillList_container'>
                    <div className='bgRed'></div>
                    <div className='bgWhite'></div>
                    <div className='bgBlack'>
                        <ul>
                            <li className={'skillOpt waves-effect ' + this.props.svgClicked["Sass"]}
                                onClick={this.props.handleSvgClick.bind(this, 'Sass')}
                                style={{
                                    transform:'translateY('+a1+')' ,
                                    opacity: b1
                                }}>
                                <span>Sass</span>
                            </li>
                            <li className={'skillOpt waves-effect ' + this.props.svgClicked["React"]}
                                onClick={this.props.handleSvgClick.bind(this, 'React')}
                                style={{
                                    transform:'translateY('+a2+')' ,
                                    opacity: b1
                                }}>
                                <span>React</span>
                            </li>
                            <li className={'skillOpt waves-effect ' + this.props.svgClicked["jQuery"]}
                                onClick={this.props.handleSvgClick.bind(this, 'jQuery')}
                                style={{
                                    transform:'translateY('+a3+')' ,
                                    opacity: b1
                                }}>
                                <span>jQuery</span>
                            </li>
                            <li className={'skillOpt waves-effect ' + this.props.svgClicked["Javascript"]}
                                onClick={this.props.handleSvgClick.bind(this, 'Javascript')}
                                style={{
                                    transform:'translateY('+a4+')' ,
                                    opacity: b1
                                }}>
                                <span>JS</span>
                            </li>
                            <li className={'skillOpt waves-effect ' + this.props.svgClicked["ThePerson"]}
                                onClick={this.props.handleSvgClick.bind(this, 'ThePerson')}
                                style={{
                                    // animationName: ds > brP ? 'circ1Test' : 'none'
                                }}>
                                <span>Me</span>
                            </li>
                            <li className={'skillOpt waves-effect ' + this.props.svgClicked["ThisSite"]}
                                onClick={this.props.handleSvgClick.bind(this, 'ThisSite')}
                                style={{
                                    transform:'translateY(-'+a4+')' ,
                                    opacity: b1
                                }}>
                                <span>Website</span>
                            </li>
                            <li className={'skillOpt waves-effect ' + this.props.svgClicked["Illustrator"]}
                                onClick={this.props.handleSvgClick.bind(this, 'Illustrator')}
                                style={{
                                    transform:'translateY(-'+a3+')' ,
                                    opacity: b1
                                }}>
                                <span>Adobe</span>
                            </li>
                            <li className={'skillOpt waves-effect ' + this.props.svgClicked["UX/UI"]}
                                onClick={this.props.handleSvgClick.bind(this, 'UX/UI')}
                                style={{
                                    transform:'translateY(-'+a2+')' ,
                                    opacity: b1
                                }}>
                                <span>UX /UI</span>
                            </li>
                            <li className={'skillOpt waves-effect ' + this.props.svgClicked["Misc."]}
                                onClick={this.props.handleSvgClick.bind(this, 'Misc.')}
                                style={{
                                    transform:'translateY(-'+a1+')' ,
                                    opacity: b1
                                }}>
                                <span>Misc .</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='details-container'>
                    <div className='details-inner'>
                        <Motion
                          style={{
                            moveX:spring(x, {stiffness: 170, damping: 18}),
                            sc:spring(scale_1)
                          }}
                          >
                            {
                              ({moveX,sc}) => {
                                return(
                                    <div className='details' style={{
                                        // marginBottom:"'"+moveX+" !important'",
                                        bottom: this.props.availableWidth>1024 ? '' : moveX+'%',
                                        left: this.props.availableWidth>1024 ? moveX+'%' : '',
                                        transform:'scale('+sc+')',
                                    }}>
                                      <div className='details-content'>
                                        <h2>{this.props.skillT}</h2>
                                        <p>{'\u00A0\u00A0\u00A0'}{this.props.skillD}</p>
                                      </div>
                                    </div>
                                )}
                            }
                        </Motion>
                    </div>
                </div>

            </section>
        )
    }
}
