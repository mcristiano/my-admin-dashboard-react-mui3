import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Layout from './base/layout/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <h1>Welcome to Admin Dashboard</h1>
        <p>Start customizing your dashboard content here.</p>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
