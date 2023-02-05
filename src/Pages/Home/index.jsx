import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import PokemonCard from "../../Components/PokemonCard";
import { BallTriangle } from 'react-loader-spinner';


import { useContext } from "react";
import StateContext from "../../Contexts/StateContext"

import ListTeamsModal from "../../Components/ListTeamsModal";

import {
    Container,
    Main,
    CardsGrid,
    Search,
    Loading
} from "./styled"

const Home = () => {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    const [pokemons, setPokemons] = useState([]);
    const [reload, setReload] = useState(false);
    const [pokeData, setPokeData] = useState({ pokemonId: '', species: '' });
    const [viewLoadPage, setViewLoadingPage] = useState(true);

    const { handlerListTeam, setHandlerListTeam } = useContext(StateContext);

    useEffect(() => {
        const getPokemons = () => {
            const endpoints = [];
            for (let i = 1; i < 250; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
            }

            axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
                .then((res) => { insertData(res) });
        }
        getPokemons();
    }, [reload]);

    const insertData = (res) => {
        setPokemons(res);
        setViewLoadingPage(false);
    }

    const pokemonsFilter = (name) => {
        let filteredPokemons = [];
        if (name === "") {
            setReload(!reload)
        }
        for (let i in pokemons) {
            if (pokemons[i].data.name.includes(name.toLowerCase())) {
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons);
    }

    if (!token) {
        return (
            <></>
        );
    }

    return (
        <Container>
            <Header />
            <ListTeamsModal
                pokemonId={pokeData.pokemonId}
                handlerListTeam={handlerListTeam}
                setHandlerListTeam={setHandlerListTeam}
                species={pokeData.species}
            />
            {
                viewLoadPage ? <></> :
                    <Search>
                        <input type="text" name="search" placeholder=" Search.."
                            onChange={(e) => pokemonsFilter(e.target.value)} />
                    </Search>
            }
            <Main>
                {
                    viewLoadPage ? <Loading>
                        <span>
                            <BallTriangle
                                height={120}
                                width={120}
                                color="#451264"
                            />
                        </span>
                    </Loading>
                        :
                        <CardsGrid>
                            {pokemons.map((pokemon, key) => (
                                <PokemonCard
                                    key={key}
                                    id={pokemon.data.id}
                                    name={pokemon.data.name}
                                    pokeImage={pokemon.data.sprites.front_default}
                                    types={pokemon.data.types}
                                    species={pokemon.data.species.name}
                                    setPokeData={setPokeData}
                                    setHandlerListTeam={setHandlerListTeam}
                                />
                            ))}
                        </CardsGrid>
                }

            </Main>
        </Container>
    );
}

export default Home;