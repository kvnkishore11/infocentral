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
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { RootState } from '../store';
import { SearchResult, SearchState } from '../types';

interface ResultCardProps {
  result: SearchResult;
  showDebug?: boolean;
}

const ResultCard = ({ result, showDebug }: ResultCardProps) => (
  <Card sx={{ mb: 2, '&:hover': { boxShadow: 6 } }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
        <Typography variant="h6" component="h2" gutterBottom>
          {result.title}
        </Typography>
        {showDebug && result.score && (
          <Tooltip title={result.debugExplanation || 'No explanation available'}>
            <Box display="flex" alignItems="center">
              <IconButton size="small">
                <InfoIcon color="primary" />
              </IconButton>
              <Typography variant="caption" color="primary" sx={{ ml: 1 }}>
                Score: {result.score.toFixed(2)}
              </Typography>
            </Box>
          </Tooltip>
        )}
      </Box>
      <Typography variant="body2" color="text.secondary" paragraph>
        {result.content}
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Chip
            label={result.source}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ mr: 1 }}
          />
          <Typography variant="caption" color="text.secondary" component="span">
            {new Date(result.date).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const SearchResults = () => {
  const { mode, results, compareResults, loading, totalResults, currentPage, itemsPerPage, query } = useSelector((state: RootState) => {
    const search = state.search as SearchState;
    return search;
  });

  if (!query) {
    return (
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          Enter a search term to find documents
        </Typography>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box sx={{ mt: 2 }}>
        {[...Array(3)].map((_, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Skeleton variant="text" width="60%" height={32} />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="100%" />
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Skeleton variant="text" width="20%" />
                <Skeleton variant="text" width="20%" />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }

  if (results.length === 0) {
    return (
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          No results found for "{query}"
        </Typography>
      </Box>
    );
  }

  const totalPages = Math.ceil(totalResults / itemsPerPage);

  return (
    <Box sx={{ mt: 2 }}>
      {mode === 'compare' ? (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ pl: 1 }}>
              Primary Results ({results.length})
            </Typography>
            {results.map((result: SearchResult) => (
              <ResultCard
                key={result.id}
                result={result}
                showDebug={mode === 'debug'}
              />
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ pl: 1 }}>
              Compare Results ({compareResults?.length || 0})
            </Typography>
            {compareResults?.map((result: SearchResult) => (
              <ResultCard
                key={result.id}
                result={result}
                showDebug={mode === 'debug'}
              />
            ))}
          </Grid>
        </Grid>
      ) : (
        <Box>
          <Typography variant="h6" gutterBottom sx={{ pl: 1 }}>
            Search Results ({totalResults})
          </Typography>
          {results.map((result: SearchResult) => (
            <ResultCard
              key={result.id}
              result={result}
              showDebug={mode === 'debug'}
            />
          ))}
        </Box>
      )}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={totalPages}
            page={currentPage}
            color="primary"
            shape="rounded"
            size="large"
          />
        </Box>
      )}
    </Box>
  );
};

export default SearchResults; 