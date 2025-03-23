import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFacets } from '../store/searchSlice';

const SearchFacets = () => {
  const dispatch = useDispatch();
  const selectedFacets = useSelector((state) => state.search.selectedFacets);

  const facets = [
    { id: 'policies', name: 'Policies', count: 150 },
    { id: 'procedures', name: 'Procedures', count: 89 },
    { id: 'training', name: 'Training Materials', count: 45 },
    { id: 'forms', name: 'Forms', count: 67 },
    { id: 'guidelines', name: 'Guidelines', count: 34 },
  ];

  const handleFacetToggle = (facetId) => {
    const newSelectedFacets = selectedFacets.includes(facetId)
      ? selectedFacets.filter(id => id !== facetId)
      : [...selectedFacets, facetId];
    dispatch(setSelectedFacets(newSelectedFacets));
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Filter By
      </Typography>
      <List dense>
        {facets.map((facet) => (
          <ListItem
            key={facet.id}
            dense
            button
            onClick={() => handleFacetToggle(facet.id)}
          >
            <Checkbox
              edge="start"
              checked={selectedFacets.includes(facet.id)}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText 
              primary={facet.name}
              secondary={`(${facet.count})`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SearchFacets; 