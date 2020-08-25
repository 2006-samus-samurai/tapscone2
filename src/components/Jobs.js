import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class Jobs extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.job.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="badge badge-pill badge-dark">
              {this.props.job.content}
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}
