import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { RootState } from '../store';
import { SearchState, Environment, Mode, Pipeline } from '../types';
import { setEnvironment, setMode, setPipeline } from '../store/searchSlice';

const SearchSettings = () => {
  const dispatch = useDispatch();
  const { environment, mode, pipeline } = useSelector((state: RootState) => {
    const search = state.search as SearchState;
    return search;
  });

  const handleEnvironmentChange = (event: SelectChangeEvent<Environment>) => {
    dispatch(setEnvironment(event.target.value as Environment));
  };

  const handleModeChange = (event: SelectChangeEvent<Mode>) => {
    dispatch(setMode(event.target.value as Mode));
  };

  const handlePipelineChange = (event: SelectChangeEvent<Pipeline>) => {
    dispatch(setPipeline(event.target.value as Pipeline));
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
      <FormControl size="small" sx={{ minWidth: 200 }}>
        <InputLabel id="environment-label">Environment</InputLabel>
        <Select
          labelId="environment-label"
          value={environment}
          label="Environment"
          onChange={handleEnvironmentChange}
        >
          <MenuItem value="stg">Staging</MenuItem>
          <MenuItem value="dev">Development</MenuItem>
          <MenuItem value="prod">Production</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 200 }}>
        <InputLabel id="mode-label">Mode</InputLabel>
        <Select
          labelId="mode-label"
          value={mode}
          label="Mode"
          onChange={handleModeChange}
        >
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="debug">Debug</MenuItem>
          <MenuItem value="compare">Compare</MenuItem>
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
          <MenuItem value="agencyportal">Agency Portal</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchSettings; 