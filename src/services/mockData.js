export const mockSearchResults = [
  {
    id: 'DOC-001',
    title: 'Life Insurance Policy Guidelines 2024',
    description: 'Comprehensive guide for life insurance policies, including terms, conditions, and coverage details.',
    documentType: 'Policy',
    lastUpdated: '2024-03-15T10:30:00Z',
    url: '#',
    metadata: {
      author: 'Policy Team',
      version: '2.1.0',
      status: 'Active'
    }
  },
  {
    id: 'DOC-002',
    title: 'Claims Processing Procedure',
    description: 'Step-by-step guide for processing insurance claims efficiently and accurately.',
    documentType: 'Procedure',
    lastUpdated: '2024-02-28T15:45:00Z',
    url: '#',
    metadata: {
      author: 'Claims Department',
      version: '3.0.1',
      status: 'Active'
    }
  },
  {
    id: 'DOC-003',
    title: 'New Agent Training Manual',
    description: 'Training materials for new insurance agents, covering sales techniques and product knowledge.',
    documentType: 'Training',
    lastUpdated: '2024-01-15T09:00:00Z',
    url: '#',
    metadata: {
      author: 'Training Department',
      version: '1.2.0',
      status: 'Under Review'
    }
  },
  {
    id: 'DOC-004',
    title: 'Policy Renewal Form',
    description: 'Standard form for processing policy renewals with updated terms and conditions.',
    documentType: 'Form',
    lastUpdated: '2024-03-01T11:20:00Z',
    url: '#',
    metadata: {
      author: 'Forms Management',
      version: '4.0.0',
      status: 'Active'
    }
  },
  {
    id: 'DOC-005',
    title: 'Customer Service Guidelines',
    description: 'Best practices and procedures for providing excellent customer service to policy holders.',
    documentType: 'Guideline',
    lastUpdated: '2024-02-15T14:15:00Z',
    url: '#',
    metadata: {
      author: 'Customer Service Team',
      version: '2.3.1',
      status: 'Active'
    }
  },
];

export const mockCompareResults = [
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

export const mockFacets = {
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