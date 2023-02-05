import { useNavigate } from 'react-router-dom';
import ChartStats from './ChartStats';
import axios from 'axios';
import { useEffect, useState } from "react";
import ListTeamsModal from "../ListTeamsModal";
import { useContext } from "react";
import StateContext from "../../Contexts/StateContext"

import { convertNumber, converHeight, converWeight, caseFirstLetter } from "../../Utils/Functions"

import {
    Title,
    Section,
    Div,
    CaretBack,
    TableInfo,
    SectionRight,
    Type,
    Text
} from "./styled"

const PokemonInfo = ({ id, name, pokemon }) => {
    const navigate = useNavigate();
    const { handlerListTeam, setHandlerListTeam } = useContext(StateContext);
    const [text, setText] = useState("Carregando...");

    useEffect(() => {
        const requisicao = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        requisicao.then(response => {
            setText(response.data.flavor_text_entries[9].flavor_text);
        })
    }, [id]);

    const typeHandler = (types) => {
        if (types[1]) {
            return types[0].type.name[0].toUpperCase() + types[0].type.name.substring(1) + " | " + types[1].type.name[0].toUpperCase() + types[1].type.name.substring(1);
        }
        return types[0].type.name[0].toUpperCase() + types[0].type.name.substring(1)
    }

    return (
        <>
            <ListTeamsModal
                pokemonId={id}
                handlerListTeam={handlerListTeam}
                setHandlerListTeam={setHandlerListTeam}
                species={pokemon.species.name}
            />
            <Title>{name[0].toUpperCase() + name.substring(1)} <span>N° {convertNumber(id)}</span></Title>
            <Section>
                <Div>
                    <CaretBack number={id} onClick={() => { navigate(`/${id - 1}/info`) }}>
                        <ion-icon name="caret-back-circle"></ion-icon>
                    </CaretBack>
                    <div className="caret-forward-circle" onClick={() => { navigate(`/${id + 1}/info`) }}>
                        <ion-icon name="caret-forward-circle"></ion-icon>
                    </div>
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${convertNumber(id)}.png`} alt={`${name}`} />
                </Div>
                <SectionRight>
                    <Text>{text}</Text>
                    <button onClick={() => setHandlerListTeam(true)}>Add Pokemon</button>
                    <TableInfo>
                        <div className='column'>
                            <h3>Height</h3>
                            <h4> {converHeight(pokemon.height.toString())}</h4>
                            <h3>Weight</h3>
                            <h4>{converWeight(pokemon.weight.toString())}</h4>
                            <h3>Gender</h3>
                            <h4><ion-icon name="male-outline"></ion-icon> <ion-icon name="female-outline"></ion-icon></h4>
                        </div>
                        <div className='column'>
                            <h3>Abilities</h3>
                            <h4>{caseFirstLetter(pokemon.abilities[0].ability.name)}</h4>
                            <h3>Specie</h3>
                            <h4>{caseFirstLetter(pokemon.species.name)}</h4>
                        </div>
                    </TableInfo>
                    <span className='type'>Type</span>
                    <Type>
                        <h3>{typeHandler(pokemon.types)}</h3>
                    </Type>
                </SectionRight>
                <div className='divChart'>
                    <ChartStats
                        name={name}
                        hp={pokemon.stats[0].base_stat}
                        attack={pokemon.stats[1].base_stat}
                        defense={pokemon.stats[2].base_stat}
                        specialA={pokemon.stats[3].base_stat}
                        specialD={pokemon.stats[4].base_stat}
                        speed={pokemon.stats[5].base_stat}
                    />
                </div>
            </Section>
        </>

    );

}

export default PokemonInfo;

