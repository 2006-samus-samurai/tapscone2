import { CONSTANTS } from "../actions";

let listID = 3;
let cardID = 4;

const initialState = [
  {
    id: 0,
    title: "Wishlist",
    cards: [
      {
        id: 0,
        text: "software engineer",
      },
      {
        id: 1,
        text: "front-end developer",
      },
    ],
  },
  {
    id: 1,
    title: "Applied",
    cards: [
      {
        id: 2,
        text: "software engineer",
      },
      {
        id: 3,
        text: "front-end developer",
      },
    ],
  },
  {
    id: 2,
    title: "Interview",
    cards: [
      {
        id: 4,
        text: "software engineer",
      },
      {
        id: 5,
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
        id: listID,
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID,
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

    default:
      return state;
  }
};

export default listsReducer;
