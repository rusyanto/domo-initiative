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

function Wireframe() {
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
                      <FormControl fullWidth style={{ marginTop: 16 }}>
                        <InputLabel ref={inputLabel} htmlFor={"standard-card-prisec-" + i + "-" + j}>
                          Primary / Secondary
                        </InputLabel>
                        <Select
                          value={card.priSec}
                          onChange={editCard(question.id, card.id)}
                          inputProps={{
                            name: "priSec",
                            id: "standard-card-prisec-" + i + "-" + j
                          }}
                        >
                          <MenuItem value={'Primary'}>Primary</MenuItem>
                          <MenuItem value={'Secondary'}>Secondary</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-chart-type-" + i + "-" + j}
                        label="Chart Type"
                        name="chartType"
                        value={card.chartType}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-date-range-" + i + "-" + j}
                        label="Date Range"
                        name="dateRange"
                        value={card.dateRange}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-date-grain-" + i + "-" + j}
                        label="Date Grain"
                        name="dateGrain"
                        value={card.dateGrain}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-x-axis-" + i + "-" + j}
                        label="X-Axis (Dimension)"
                        name="xAxis"
                        value={card.xAxis}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-y-axis-" + i + "-" + j}
                        label="Y-Axis (Value A)"
                        name="yAxis"
                        value={card.yAxis}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-z-axis-" + i + "-" + j}
                        label="Z-Axis (Value B)"
                        name="zAxis"
                        value={card.zAxis}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-goal-value-" + i + "-" + j}
                        label="Goal / Target Value"
                        name="goalValue"
                        value={card.goalValue}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-series-" + i + "-" + j}
                        label="Series"
                        name="series"
                        value={card.series}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-summary-" + i + "-" + j}
                        label="Summary Number"
                        name="summary"
                        value={card.summary}
                        onChange={editCard(question.id, card.id)}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} className="input-pad">
                      <TextField
                        id={"standard-card-filters-" + i + "-" + j}
                        label="Card Specific Filters"
                        name="cardFilters"
                        value={card.cardFilters}
                        onChange={editCard(question.id, card.id)}
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

export default Wireframe;
