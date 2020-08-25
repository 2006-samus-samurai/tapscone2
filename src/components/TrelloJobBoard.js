import React from 'react';
import dummyData from '../dummyData';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

export default class TrelloJobBoard extends React.Component {
  state = dummyData;
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newJobIds = Array.from(start.jobIds);
      newJobIds.splice(source.index, 1);
      newJobIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        jobIds: newJobIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }
    // Moving from one list to another
    const startJobIds = Array.from(start.jobIds);
    startJobIds.splice(source.index, 1);
    const newStart = {
      ...start,
      jobIds: startJobIds,
    };

    const finishJobIds = Array.from(finish.jobIds);
    finishJobIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      jobIds: finishJobIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="row">
          {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const jobs = column.jobIds.map((jobId) => this.state.jobs[jobId]);

            return <Column key={column.id} column={column} jobs={jobs} />;
          })}
        </div>
      </DragDropContext>
    );
  }
}
