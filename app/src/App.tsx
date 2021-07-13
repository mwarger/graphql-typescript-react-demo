import React from 'react';
import './App.scss';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/Theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { MenuAppBar } from './pages/MenuAppBar';
import { NowPlaying } from './pages/NowPlaying';
import { Popular } from './pages/Popular';

import { ApolloProvider } from './context/ApolloProvider';

import { Box, Link } from '@material-ui/core';

export const App = () => {
  return (
    <div className="app">
      <ApolloProvider>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Box
              style={{
                minHeight: '100%',
                display: 'grid',
                gridTemplateRows: 'auto 1fr auto',
                gridTemplateColumns: '100%',
              }}
            >
              <MenuAppBar />
              <Box>
                <Switch>
                  <Route path="/nowPlaying" component={NowPlaying} />
                  <Route path="/popular" component={Popular} />
                  <Redirect from="/" to="/nowPlaying" />
                </Switch>
              </Box>
              <Box p={2}>
                <Box color="#222">
                  Icons made by{' '}
                  <Link
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                    color="inherit"
                  >
                    Freepik
                  </Link>{' '}
                  from{' '}
                  <Link
                    color="inherit"
                    href="https://www.flaticon.com/"
                    title="Flaticon"
                  >
                    www.flaticon.com
                  </Link>
                </Box>
              </Box>
            </Box>
          </Router>
        </MuiThemeProvider>
      </ApolloProvider>
    </div>
  );
};
