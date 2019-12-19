import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddButton from '../AddButton';

function Wireframe() {
  const handleAdd = () => {
    console.log("Clicked Add");
  };

  return (
    <form noValidate autoComplete="off" style={{ padding: '0 6px' }} onClick={handleAdd}>
      <Grid container>
        <Grid item xs={12}>
          <AddButton />
        </Grid>
      </Grid>
    </form>
  );
}

export default Wireframe;
