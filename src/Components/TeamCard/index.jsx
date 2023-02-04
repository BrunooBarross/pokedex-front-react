import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteTeamById } from "../../Services/teamApi";
import axios from "axios";
import { useEffect, useState } from "react";

import PokeTeam from './PokeTeam';

import { Container, Section, Header, Notification } from "./styled";

const TeamCard = ({ token, reloadPage, setReloadPage, id, title, pokemons }) => {
    const navigate = useNavigate();
    const [pokemonsData, setPokemonsData] = useState([]);

    useEffect(() => {
        const getPokemons = () => {
            const endpoints = [];
            for (let i = 0; i < pokemons.length; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${pokemons[i].id}`)
            }

            axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
                .then((res) => setPokemonsData(res));
        }
        if (pokemons.length > 0) {
            getPokemons();
        }
    }, [pokemons]);

    const deleteTeam = async () => {
        try {
            await deleteTeamById(token, id);
            toast.success("Successfully Deleted");
            setReloadPage(!reloadPage);
        } catch (error) {
            toast.error("delete error, try again!");
        }
    }
    return (
        <Container>
            <Header>{title}
                <span>{pokemons.length}/6</span>
                <ion-icon name="trash-outline" onClick={() => deleteTeam()}></ion-icon>
            </Header>
            <Section>
                {
                    pokemonsData.length === 0 ? <Notification>You don't have pokemons in this team,
                        <span onClick={() => navigate('/home')}>click here</span> to browse between pokemons</Notification>
                        :
                        pokemonsData.map((pokemon, key) => (
                            <PokeTeam
                                key={key}
                                id={pokemon.data.id}
                                name={pokemon.data.name}
                                pokeImage={pokemon.data.sprites.front_default}
                                types={pokemon.data.types}
                            />
                        ))
                }
            </Section>
        </Container>
    );
};

export default TeamCard;