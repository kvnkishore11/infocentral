import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setLoading, setResults, setCompareResults } from '../store/searchSlice';
import { mockSearchResults, mockCompareResults } from '../services/mockData';

const SearchBar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.search.mode);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchInput.trim()) return;

    dispatch(setQuery(searchInput));
    dispatch(setLoading(true));

    // Simulate API delay
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Filter mock results based on search input
      const searchTerm = searchInput.toLowerCase();
      let filteredResults = [];
      
      // Always set primary results
      filteredResults = mockSearchResults.filter(result => 
        result.title.toLowerCase().includes(searchTerm) ||
        result.description.toLowerCase().includes(searchTerm) ||
        result.documentType.toLowerCase().includes(searchTerm)
      );

      // If no exact matches, show all results (for demo purposes)
      if (filteredResults.length === 0) {
        filteredResults = mockSearchResults;
      }
      
      dispatch(setResults(filteredResults));

      // If in compare mode, also set compare results
      if (mode === 'compare') {
        let compareFilteredResults = mockCompareResults.filter(result =>
          result.title.toLowerCase().includes(searchTerm) ||
          result.content.toLowerCase().includes(searchTerm) ||
          result.source.toLowerCase().includes(searchTerm)
        );

        // If no exact matches, show all compare results (for demo purposes)
        if (compareFilteredResults.length === 0) {
          compareFilteredResults = mockCompareResults;
        }

        dispatch(setCompareResults(compareFilteredResults));
      }
    } catch (error) {
      console.error('Search error:', error);
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