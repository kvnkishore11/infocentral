import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  selectedFacets: [],
  totalResults: 0,
  currentPage: 1,
  itemsPerPage: 10,
  compareEnvironment: undefined,
  comparePipeline: undefined,
  compareResults: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setEnvironment: (state, action) => {
      state.environment = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      if (action.payload !== 'compare') {
        state.compareEnvironment = undefined;
        state.comparePipeline = undefined;
        state.compareResults = [];
      }
    },
    setPipeline: (state, action) => {
      state.pipeline = action.payload;
    },
    setCompareEnvironment: (state, action) => {
      state.compareEnvironment = action.payload;
    },
    setComparePipeline: (state, action) => {
      state.comparePipeline = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.totalResults = action.payload.length;
    },
    setCompareResults: (state, action) => {
      state.compareResults = action.payload;
    },
    setFacets: (state, action) => {
      state.facets = action.payload;
    },
    setSelectedFacets: (state, action) => {
      state.selectedFacets = action.payload;
    },
    setTotalResults: (state, action) => {
      state.totalResults = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
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
  setSelectedFacets,
  setTotalResults,
  setCurrentPage,
  setItemsPerPage,
} = searchSlice.actions;

export default searchSlice.reducer; 