// src/App.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import UserSearch from './components/UserSearch';

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom m={2}>
        User Search
      </Typography>
      <UserSearch />
    </Container>
  );
};

export default App;
