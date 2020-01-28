import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { EDIT_CARD } from '../../redux/actionTypes';

function MetricMap() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.question);
  const inputLabel = React.useRef(null);

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

  return (
    <form noValidate autoComplete="off">
      {questions.map((question, i) => {
        return (
          <div key={i} className="margin-top">
            <Typography variant="caption" color="textSecondary">
              Business Question
            </Typography>
            <Typography variant="subtitle2">
              {question.question}
            </Typography>
            {question.cards.map((card, j) => {
              return (
                <div key={j} className="ind-card">
                  <Typography variant="caption" color="textSecondary">
                    Card Name
                  </Typography>
                  <Typography variant="subtitle2">
                    {card.name}
                  </Typography>
                  <Grid container>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-owner-" + i + "-" + j}
                        label="Card Owner(s)"
                        name="cardOwner"
                        value={card.cardOwner}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-measure-" + i + "-" + j}
                        label="Measure Name"
                        name="measure"
                        value={card.measure}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <FormControl fullWidth style={{ marginTop: 16 }}>
                        <InputLabel ref={inputLabel} htmlFor={"standard-card-rawcalc-" + i + "-" + j}>
                          Raw / Calculated
                        </InputLabel>
                        <Select
                          value={card.rawCalc}
                          onChange={editCard(question.id, card.id)}
                          inputProps={{
                            name: "rawCalc",
                            id: "standard-card-rawcalc-" + i + "-" + j
                          }}
                        >
                          <MenuItem value={'Raw'}>Raw</MenuItem>
                          <MenuItem value={'Calculated'}>Calculated</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-input-" + i + "-" + j}
                        label="Input Field Name(s)"
                        name="input"
                        value={card.input}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-dimension-int-" + i + "-" + j}
                        label="Internal Dimension(s)"
                        name="dimensionInt"
                        value={card.dimensionInt}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-dimension-ext-" + i + "-" + j}
                        label="External Dimension(s)"
                        name="dimensionExt"
                        value={card.dimensionExt}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-goal-field-" + i + "-" + j}
                        label="Goal/Target Field Name(s)"
                        name="goalField"
                        value={card.goalField}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-dataset-filter-" + i + "-" + j}
                        label="Dataset Filter(s)"
                        name="datasetFilter"
                        value={card.datasetFilter}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-history-" + i + "-" + j}
                        label="Amount of History Required"
                        name="history"
                        value={card.history}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-calculation-" + i + "-" + j}
                        label="Calculations"
                        name="calc"
                        value={card.calc}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <FormControl fullWidth style={{ marginTop: 16 }}>
                        <InputLabel ref={inputLabel} htmlFor={"standard-card-calc-new" + i + "-" + j}>
                          Is Metric/Calculation new?
                        </InputLabel>
                        <Select
                          value={card.calcNew}
                          onChange={editCard(question.id, card.id)}
                          inputProps={{
                            name: "calcNew",
                            id: "standard-card-calc-new-" + i + "-" + j
                          }}
                        >
                          <MenuItem value={'Yes'}>Yes</MenuItem>
                          <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                    </Grid>
                    <Grid item xs={6} className="input-pad">
                      <TextField
                        id={"standard-card-source-name-" + i + "-" + j}
                        label="Data Source Name"
                        name="dataSourceName"
                        value={card.dataSourceName}
                        onChange={editCard(question.id, card.id)}
                        multiline
                        rows="3"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6} className="input-pad">
                      <TextField
                        id={"standard-card-source-conn-" + i + "-" + j}
                        label="Data Source Connection Strategy"
                        name="dataSourceConn"
                        value={card.dataSourceConn}
                        onChange={editCard(question.id, card.id)}
                        multiline
                        rows="3"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-data-owner-" + i + "-" + j}
                        label="Data/Metric Logic Owner"
                        name="dataOwner"
                        value={card.dataOwner}
                        onChange={editCard(question.id, card.id)}
                        multiline
                        rows="3"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-schedule-" + i + "-" + j}
                        label="Update Schedule"
                        name="schedule"
                        value={card.schedule}
                        onChange={editCard(question.id, card.id)}
                        multiline
                        rows="3"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-cleanup-" + i + "-" + j}
                        label="Anticipated Cleanup or Data Manipulation"
                        name="cleanup"
                        value={card.cleanup}
                        onChange={editCard(question.id, card.id)}
                        multiline
                        rows="3"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-join-criteria-" + i + "-" + j}
                        label="Join Criteria"
                        name="joinCriteria"
                        value={card.joinCriteria}
                        onChange={editCard(question.id, card.id)}
                        multiline
                        rows="3"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                </div>
              );
            })}
          </div>
        );
      })}
    </form>
  );
}

export default MetricMap;
