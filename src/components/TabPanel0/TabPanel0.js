import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  multiline: {
    marginTop: 18
  },
  header: {
    fontSize: 17,
    backgroundColor: '#c8e2f4',
    marginTop: 18,
    padding: 10
  },
  btnBottom: {
    marginTop: 18
  }
}));

function TabPanel0() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    svaId: '',
    initiativeName: '',
    businessUnit: '',
    initiativeOwner: '',
    businessObjective: '',
    audience: '',

    bvWeWill: '',
    bvImprove: '',
    bvMeasure: '',
    bvResult: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form noValidate autoComplete="off" style={{padding: '0 16px'}}>
      <Grid container>
        <Grid item xs={7}>
          <TextField
            id="standard-sva-id"
            label="SVA ID"
            value={values.svaId}
            onChange={handleChange('svaId')}
            fullWidth
            margin="normal"
          />
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
          <TextField
            id="standard-business-objective"
            label="Define Business Objective"
            multiline
            className={classes.multiline}
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
            className={classes.multiline}
            rows="3"
            value={values.audience}
            onChange={handleChange('audience')}
            fullWidth
            margin="normal"
          />
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
          <Button variant="contained" className={classes.btnBottom}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TabPanel0;
