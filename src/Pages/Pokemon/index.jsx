import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from "../../Components/Header";
import { toast } from 'react-toastify';
import PokemonInfo from '../../Components/PokemonInfo';

import { Container, Main } from "../Home/styled"

const Pokemon = () => {
    const { idPokemon } = useParams();
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        requisicao.then(response => {
            setPokemon(response.data);
        }).catch(() => { toast.error("No pokemon found!") });
    }, [idPokemon]);


    if (pokemon.length === 0) {
        return (<></>);
    }

    return (
        <Container>
            <Header></Header>
            <Main>
                <PokemonInfo
                    id={pokemon.id}
                    name={pokemon.name}
                    pokemon={pokemon}
                />
            </Main>
        </Container>
    );
};

export default Pokemon;