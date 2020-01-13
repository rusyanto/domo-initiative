import { ADD_BUSINESS_QUESTION, EDIT_BUSINESS_QUESTION, DELETE_BUSINESS_QUESTION } from '../actionTypes';

const initialState = [];

export default function question (state = initialState, action) {
  switch (action.type) {
    case ADD_BUSINESS_QUESTION: {
      return [ ...state, {
        id: state.length,
        question: '',
      }];
    }

    case EDIT_BUSINESS_QUESTION: {
      const { id, value } = action.payload;
      return state.map((item, index) => {
        if (item.id !== id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          question: value
        }
      });
    }

    case DELETE_BUSINESS_QUESTION: {
      const { id } = action.payload;
      return state.filter((item, index) => item.id !== id);
    }

    default:
      return state;
  }
}
