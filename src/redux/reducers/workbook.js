import { SET_WORKBOOK_VALUE } from '../actionTypes';

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
  mvp:''
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
    default:
      return state;
  }
}
