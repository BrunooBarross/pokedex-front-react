import api from './api';

export async function signUp(data){
  const response = await api.post('/signup', data);
  return response.data;
}