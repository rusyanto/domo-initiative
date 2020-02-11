import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import domo from 'ryuu.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import MuiAlert from '@material-ui/lab/Alert';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import TabPanel from '../TabPanel';
import InitiativeObjtv from '../InitiativeObjtv';
import BusinessQns from '../BusinessQns';
import Wireframe from '../Wireframe';
import MetricMap from '../MetricMap';

const wbCollection = 'Workbooks';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  const [value, setValue] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState('This is a success message!');
  const [msgError, setMsgError] = useState('This is an error message!');
  const wbValues = useSelector(state => state);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSave = event => {
    let document = {};
    document.content = JSON.parse(JSON.stringify(wbValues.workbook));
    document.content.teams = JSON.parse(JSON.stringify(wbValues.team));
    document.content.questions = JSON.parse(JSON.stringify(wbValues.question));

    setIsSaving(true);
    domo.post(`/domo/datastores/v1/collections/${wbCollection}/documents/`, document)
      .then(resp => {
        setMsgSuccess('Workbook successfully saved!')
        setOpenSuccess(true);
      })
      .catch(err => {
        setMsgError(err.name + ': ' + err.message);
        setOpenError(true);
      })
      .finally(() => setIsSaving(false));
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };

  useEffect(() => {
    console.log('Workbook id: ' + id);
  }, [id]);

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
      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success">
          {msgSuccess}
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error">
          {msgError}
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default Workbook;
