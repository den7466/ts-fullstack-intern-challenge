import { config } from '../config';
import { TLike } from '../types/types';

const handleResponse = (response: Response): Promise<any> => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
};

export async function getImages(page: number = 0, limit: number = 10) {
  return await fetch(`${config.imageApiBaseUrl}/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=${page.toString()}&limit=${limit.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': config.imageApiKey,
    }
  }).then(handleResponse);
}

export async function getLikes() {
  return await fetch(`${config.likesApiBaseUrl}/likes`).then(handleResponse);
}

export async function addLike(data: TLike) {
  return await fetch(`${config.likesApiBaseUrl}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cat_id: data.cat_id, created_at: data.created_at }),
  }).then(handleResponse);
}

export async function deleteLikeById(id: string) {
  return await fetch(`${config.likesApiBaseUrl}/likes/${id}`, {
    method: 'DELETE',
  }).then(handleResponse);
}