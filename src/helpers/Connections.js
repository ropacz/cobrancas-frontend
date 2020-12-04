const API_URL = `https://cubos-desafio-4.herokuapp.com`;

export async function requestApiWithoutToken(
  metodo,
  rota = "/",
  conteudo = null
) {
  const body = conteudo ? JSON.stringify(conteudo) : null;
  return fetch(API_URL + rota, {
    method: metodo,
    headers: {
      "content-type": "application/json",
    },
    body,
  });
}

export async function requestApiWithToken(
  metodo,
  rota = "/",
  conteudo = null,
  token = null
) {
  const body = conteudo ? JSON.stringify(conteudo) : null;
  return fetch(API_URL + rota, {
    method: metodo,
    headers: {
      "Content-Type": "application/json",
      Authorization: token && `Bearer ${token}`,
    },
    body,
  });
}
