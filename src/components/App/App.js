import React from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TabPanel from '../TabPanel';

const theme = createMuiTheme({
  palette: {
    background: {
      blue: '#99ccee',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TabPanel />
    </ThemeProvider>
  );
}

export default App;
