import { ADD_TEAM_MEMBER, EDIT_TEAM_MEMBER } from '../actionTypes';

const initialState = [];

export default function team (state = initialState, action) {
  switch (action.type) {
    case ADD_TEAM_MEMBER: {
      return [ ...state, {
        id: state.length,
        name: '',
        role: '',
        domoRole: '' 
      }];
    }

    case EDIT_TEAM_MEMBER:{
      const { id, name, value } = action.payload;
      return state.map((member, index) => {
        if (member.id !== id) {
          // This isn't the item we care about - keep it as-is
          return member;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...member,
          [name]: value
        }
      });
    }

    default:
      return state;
  }
}
