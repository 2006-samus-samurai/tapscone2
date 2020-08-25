import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Jobs from './Jobs';

export default class Column extends React.Component {
  render() {
    return (
      <div className="col-2 card mr-1 mb-1">
        {/* <p className="font-weight-light text-muted">
          {this.props.column.title}
        </p> */}
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div>
                {this.props.jobs.map((job, index) => (
                  <Jobs key={job.id} job={job} index={index} />
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
