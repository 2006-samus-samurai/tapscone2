import React from 'react';
import dummyData from '../dummyData';
// import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

export default class TrelloJobBoard extends React.Component {
  state = dummyData;

  render() {
    return (
      <div>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const jobs = column.jobIds.map((jobId) => this.state.jobs[jobId]);

          return <Column key={column.id} column={column} jobs={jobs} />;
        })}
        <h1>This is the TrelloJobBoard component</h1>
      </div>
      //   <DragDropContext>

      // </DragDropContext>;
    );
  }
}
