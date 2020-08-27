import React from "react";
//added 08/26 trello-board branch
import { connect } from "react-redux";
//___________________________________
import TrelloColumn from "./TrelloColumn";
import TrelloAddBtn from "./TrelloAddBtn";

//import dummyData from "../dummyData";
import { DragDropContext } from "react-beautiful-dnd";

class TrelloJobBoard extends React.Component {
  render() {
    const { lists } = this.props;
    console.log(lists);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="row">
          {lists.map((list) => (
            <TrelloColumn
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloAddBtn list />
        </div>
      </DragDropContext>
    );
  }
}

//added 08/26 trello-board branch

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(TrelloJobBoard);
