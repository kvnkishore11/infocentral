import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { setQuery, setResults, setLoading } from '../store/searchSlice';
import { mockSearchResults } from '../services/mockData';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = useCallback(async () => {
    if (!searchInput.trim()) return;
    
    dispatch(setQuery(searchInput));
    dispatch(setLoading(true));

    // Simulate API delay
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      dispatch(setResults(mockSearchResults));
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, searchInput]);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'center', mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Search New York Life Resources
      </Typography>
      <Paper
        elevation={0}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: '600px',
          mx: 'auto',
          border: '1px solid #e0e0e0',
          borderRadius: 2,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search for documents, policies, training materials..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{ 
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            '& .MuiInputBase-input': { pl: 2 }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton 
                  onClick={() => handleSearch()} 
                  sx={{ mr: 1 }}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Box>
  );
};

export default SearchBar; 