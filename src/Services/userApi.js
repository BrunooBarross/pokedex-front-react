import api from './api';

export async function signUp(data){
  const response = await api.post('/signup', data);
  return response.data;
}

export async function signIn(email, password) {
  const response = await api.post('/signin', { email, password });
  return response.data;
}