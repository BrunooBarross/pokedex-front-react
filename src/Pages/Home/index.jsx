import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import PokemonCard from "../../Components/PokemonCard";

import {
    Container,
    Main,
    CardsGrid,
    Search
} from "./styled"

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const getPokemons = () => {
            const endpoints = [];
            for (let i = 1; i < 250; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
            }

            axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
                .then((res) => setPokemons(res));
        }
        getPokemons();
    }, [reload]);
    
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

    return (
        <Container>
            <Header />
            <Search>
                <input type="text" name="search" placeholder=" Search.." 
                    onChange={(e) => pokemonsFilter(e.target.value)}/>
            </Search>
            <Main>
                <CardsGrid>
                    {pokemons.map((pokemon, key) => (
                        <PokemonCard
                            key={key}
                            id={pokemon.data.id}
                            name={pokemon.data.name}
                            pokeImage={pokemon.data.sprites.front_default}
                            types={pokemon.data.types}
                        />
                    ))}
                </CardsGrid>
            </Main>
        </Container>
    );
}

export default Home;