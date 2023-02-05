import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from "../../Components/Header";
import { toast } from 'react-toastify';
import PokemonInfo from '../../Components/PokemonInfo';

import { BallTriangle } from 'react-loader-spinner';
import { Container, Main } from "../Home/styled"
import { Loading } from '../Home/styled';

const Pokemon = () => {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    const { idPokemon } = useParams();
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        requisicao.then(response => {
            setPokemon(response.data);
        }).catch(() => { toast.error("No pokemon found!") });
    }, [idPokemon]);

    if (!token) {
        return (
            <></>
        );
    }

    return (
        <Container>
            <Header></Header>
            <Main>
                {
                    pokemon.length === 0 ?
                        <Loading>
                            <span>
                                <BallTriangle
                                    height={120}
                                    width={120}
                                    color="#451264"
                                />
                            </span>
                        </Loading> :
                        <PokemonInfo
                            id={pokemon.id}
                            name={pokemon.name}
                            pokemon={pokemon}
                        />
                }
            </Main>
        </Container>
    );
};

export default Pokemon;