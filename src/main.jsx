import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import App from './App';

// Import styles
import '@mantine/core/styles.css';
import './index.css';

// Create theme
const theme = createTheme({
  colors: {
    pink: [
      '#FFF0F6',
      '#FFDEEB',
      '#FCC2D7',
      '#FAA2C1',
      '#F783AC',
      '#F06595',
      '#E64980',
      '#D6336C',
      '#C2255C',
      '#A61E4D',
    ],
  },
  primaryColor: 'pink',
  fontFamily: 'Poppins, sans-serif',
  headings: {
    fontFamily: 'Playfair Display, serif',
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);