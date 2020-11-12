const API_URL = `https://fakestoreapi.com/products`;

export function getProducts(itemsLimit) {
  return fetch(`${API_URL}?limit=${itemsLimit}`)
    .then(response => response.json());
}
