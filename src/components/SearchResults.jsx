import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Tooltip,
  IconButton,
  Pagination,
  Skeleton,
  Chip,
  CircularProgress,
  Divider,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const LoadingSkeleton = () => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
        <Skeleton variant="text" width="60%" height={32} />
        <Skeleton variant="circular" width={24} height={24} />
      </Box>
      <Box sx={{ mt: 2, mb: 3 }}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="80%" />
      </Box>
      <Box display="flex" alignItems="center">
        <Skeleton variant="rectangular" width={100} height={24} sx={{ mr: 1, borderRadius: 1 }} />
        <Skeleton variant="text" width={100} />
      </Box>
    </CardContent>
  </Card>
);

const DebugInfo = ({ result }) => (
  <Box sx={{ mt: 2, pt: 2, borderTop: '1px dashed rgba(0, 0, 0, 0.12)' }}>
    <Typography variant="caption" color="text.secondary" component="div" gutterBottom>
      Debug Information:
    </Typography>
    <Typography variant="caption" color="text.secondary" component="div">
      • Document Type: {result.documentType}
    </Typography>
    <Typography variant="caption" color="text.secondary" component="div">
      • Last Updated: {new Date(result.lastUpdated).toLocaleString()}
    </Typography>
    <Typography variant="caption" color="text.secondary" component="div">
      • ID: {result.id}
    </Typography>
    {result.metadata && (
      <>
        <Typography variant="caption" color="text.secondary" component="div">
          • Author: {result.metadata.author}
        </Typography>
        <Typography variant="caption" color="text.secondary" component="div">
          • Version: {result.metadata.version}
        </Typography>
        <Typography variant="caption" color="text.secondary" component="div">
          • Status: {result.metadata.status}
        </Typography>
      </>
    )}
  </Box>
);

const ResultCard = ({ result, showDebug }) => (
  <Card sx={{ mb: 2, '&:hover': { boxShadow: 6 } }}>
    <CardContent>
      <Typography variant="h6" component="h2" gutterBottom>
        {result.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        {result.description}
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Chip
            label={result.documentType}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ mr: 1 }}
          />
          <Typography variant="caption" color="text.secondary" component="span">
            Last updated: {new Date(result.lastUpdated).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
      {showDebug && <DebugInfo result={result} />}
    </CardContent>
  </Card>
);

const CompareView = ({ results, compareResults }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <Typography variant="h6" gutterBottom sx={{ pl: 1 }}>
        Primary Results ({results.length})
      </Typography>
      {results.map((result) => (
        <ResultCard key={result.id} result={result} showDebug />
      ))}
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography variant="h6" gutterBottom sx={{ pl: 1 }}>
        Compare Results ({compareResults.length})
      </Typography>
      {compareResults.map((result) => (
        <ResultCard key={result.id} result={result} showDebug />
      ))}
    </Grid>
  </Grid>
);

const SearchResults = () => {
  const { mode, results, compareResults, loading, query } = useSelector((state) => state.search);

  if (loading) {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ pl: 1 }}>
          Loading Results...
        </Typography>
        {[1, 2, 3].map((key) => (
          <LoadingSkeleton key={key} />
        ))}
      </Box>
    );
  }

  if (!query) {
    return (
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          Enter a search term to find documents
        </Typography>
      </Box>
    );
  }

  if (results.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body1" color="text.secondary">
          No results found for "{query}"
        </Typography>
      </Box>
    );
  }

  if (mode === 'compare') {
    return <CompareView results={results} compareResults={compareResults} />;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom sx={{ pl: 1 }}>
        Search Results ({results.length})
      </Typography>
      {results.map((result) => (
        <ResultCard 
          key={result.id} 
          result={result} 
          showDebug={mode === 'debug'} 
        />
      ))}
    </Box>
  );
};

export default SearchResults; 