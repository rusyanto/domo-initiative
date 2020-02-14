import { INITIALIZE_TEAM, ADD_TEAM_MEMBER, EDIT_TEAM_MEMBER, DELETE_TEAM_MEMBER } from '../actionTypes';

const initialState = [];

export default function team (state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_TEAM: {
      return action.payload;
    }

    case ADD_TEAM_MEMBER: {
      return [ ...state, {
        id: state.reduce((max, p) => p.id > max ? p.id : max, 0) + 1,
        name: '',
        role: '',
        domoRole: ''
      }];
    }

    case EDIT_TEAM_MEMBER: {
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

    case DELETE_TEAM_MEMBER: {
      const { id } = action.payload;
      return state.filter((member, index) => member.id !== id);
    }

    default:
      return state;
  }
}
