import { AUTH_ACCESS_TOKEN, AUTH_REFRESH_TOKEN } from '@kongd/constants';
import debounce from 'debounce';

import { parseJwtToken, tokenIsExpired } from './Token';

export * from './Token';

export function saveToken(token) {
  localStorage.setItem(AUTH_ACCESS_TOKEN, token);
}

export function saveRefreshToken(token) {
  localStorage.setItem(AUTH_REFRESH_TOKEN, token);
}

export function getAccessToken() {
  return localStorage.getItem(AUTH_ACCESS_TOKEN);
}

export function getRefreshToken() {
  return localStorage.getItem(AUTH_REFRESH_TOKEN);
}

export function logOut() {
  localStorage.removeItem(AUTH_ACCESS_TOKEN);
  localStorage.removeItem(AUTH_REFRESH_TOKEN);

  setTimeout(() => {
    console.log('navigate to logout');
    window.location.href = '/logout';
  }, 500);
}

export function loadLoginUser() {
  const token = localStorage.getItem(AUTH_ACCESS_TOKEN);

  if (token == null) {
    return null;
  }

  const tokenObject = parseJwtToken(token);
  return tokenObject;
}

export function refreshToken() {
  debounce(() => {
    const accessToken = localStorage.getItem(AUTH_ACCESS_TOKEN);
    const token = parseJwtToken(accessToken);

    if (tokenIsExpired(token)) {
      logOut();
    }
  }, 2000)();
}

// Table column settings
