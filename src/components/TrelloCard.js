import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card my-1">
            <p>{text}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
