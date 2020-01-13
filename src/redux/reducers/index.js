import { combineReducers } from 'redux';
import workbook from './workbook';
import team from './team';
import question from './question';

export default combineReducers({ workbook, team, question });
