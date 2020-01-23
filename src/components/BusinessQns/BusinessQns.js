import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddButton from '../AddButton';
import {
  ADD_BUSINESS_QUESTION, EDIT_BUSINESS_QUESTION, DELETE_BUSINESS_QUESTION,
  ADD_CARD, EDIT_CARD, DELETE_CARD
} from '../../redux/actionTypes';

const useStyles = makeStyles(theme => ({
  indQuestion: {
    margin: '0 10px 0'
  },
  button: {
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 6
  }
}));

function BusinessQns() {
  const classes = useStyles();

  var indButton = classNames(classes.indQuestion, classes.button);

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

  const deleteQuestion = id => event => {
    dispatch({
      type: DELETE_BUSINESS_QUESTION,
      payload: {
        id: id
      }
    });
  };

  const addCard = questionId => event => {
    dispatch({
      type: ADD_CARD,
      payload: {
        questionId: questionId
      }
    });
  };

  const editCard = (questionId, cardId) => event => {
    dispatch({
      type: EDIT_CARD,
      payload: {
        questionId: questionId,
        cardId: cardId,
        name: event.target.name,
        value: event.target.value
      }
    });
  };

  const deleteCard = (questionId, cardId) => event => {
    dispatch({
      type: DELETE_CARD,
      payload: {
        questionId: questionId,
        cardId: cardId
      }
    });
  };

  return (
    <form noValidate autoComplete="off" style={{ padding: '0 6px' }}>
      <Grid container>
        <Grid item xs={12}>
          <AddButton onClick={addQuestion} />
        </Grid>
        {questions.map((question, i) => {
          return (
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
                <IconButton aria-label="delete business question" onClick={deleteQuestion(question.id)}>
                  <DeleteOutlinedIcon />
                </IconButton>
              </Grid>
              {question.cards.map((card, j) => {
                return (
                  <Grid key={j} item xs={12} className={classes.indQuestion}>
                    <Grid container alignItems="center">
                      <Grid item xs={11}>
                        <TextField
                          id={"standard-card-name-" + i + "-" + j}
                          label="Card Name"
                          name="name"
                          value={card.name}
                          onChange={editCard(question.id, card.id)}
                          fullWidth
                          margin="normal"
                          helperText="State as metric or question"
                        />
                      </Grid>
                      <Grid item xs={1} style={{ textAlign: 'center' }}>
                        <IconButton aria-label="delete card" onClick={deleteCard(question.id, card.id)}>
                          <HighlightOffIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <TextField
                          id={"standard-card-about-" + i + "-" + j}
                          label="About This Card"
                          name="about"
                          value={card.about}
                          onChange={editCard(question.id, card.id)}
                          multiline
                          rows="3"
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id={"standard-card-additional-questions-" + i + "-" + j}
                          label="Additional Questions"
                          name="additionalQns"
                          value={card.additionalQns}
                          onChange={editCard(question.id, card.id)}
                          multiline
                          rows="3"
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={4}>
                        <TextField
                          id={"standard-card-actions-" + i + "-" + j}
                          label="Actions"
                          name="actions"
                          value={card.actions}
                          onChange={editCard(question.id, card.id)}
                          multiline
                          rows="7"
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id={"standard-card-drill-paths-" + i + "-" + j}
                          label="Drill Paths"
                          name="drillPaths"
                          value={card.drillPaths}
                          onChange={editCard(question.id, card.id)}
                          multiline
                          rows="7"
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id={"standard-card-date-ranges-" + i + "-" + j}
                          label="Date Ranges"
                          name="dateRanges"
                          value={card.dateRanges}
                          onChange={editCard(question.id, card.id)}
                          multiline
                          rows="7"
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
              <Button variant="outlined" size="small" className={indButton} onClick={addCard(question.id)}>
                <AddIcon fontSize="small" />Card
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </form>
  );
}

export default BusinessQns;
