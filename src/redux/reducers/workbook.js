import { SET_WORKBOOK_VALUE, ADD_TEAM_MEMBER, EDIT_TEAM_MEMBER } from '../actionTypes';

const initialState = {
  initiativeName: '',
  businessUnit: '',
  initiativeOwner: '',
  businessObjective: '',
  audience: '',
  currentState: '',
  bvWeWill: '',
  bvImprove: '',
  bvMeasure: '',
  bvResult: '',
  mvp:'',
  team: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_WORKBOOK_VALUE: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      }
    }

    case ADD_TEAM_MEMBER: {
      const addTeam = state.team;
      addTeam.push({
        id: addTeam.length,
        name: '',
        role: '',
        domoRole: ''
      });
      return {
        ...state,
        team: addTeam
      }
    }

    case EDIT_TEAM_MEMBER: {
      const { id, name, value } = action.payload;
      const editTeam = state.team;
      for (let i = 0; i < editTeam.length; i++) {
        if (editTeam[i].id === id) {
          editTeam[i][name] = value;
        }
      }
      return {
        ...state,
        team: editTeam
      }
    }
    
    default:
      return state;
  }
}
