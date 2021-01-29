export async function postData(path, body) {
  const url = `${process.env.REACT_APP_SERVER_URL}/${path}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.status >= 200 && response.status <= 208) {
    return Promise.resolve({ success: true });
  }

  return Promise.reject({ error: 'Ha ocurrido un error. Intenta de nuevo más tarde.' });
}
