import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import TabPanel from '../TabPanel';
import InitiativeObjtv from '../InitiativeObjtv';
import BusinessQns from '../BusinessQns';
import Wireframe from '../Wireframe';
import MetricMap from '../MetricMap';

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
    textAlign: 'right',
  },
  button: {
    paddingRight: 8,
  }
}));

function Workbook() {
  let { id } = useParams();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <Button variant="contained" color="secondary">
          <SaveIcon className={classes.button} />Save
        </Button>
      </Grid>
    </Grid>
  );
}

export default Workbook;
