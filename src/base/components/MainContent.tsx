import React from 'react';
import { Box, Paper } from '@mui/material';

interface MainContentProps {
  children?: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: (theme) => theme.palette.grey[100],
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 64px - 48px)',
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default MainContent;
