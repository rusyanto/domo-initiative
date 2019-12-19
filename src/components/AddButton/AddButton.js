import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function AddButton(props) {
  return (
    <Button {...props} variant="outlined" size="small" style={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: 16 }}>
      <AddIcon fontSize="small" />Add New
    </Button>
  );
}

export default AddButton;
