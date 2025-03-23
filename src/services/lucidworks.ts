import axios from 'axios';
import { Environment, LucidworksResponse, Pipeline } from '../types';

const BASE_URLS = {
  stg: 'https://newyorklife-stg.b.lucidworks.cloud',
  dev: 'https://newyorklife-dev.b.lucidworks.cloud',
  prod: 'https://newyorklife.b.lucidworks.cloud'
};

export const searchLucidworks = async (
  query: string,
  environment: Environment,
  pipeline: Pipeline,
  page: number = 1,
  itemsPerPage: number = 10,
  debug: boolean = false
): Promise<LucidworksResponse> => {
  const baseUrl = BASE_URLS[environment];
  const start = (page - 1) * itemsPerPage;
  
  try {
    const response = await axios.get(`${baseUrl}/api/apps/agencyportal/query/${pipeline}`, {
      params: {
        q: query,
        rows: itemsPerPage,
        start,
        debug: debug ? 'true' : 'false',
        'debug.explain.structured': debug ? 'true' : 'false'
      }
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Error fetching search results');
    }
    throw error;
  }
}; 