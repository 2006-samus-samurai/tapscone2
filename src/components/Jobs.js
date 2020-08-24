import React from 'react';
// import { Draggable } from 'react-beautiful-dnd';

export default class Jobs extends React.Component {
  render() {
    return <div>{this.props.job.content}</div>;
    //when we add Draggable tags, it breaks -Katie, Aug 24 2020 4:24pm
  }
}
