import { INITIALIZE_WORKBOOK, SET_WORKBOOK_VALUE } from '../actionTypes';

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
  successCriteria: ''
};

export default function workbook (state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_WORKBOOK: {
      const content = action.payload;
      return {
        initiativeName: content.initiativeName,
        businessUnit: content.businessUnit,
        initiativeOwner: content.initiativeOwner,
        businessObjective: content.businessObjective,
        audience: content.audience,
        currentState: content.currentState,
        bvWeWill: content.bvWeWill,
        bvImprove: content.bvImprove,
        bvMeasure: content.bvMeasure,
        bvResult: content.bvResult,
        mvp: content.mvp,
        successCriteria: content.successCriteria
      }
    }

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
