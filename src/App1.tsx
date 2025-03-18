import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Layout from './base/layout/Layout';
import TaskList from './app/task/TaskList';
import RoleList from './app/role/RoleList';
import Dashboard from './app/dashboard/Dashboard';

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
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tarefas-listagem" element={<TaskList />} />
            <Route path="/roles-listagem" element={<RoleList />} />
            {/* Add other routes as needed */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
