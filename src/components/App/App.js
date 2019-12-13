import React from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Route, HashRouter } from 'react-router-dom';
import Home from '../Home';
import Workbook from '../Workbook';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ccffff",
      main: "#99ccee",
      dark: "#689bbb",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffc04d",
      main: "#fc8f13",
      dark: "#c36000",
      contrastText: "#fff"
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
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route path="/workbook" component={Workbook} />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
