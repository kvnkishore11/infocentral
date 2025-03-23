import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
  Divider,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { mockFacets } from '../services/mockData';

const SearchFacets = () => {
  // For now, we'll use mock facets directly
  const facets = mockFacets;

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Filters
        </Typography>
        
        {/* Document Type Facet */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Document Type
          </Typography>
          <List dense>
            {Object.entries(facets.documentType).map(([type, count]) => (
              <ListItem key={type} disablePadding>
                <ListItemButton>
                  <ListItemText primary={type} />
                  <Chip
                    label={count}
                    size="small"
                    sx={{ ml: 1 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />
        
        {/* Year Facet */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Year
          </Typography>
          <List dense>
            {Object.entries(facets.year).map(([year, count]) => (
              <ListItem key={year} disablePadding>
                <ListItemButton>
                  <ListItemText primary={year} />
                  <Chip
                    label={count}
                    size="small"
                    sx={{ ml: 1 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />
        
        {/* Product Line Facet */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Product Line
          </Typography>
          <List dense>
            {Object.entries(facets.productLine).map(([product, count]) => (
              <ListItem key={product} disablePadding>
                <ListItemButton>
                  <ListItemText primary={product} />
                  <Chip
                    label={count}
                    size="small"
                    sx={{ ml: 1 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SearchFacets; 