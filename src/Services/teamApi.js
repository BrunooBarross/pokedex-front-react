import api from './api';

export async function createTeam(token, titleTeam) {
    const response = await api.post('/team/create', { titleTeam }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}

export async function getTeams(token) {
    const response = await api.get('/team', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}

export async function deleteTeamById(token, id) {
    return await api.delete(`team/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export async function insertPokemonTeam(token, pokemonId, teamId, species) {
    return await api.post(`team/insert/pokemon`,
        {
            pokemonId,
            teamId,
            species
        }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}