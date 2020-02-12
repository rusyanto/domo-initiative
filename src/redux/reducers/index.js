import { combineReducers } from 'redux';
import workbook from './workbook';
import team from './team';
import question from './question';
import snackbar from './snackbar';

export default combineReducers({ workbook, team, question, snackbar });
