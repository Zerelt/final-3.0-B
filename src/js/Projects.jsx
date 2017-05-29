import React, {Component} from 'react';

export default class Projects extends React.Component {
  render() {
    return(
      <div className='prj-root'>
        <div className='prj-container'>
          {this.props.prjctsList}
        </div>
      </div>
    )
  }
}
