const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const setAccessToken = (Token) =>
  localStorage.setItem(ACCESS_TOKEN, Token);

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
