let baseUrl;
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3001/api/';
}
export const BASE_URL = baseUrl;
