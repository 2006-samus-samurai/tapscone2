import React from "react";
//import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({ text }) => {
  return (
    <div className="card my-1">
      <p>{text}</p>
    </div>
  );
};

export default TrelloCard;
