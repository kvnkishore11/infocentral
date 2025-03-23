export type Environment = 'stg' | 'dev' | 'prod';
export type Mode = 'normal' | 'debug' | 'compare';
export type Pipeline = 'infocentral' | 'agencyportal';

export interface SearchResult {
  id: string;
  title: string;
  content: string;
  source: string;
  date: string;
  score?: number;
  debugExplanation?: string;
}

export interface DocumentFacet {
  [key: string]: number;
}

export interface SearchFacets {
  documentType: DocumentFacet;
  year: DocumentFacet;
  productLine: DocumentFacet;
}

export interface SearchState {
  query: string;
  environment: Environment;
  mode: Mode;
  pipeline: Pipeline;
  results: SearchResult[];
  loading: boolean;
  error: string | null;
  compareEnvironment?: Environment;
  comparePipeline?: Pipeline;
  compareResults?: SearchResult[];
  facets: SearchFacets;
  totalResults: number;
  currentPage: number;
  itemsPerPage: number;
}

export interface LucidworksDocument {
  id: string;
  title: string;
  content: string;
  source: string;
  date: string;
  score?: number;
  [key: string]: unknown;
}

export interface LucidworksResponse {
  response: {
    docs: LucidworksDocument[];
    numFound: number;
  };
  debug?: {
    explain: Record<string, string>;
  };
  facets: SearchFacets;
} 