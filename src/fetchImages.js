import axios from 'axios';
export async function fetchImages(name, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '33225264-b8aeda082b0ec3b834ba47e4c';
  const resp = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );
  return await resp.data;
}
