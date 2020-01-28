import {
  ADD_BUSINESS_QUESTION, EDIT_BUSINESS_QUESTION, DELETE_BUSINESS_QUESTION,
  ADD_CARD, EDIT_CARD, DELETE_CARD
} from '../actionTypes';

const initialState = [];

export default function question (state = initialState, action) {
  switch (action.type) {
    case ADD_BUSINESS_QUESTION: {
      return [ ...state, {
        id: state.reduce((max, p) => p.id > max ? p.id : max, 0) + 1,
        question: '',
        cards: []
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

    case ADD_CARD: {
      const { questionId } = action.payload;
      return state.map((item, index) => {
        if (item.id !== questionId) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          cards: [ ...item.cards, {
            id: item.cards.reduce((max, p) => p.id > max ? p.id : max, 0) + 1,
            name: '',
            about: '',
            additionalQns: '',
            actions: '',
            drillPaths: '',
            dateRanges: '',
            priSec: 'Secondary',
            chartType: '',
            dateRange: '',
            dateGrain: '',
            xAxis: '',
            yAxis: '',
            zAxis: '',
            goalValue: '',
            series: '',
            summary: '',
            cardFilters: '',
            cardOwner: '',
            measure: '',
            rawCalc: '',
            input: '',
            dimensionInt: '',
            dimensionExt: '',
            goalField: '',
            datasetFilter: '',
            history: '',
            calc: '',
            calcNew: '',
            dataSourceName: '',
            dataSourceConn: '',
            dataOwner: '',
            schedule: '',
            cleanup: '',
            joinCriteria: ''
          }]
        }
      });
    }

    case EDIT_CARD: {
      const { questionId, cardId, name, value } = action.payload;
      return state.map((item, i) => {
        if (item.id !== questionId) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          cards: item.cards.map((card, j) => {
            if (card.id !== cardId) {
              return card;
            }

            return {
              ...card,
              [name]: value
            }
          })
        }
      });
    }

    case DELETE_CARD: {
      const { questionId, cardId } = action.payload;
      return state.map((item, i) => {
        if (item.id !== questionId) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          cards: item.cards.filter((card, j) => card.id !== cardId)
        }
      });
    }

    default:
      return state;
  }
}
