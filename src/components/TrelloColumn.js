import React from "react";
//import { Droppable } from "react-beautiful-dnd";
import TrelloCard from "./TrelloCard";
import TrelloAddBtn from "./TrelloAddBtn";

const TrelloColumn = ({ title, cards, listID }) => {
  return (
    <div className="card col-3">
      <h4>{title}</h4>
      {cards.map((card) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloAddBtn listID={listID} />
    </div>
  );
};

export default TrelloColumn;
