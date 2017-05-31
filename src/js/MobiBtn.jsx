import React, {Component} from 'react';

export default class MobiBtn extends React.Component {
    render() {
      // let x = setTimeout(function(){console.log('fade_away'); var abc='fade_away'; return abc; },500);

      let R1 = !this.props.showMenu ? '' : 'moveDown';
      let R2 = !this.props.showMenu ? '' : 'fade_away';
      let R3 = !this.props.showMenu ? '' : 'moveUp';
      let R4 = !this.props.showMenu ? '' : 'rotate1';
      let R5 = !this.props.showMenu ? '' : 'rotate2';

        return (
            <div className='mobiBtn'
                onClick={this.props.handleMenu}>
                <span className={'sp1 ' + R1} ></span>
                <span className={'sp2 ' + R2} ></span>
                <span className={'sp3 ' + R3} ></span>
                <span className={'sp4 ' + R4} ></span>
                <span className={'sp5 ' + R5} ></span>
            </div>
        )
    }
}
