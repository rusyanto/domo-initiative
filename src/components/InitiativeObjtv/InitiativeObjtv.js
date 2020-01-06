import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { SET_WORKBOOK_VALUE } from '../../redux/actionTypes';

const useStyles = makeStyles(theme => ({
  multiline: {
    marginTop: 18
  },
  header: {
    fontSize: 17,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    margin: '0 0 0 -24px',
    padding: '10px 10px 10px 20px',
    maxWidth: 'none'
  },
  btnBottom: {
    marginTop: 18
  }
}));

function InitiativeObjtv() {
  const classes = useStyles();

  const values = useSelector(state => state.workbook);
  const dispatch = useDispatch();

  const handleChange = name => event => {
    dispatch({
      type: SET_WORKBOOK_VALUE,
      payload: {
        name: name,
        value: event.target.value
      }
    });
  };

  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={8}>
        <Grid item xs={7}>
          <TextField
            id="standard-initiative-name"
            label="Initiative Name"
            value={values.initiativeName}
            onChange={handleChange('initiativeName')}
            fullWidth
            margin="normal"
          />
          <TextField
            id="standard-business-unit"
            label="Business Unit"
            value={values.businessUnit}
            onChange={handleChange('businessUnit')}
            fullWidth
            margin="normal"
          />
          <TextField
            id="standard-initiative-owner"
            label="Initiative Owner"
            value={values.initiativeOwner}
            onChange={handleChange('initiativeOwner')}
            fullWidth
            margin="normal"
          />
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={7}>
          <TextField
            id="standard-business-objective"
            label="Define Business Objective"
            multiline
            rows="6"
            value={values.businessObjective}
            onChange={handleChange('businessObjective')}
            fullWidth
            margin="normal"
          />
          <TextField
            id="standard-audience"
            label="Define the Audience"
            multiline
            rows="3"
            value={values.audience}
            onChange={handleChange('audience')}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="standard-current-state"
            label="Define the current state / problem"
            multiline
            rows="11"
            value={values.currentState}
            onChange={handleChange('currentState')}
            fullWidth
            margin="normal"
            inputProps={{style: {height: 222}}}
          />
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={7}>
          <Grid className={classes.header} item xs={12}>
            Business Value Statement
          </Grid>
          <TextField
            id="standard-bv-we-will"
            label="We Will"
            multiline
            rows="3"
            value={values.bvWeWill}
            onChange={handleChange('bvWeWill')}
            fullWidth
            margin="normal"
          />
          <TextField
            id="standard-bv-improve"
            label="To Improve"
            multiline
            rows="3"
            value={values.bvImprovel}
            onChange={handleChange('bvImprove')}
            fullWidth
            margin="normal"
          />
          <TextField
            id="standard-bv-measure"
            label="As Measured By"
            multiline
            rows="3"
            value={values.bvMeasure}
            onChange={handleChange('bvMeasure')}
            fullWidth
            margin="normal"
          />
          <TextField
            id="standard-bv-result"
            label="Resulting In"
            multiline
            rows="3"
            value={values.bvResult}
            onChange={handleChange('bvResult')}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="standard-mvp"
            label="Minimum Viable Product"
            multiline
            rows="10"
            values={values.mvp}
            onChange={handleChange('mvp')}
            fullWidth
            margin="normal"
            style={{ marginTop: 61 }}
            inputProps={{style: {height: 387}}}
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default InitiativeObjtv;
