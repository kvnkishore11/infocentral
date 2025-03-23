import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Environment, Mode, Pipeline, SearchResult, SearchState, SearchFacets } from '../types';

const initialState: SearchState = {
  query: '',
  environment: 'stg',
  mode: 'normal',
  pipeline: 'infocentral',
  results: [],
  loading: false,
  error: null,
  facets: {
    documentType: {},
    year: {},
    productLine: {},
  },
  totalResults: 0,
  currentPage: 1,
  itemsPerPage: 10,
  compareEnvironment: undefined,
  comparePipeline: undefined,
  compareResults: undefined,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setEnvironment: (state, action: PayloadAction<Environment>) => {
      state.environment = action.payload;
    },
    setMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
      if (action.payload !== 'compare') {
        state.compareEnvironment = undefined;
        state.comparePipeline = undefined;
        state.compareResults = undefined;
      }
    },
    setPipeline: (state, action: PayloadAction<Pipeline>) => {
      state.pipeline = action.payload;
    },
    setCompareEnvironment: (state, action: PayloadAction<Environment>) => {
      state.compareEnvironment = action.payload;
    },
    setComparePipeline: (state, action: PayloadAction<Pipeline>) => {
      state.comparePipeline = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setResults: (state, action: PayloadAction<SearchResult[]>) => {
      state.results = action.payload;
    },
    setCompareResults: (state, action: PayloadAction<SearchResult[]>) => {
      state.compareResults = action.payload;
    },
    setFacets: (state, action: PayloadAction<SearchFacets>) => {
      state.facets = action.payload;
    },
    setTotalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const {
  setQuery,
  setEnvironment,
  setMode,
  setPipeline,
  setCompareEnvironment,
  setComparePipeline,
  setLoading,
  setError,
  setResults,
  setCompareResults,
  setFacets,
  setTotalResults,
  setCurrentPage,
  setItemsPerPage,
} = searchSlice.actions;

export default searchSlice.reducer; 