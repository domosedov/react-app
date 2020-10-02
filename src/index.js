import React from 'react';
import ReactDOM from 'react-dom';
import {CookiesProvider} from 'react-cookie'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {ThemeProvider} from 'styled-components'
import { theme } from './components/theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);