import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setLoading, setResults, setCompareResults } from '../store/searchSlice';
import { searchLucidworks } from '../services/lucidworks';

const SearchBar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.search.mode);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchInput.trim()) return;

    dispatch(setQuery(searchInput));
    dispatch(setLoading(true));

    try {
      // Search with debug mode if enabled
      const searchOptions = {
        debug: mode === 'debug',
        debugQuery: mode === 'debug',
        debugExplain: { structured: mode === 'debug' }
      };

      const searchResult = await searchLucidworks(searchInput, searchOptions);
      dispatch(setResults(searchResult.results));

      // If in compare mode, perform another search with different parameters
      if (mode === 'compare') {
        const compareResult = await searchLucidworks(searchInput, {
          ...searchOptions,
          // Add any specific compare mode parameters here
        });
        dispatch(setCompareResults(compareResult.results));
      }
    } catch (error) {
      console.error('Search error:', error);
      // You might want to dispatch an error action here
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSearch}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 800,
        margin: '20px auto',
        boxShadow: 2,
      }}
      elevation={1}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search Info Central..."
        inputProps={{ 'aria-label': 'search info central' }}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar; 