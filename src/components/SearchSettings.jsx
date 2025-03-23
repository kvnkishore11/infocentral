import React from 'react';
import { 
  Paper, 
  Box,
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setEnvironment, setMode, setPipeline } from '../store/searchSlice';

const SearchSettings = () => {
  const dispatch = useDispatch();
  const { environment, mode, pipeline } = useSelector((state) => state.search);

  const handleEnvironmentChange = (event) => {
    dispatch(setEnvironment(event.target.value));
  };

  const handleModeChange = (event, newMode) => {
    if (newMode !== null) {
      dispatch(setMode(newMode));
    }
  };

  const handlePipelineChange = (event) => {
    dispatch(setPipeline(event.target.value));
  };

  return (
    <Paper sx={{ p: 3, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Search Settings
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel id="environment-label">Environment</InputLabel>
          <Select
            labelId="environment-label"
            value={environment}
            label="Environment"
            onChange={handleEnvironmentChange}
          >
            <MenuItem value="dev">Development</MenuItem>
            <MenuItem value="stg">Staging</MenuItem>
            <MenuItem value="prod">Production</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel id="pipeline-label">Pipeline</InputLabel>
          <Select
            labelId="pipeline-label"
            value={pipeline}
            label="Pipeline"
            onChange={handlePipelineChange}
          >
            <MenuItem value="infocentral">Info Central</MenuItem>
            <MenuItem value="knowledge">Knowledge Base</MenuItem>
            <MenuItem value="policies">Policies</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <ToggleButtonGroup
          value={mode}
          exclusive
          onChange={handleModeChange}
          aria-label="search mode"
          size="small"
        >
          <ToggleButton value="normal" aria-label="normal mode">
            Normal
          </ToggleButton>
          <ToggleButton value="debug" aria-label="debug mode">
            Debug
          </ToggleButton>
          <ToggleButton value="compare" aria-label="compare mode">
            Compare
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Paper>
  );
};

export default SearchSettings; 