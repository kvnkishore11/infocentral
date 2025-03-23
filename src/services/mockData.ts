import { SearchResult, SearchFacets } from '../types';

export const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'Life Insurance Policy Guidelines 2024',
    content: 'Comprehensive guide to New York Life Insurance policies, including term life, whole life, and universal life insurance options. Updated for 2024 with new regulatory compliance information.',
    source: 'Policy Documentation',
    date: '2024-01-15',
    score: 0.92,
    debugExplanation: 'High relevance due to exact match of "life insurance" terms and recent document date. Boosted by policy documentation source type.'
  },
  {
    id: '2',
    title: 'Agent Training Manual: Customer Engagement',
    content: 'Best practices for insurance agents when engaging with potential clients. Includes scripts, objection handling, and compliance guidelines for various insurance products.',
    source: 'Training Materials',
    date: '2023-12-10',
    score: 0.85,
    debugExplanation: 'Strong relevance based on agent-focused content and recent updates. Partial match with search terms.'
  },
  {
    id: '3',
    title: 'Product Update: Variable Universal Life Insurance',
    content: 'Latest updates to our Variable Universal Life Insurance product line, including new investment options and pricing structures for Q1 2024.',
    source: 'Product Updates',
    date: '2024-02-01',
    score: 0.78,
    debugExplanation: 'Moderate relevance due to specific product focus. Boosted by recent publication date.'
  }
];

export const mockCompareResults: SearchResult[] = [
  {
    id: '1',
    title: 'Life Insurance Policy Guidelines 2023',
    content: 'Previous version of the comprehensive guide to New York Life Insurance policies. Includes term life, whole life, and universal life insurance information.',
    source: 'Policy Documentation',
    date: '2023-06-15',
    score: 0.88,
    debugExplanation: 'High relevance but lower than current version due to older document date.'
  },
  {
    id: '2',
    title: 'Customer Engagement Handbook',
    content: 'Guidelines for customer interaction and engagement strategies. Covers various insurance products and sales approaches.',
    source: 'Training Materials',
    date: '2023-08-20',
    score: 0.82,
    debugExplanation: 'Strong relevance with different document title but similar content focus.'
  },
  {
    id: '3',
    title: 'VUL Product Specification',
    content: 'Detailed specifications for Variable Universal Life Insurance products, including features, benefits, and target market information.',
    source: 'Product Documentation',
    date: '2023-09-15',
    score: 0.75,
    debugExplanation: 'Moderate relevance with focus on technical product details.'
  }
];

export const mockFacets: SearchFacets = {
  documentType: {
    'Policy Documentation': 45,
    'Training Materials': 32,
    'Product Updates': 28,
    'Marketing Materials': 15,
    'Customer Communications': 12
  },
  year: {
    '2024': 35,
    '2023': 65,
    '2022': 42,
    '2021': 28
  },
  productLine: {
    'Term Life': 38,
    'Whole Life': 42,
    'Universal Life': 25,
    'Variable Life': 18,
    'Group Benefits': 15
  }
}; 