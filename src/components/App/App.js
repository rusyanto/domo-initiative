import React from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import WorkTabs from '../WorkTabs';

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        '&$focused': {
          color: '#4e8cba'
        }
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottomColor: '#4e8cba'
        }
      }
    }
  },
  palette: {
    background: {
      gray: '#555',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.8)',
      secondary: 'rgba(0, 0, 0, 0.4)'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WorkTabs />
    </ThemeProvider>
  );
}

export default App;
