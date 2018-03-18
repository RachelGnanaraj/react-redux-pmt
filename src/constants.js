export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const storageKeyPrefix = process.env.REACT_APP_STORAGE_KEY_PREFIX;
export const apiBase = process.env.REACT_APP_API_BASE;
export const ravenUrl = process.env.REACT_APP_RAVEN_URL;
export const promiseTypeSuffixes = ['START', 'ERROR', 'SUCCESS'];
