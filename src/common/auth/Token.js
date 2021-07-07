export function parseJwtToken(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  const tokenObject = JSON.parse(jsonPayload);

  return {
    ...tokenObject,
    lastName: tokenObject.email,
  };
}

export function tokenIsExpired(token) {
  return token.exp && token.exp <= Date.now() / 1000;
}
