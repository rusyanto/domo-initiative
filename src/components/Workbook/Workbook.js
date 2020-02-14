import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import domo from 'ryuu.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import TabPanel from '../TabPanel';
import InitiativeObjtv from '../InitiativeObjtv';
import BusinessQns from '../BusinessQns';
import Wireframe from '../Wireframe';
import MetricMap from '../MetricMap';
import {
  OPEN_SNACKBAR_SUCCESS, OPEN_SNACKBAR_ERROR,
  INITIALIZE_WORKBOOK, INITIALIZE_TEAM, INITIALIZE_QUESTION
} from '../../redux/actionTypes';

const wbCollection = 'Workbooks';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  tabContainer: {
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    marginTop: 16,
  },
  tabLabel: {
    textTransform: 'none',
  },
  buttons: {
    '& > *': {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
    display: 'flex',
    verticalAlign: 'top',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  button: {
    paddingRight: 8,
  }
}));

function Workbook() {
  let { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const state = useSelector(state => state);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSave = event => {
    let document = {};
    document.content = JSON.parse(JSON.stringify(state.workbook));
    document.content.teams = JSON.parse(JSON.stringify(state.team));
    document.content.questions = JSON.parse(JSON.stringify(state.question));
    document.content.createdBy = domo.env.userName;

    setIsSaving(true);
    if (id === 'new') {
      domo.post(`/domo/datastores/v1/collections/${wbCollection}/documents/`, document)
        .then(resp => {
          dispatch({
            type: OPEN_SNACKBAR_SUCCESS,
            payload: { msg: 'Workbook successfully saved!' }
          });
        })
        .catch(err => {
          dispatch({
            type: OPEN_SNACKBAR_ERROR,
            payload: { msg: err.name + ': ' + err.message }
          });
        })
        .finally(() => setIsSaving(false));
    } else {
      domo.put(`/domo/datastores/v1/collections/${wbCollection}/documents/${id}`, document)
        .then(resp => {
          dispatch({
            type: OPEN_SNACKBAR_SUCCESS,
            payload: { msg: 'Workbook successfully saved!' }
          });
        })
        .catch(err => {
          dispatch({
            type: OPEN_SNACKBAR_ERROR,
            payload: { msg: err.name + ': ' + err.message }
          });
        })
        .finally(() => setIsSaving(false));
    }
  };

  useEffect(() => {
    domo.get(`/domo/datastores/v1/collections/${wbCollection}/documents/${id}`)
      .then(document => {
        dispatch({ type: INITIALIZE_WORKBOOK, payload: document.content });
        dispatch({ type: INITIALIZE_TEAM, payload: document.content.teams });
        dispatch({ type: INITIALIZE_QUESTION, payload: document.content.questions });
      })
      .catch(err => {
        dispatch({
          type: OPEN_SNACKBAR_ERROR,
          payload: { msg: err.name + ': ' + err.message }
        });
      });
  }, [id, dispatch]);

  return (
    <Grid container>
      <Grid item xs={12} className={classes.tabContainer}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Workbook tabs"
          className={classes.tabs}
        >
          <Tab label="Initiative Objective" {...a11yProps(0)} className={classes.tabLabel} />
          <Tab label="Business Questions & Metrics" {...a11yProps(1)} className={classes.tabLabel} />
          <Tab label="Wireframe" {...a11yProps(2)} className={classes.tabLabel} />
          <Tab label="Metric Mapping" {...a11yProps(3)} className={classes.tabLabel} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <InitiativeObjtv />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BusinessQns />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Wireframe />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <MetricMap />
        </TabPanel>
      </Grid>
      <Grid item xs={12} className={classes.buttons}>
        <Button href="/">
          <NavigateBeforeIcon className={classes.button} />Back
        </Button>
        {isSaving ? (
          <Box paddingLeft={4} paddingRight={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Button variant="contained" color="secondary" onClick={handleSave}>
            <SaveIcon className={classes.button} />Save
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

export default Workbook;
