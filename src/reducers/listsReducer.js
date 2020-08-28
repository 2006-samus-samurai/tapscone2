import { CONSTANTS } from "../actions";

let listID = 3;
let cardID = 6;

const initialState = [
  {
    id: `list-${0}`,
    title: "Wishlist",
    cards: [
      {
        id: `card-${0}`,
        text: "software engineer",
      },
      {
        id: `card-${1}`,
        text: "front-end developer",
      },
    ],
  },
  {
    id: `list-${1}`,
    title: "Applied",
    cards: [
      {
        id: `card-${2}`,
        text: "software engineer",
      },
      {
        id: `card-${3}`,
        text: "front-end developer",
      },
    ],
  },
  {
    id: `list-${2}`,
    title: "Interview",
    cards: [
      {
        id: `card-${4}`,
        text: "software engineer",
      },
      {
        id: `card-${5}`,
        text: "front-end developer",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`,
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      };
      cardID += 1;

      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
      } = action.payload;

      const newState = [...state];

      //if the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);

        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //if the list is in different column

      if (droppableIndexStart !== droppableIdEnd) {
        const listStart = state.find((list) => droppableIdStart === list.id);

        const card = listStart.cards.splice(droppableIndexStart, 1);

        const listEnd = state.find((list) => droppableIdEnd === list.id);

        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listsReducer;
