import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Provider } from 'react-redux';
import { store } from './store';
import theme from './theme';

// Import our components
import SearchBar from './components/SearchBar';
import SearchSettings from './components/SearchSettings';
import SearchResults from './components/SearchResults';
import SearchFacets from './components/SearchFacets';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          bgcolor: 'background.default'
        }}>
          <AppBar position="static" elevation={0}>
            <Toolbar sx={{ minHeight: { xs: 64 } }}>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  flexGrow: 1, 
                  fontWeight: 500,
                  fontSize: '1.25rem',
                  letterSpacing: '0.0075em'
                }}
              >
                Info Central
              </Typography>
            </Toolbar>
          </AppBar>
          
          <Container maxWidth={false} sx={{ 
            mt: 3, 
            mb: 3, 
            flex: 1,
            px: { xs: 2, sm: 3, md: 4 }
          }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SearchBar />
              </Grid>
              <Grid item xs={12}>
                <SearchSettings />
              </Grid>
              <Grid item xs={12} md={3}>
                <SearchFacets />
              </Grid>
              <Grid item xs={12} md={9}>
                <SearchResults />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App; 