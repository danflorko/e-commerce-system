/* eslint-disable max-len */
// eslint-disable-next-line
const API_URL =
  'https://spiffy-chimera-5151e2.netlify.app/.netlify/functions/server';

export async function getAllProducts() {
  const response = await fetch(`${API_URL}/products`);

  return response.json();
}