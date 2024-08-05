// src/components/UserSearch.tsx
import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface SearchResult<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const UserSearch: React.FC = () => {
  const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  };

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [users, setUsers] = useState<SearchResult<User>>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers(searchTerm);
  }, [searchTerm]);

  const fetchUsers = async (search: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<SearchResult<User>>(
        `http://localhost:8000/users?search=${search}`
      );
      setUsers(response.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setSearchTerm(search);
  };

  return (
    <div>
      <TextField
        label="Search Users"
        key="test"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {loading ? <CircularProgress /> : null}
      {error ? <Alert severity="error">{error}</Alert> : null}
      <List>
        {users.results.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={`${user.id}`} />
            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
            <ListItemText primary={`${user.email}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserSearch;
