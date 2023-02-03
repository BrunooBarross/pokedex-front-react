import api from './api';

export async function createTeam(token, titleTeam) {
    const response = await api.post('/team/create', { titleTeam }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}