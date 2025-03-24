import { enc, HmacSHA256 } from 'crypto-js';

const JWT_SECRET = '';
const API_BASE_URL = 'https://newyorklife-dev.b.lucidworks.cloud/api/apps/agencyportal/query/infocentral';

// Generate JWT token
const generateToken = () => {
  const header = {
    'typ': 'JWT',
    'alg': 'HS256'
  };

  const currentTimestamp = Math.floor(Date.now() / 1000);
  const data = {
    'iss': 'https://newyorklife-dev.b.lucidworks.cloud/agencyportal/api/jwt',
    'sub': 'brian_w_pfister@newyorklife.com.prod.model',
    'iat': currentTimestamp,
    'exp': currentTimestamp + 30000000 // 30 seconds expiry
  };

  // Base64Url encode header
  const stringifiedHeader = enc.Utf8.parse(JSON.stringify(header));
  const encodedHeader = base64url(stringifiedHeader);

  // Base64Url encode data
  const stringifiedData = enc.Utf8.parse(JSON.stringify(data));
  const encodedData = base64url(stringifiedData);

  // Create token content
  const token = `${encodedHeader}.${encodedData}`;

  // Create signature
  const signature = HmacSHA256(token, JWT_SECRET);
  const encodedSignature = base64url(signature);

  // Create signed token
  return `${token}.${encodedSignature}`;
};

// Base64Url encoding function
const base64url = (source) => {
  // Encode in classical base64
  let encodedSource = enc.Base64.stringify(source);

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, '');

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, '-');
  encodedSource = encodedSource.replace(/\//g, '_');

  return encodedSource;
};

// Search function
export const searchLucidworks = async (query, options = {}) => {
  try {
    const token = generateToken();
    const {
      start = 0,
      rows = 10,
      debug = false,
      debugQuery = false,
      indent = true,
      debugExplain = { structured: true }
    } = options;

    const response = await fetch(`${API_BASE_URL}?q=${encodeURIComponent(query)}&rows=${rows}&start=${start}&debug=${debug}&debugQuery=${debugQuery}&indent=${indent}&debug.explain.structured=${debugExplain.structured}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      results: data.response.docs.map(doc => ({
        id: doc.id,
        title: stripHtmlTags(doc.title),
        description: stripHtmlTags(doc.snippet),
        documentType: doc.facet_content_type?.[0] || 'Unknown',
        lastUpdated: doc.nyl_published_date || doc.published_at,
        url: doc.uri,
        metadata: {
          author: 'NYL Team',
          version: '1.0',
          status: 'Active',
          category: doc.category?.[0],
          mimeType: doc.mime_type,
          score: doc.score
        }
      })),
      totalResults: data.response.numFound,
      maxScore: data.response.maxScore,
      debugInfo: data.debug
    };
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
};

// Helper function to strip HTML tags
const stripHtmlTags = (str) => {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '');
}; 