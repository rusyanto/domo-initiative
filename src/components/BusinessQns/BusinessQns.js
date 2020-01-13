import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import AddButton from '../AddButton';
import { ADD_BUSINESS_QUESTION, EDIT_BUSINESS_QUESTION, DELETE_BUSINESS_QUESTION } from '../../redux/actionTypes';

function BusinessQns() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.question);

  const addQuestion = () => {
    dispatch({
      type: ADD_BUSINESS_QUESTION
    });
  };

  const editQuestion = id => event => {
    dispatch({
      type: EDIT_BUSINESS_QUESTION,
      payload: {
        id: id,
        value: event.target.value
      }
    });
  };

  const questionEls = [];
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    questionEls.push(
      <Grid key={i} item xs={12}>
        <TextField
          id="standard-business-question"
          label={"Question " + (i+1)}
          value={question.question}
          onChange={editQuestion(question.id)}
          fullWidth
          margin="normal"
        />
      </Grid>
    );
  }

  return (
    <form noValidate autoComplete="off" style={{ padding: '0 6px' }}>
      <Grid container>
        <Grid item xs={12}>
          <AddButton onClick={addQuestion} />
        </Grid>
        {questionEls}
      </Grid>
    </form>
  );
}

export default BusinessQns;
