import React from 'react';
import Jobs from './Jobs';
//import { Droppable } from 'react-beautiful-dnd';

export default class Column extends React.Component {
  render() {
    return (
      <div>
        <div>This is our column component</div>
        <ul>
          {this.props.jobs.map((job, index) => (
            <li key={job.id}>
              <Jobs key={job.id} job={job} index={index} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
