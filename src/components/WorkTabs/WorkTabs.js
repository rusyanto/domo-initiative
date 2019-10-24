import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import domo from 'ryuu.js';
import TabPanel0 from '../TabPanel0';
import TabPanel1 from '../TabPanel1';
import TabPanel2 from '../TabPanel2';
import TabPanel3 from '../TabPanel3';
import TabPanel4 from '../TabPanel4';
import TabPanel5 from '../TabPanel5';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
  colorPrimary: {
    backgroundColor: theme.palette.background.gray,
  }
}));

const WorkTab = withStyles({
  root: {
    color: '#fff',
  }
})(props => <Tab {...props} />);

export default function WorkTabs() {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [tabData, setTabData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Get AppDB data
    domo.get(`/domo/datastores/v1/collections/Worksheet/documents/`)
      .then(sheets => {
        let respData= ['', '', '', '', '', ''];
        for (var sheet of sheets) {
          if (sheet.tabId >= 0 && sheet.tabId <= 5) {
            respData[sheet.tabId] = sheet.tabBody;
          }
        }
        setTabData(respData);
      });
  }, [])

  if (tabData.length === 0) {
    return (<CircularProgress />);
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static" classes={classes}>
          <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="work tabs">
            <WorkTab label="Initiative Objective" {...a11yProps(0)} />
            <WorkTab label="Business Questions & Metrics" {...a11yProps(1)} />
            <WorkTab label="Wireframe" {...a11yProps(2)} />
            <WorkTab label="Metric Mapping" {...a11yProps(3)} />
            <WorkTab label="Initiative Profile" {...a11yProps(4)} />
            <WorkTab label="Change - Feedback Log" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <TabPanel0 data={tabData[0]} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabPanel1 data={tabData[1]} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabPanel2 data={tabData[2]} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TabPanel3 data={tabData[3]} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <TabPanel4 data={tabData[4]} />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <TabPanel5 data={tabData[5]} />
        </TabPanel>
      </div>
    );
  }
}
