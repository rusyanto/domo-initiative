import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
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
      <Grid key={i} container alignItems="flex-end">
        <Grid item xs={11}>
          <TextField
            id={"standard-business-question-" + i}
            label={"Question " + (i+1)}
            value={question.question}
            onChange={editQuestion(question.id)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={1} style={{ textAlign: 'center' }}>
          <IconButton aria-label="delete business question">
            <DeleteOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
        <Button variant="outlined" size="small" style={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: 6 }}>
          <AddIcon fontSize="small" />Card
        </Button>
        </Grid>
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
