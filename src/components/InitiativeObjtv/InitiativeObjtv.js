import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { SET_WORKBOOK_VALUE } from '../../redux/actionTypes';

const useStyles = makeStyles(theme => ({
  multiline: {
    marginTop: 18
  },
  headerBv: {
    fontSize: 17,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    margin: '0 0 0 -24px',
    padding: '10px 10px 10px 20px',
    maxWidth: 'none'
  },
  headerTeam: {
    fontSize: 17,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    margin: '0 0 0 -24px',
    padding: '0 10px 0 20px',
    width: 'auto'
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
          <Grid className={classes.headerBv} item xs={12}>
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
      <Grid container spacing={8}>
        <Grid item xs={7}>
          <Grid container className={classes.headerTeam} alignItems="baseline">
            <Grid item xs={6}>
              Initiative Team
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
              <IconButton style={{ color: '#fff' }} aria-label="add team member">
                <AddBoxIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={3}>
              <TextField
                id="standard-team-name"
                label="Name"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="standard-team-role"
                label="Role"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="standard-team-domo-role"
                label="Core Domo Role"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={1} style={{ textAlign: 'center' }}>
              <IconButton aria-label="delete team member">
                <DeleteOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>

        </Grid>
      </Grid>
    </form>
  );
}

export default InitiativeObjtv;
