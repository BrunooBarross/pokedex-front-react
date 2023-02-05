import { Link } from "react-router-dom";

import { caseFirstLetter } from "../../Utils/Functions"

import {
    Card,
    Imagem,
    Name,
    Types
} from "./styled"

const PokemonCard = ({ id, name, pokeImage, types, species, setHandlerListTeam, setPokeData }) => {
    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name[0].toUpperCase() + types[0].type.name.substring(1) + " | " + types[1].type.name[0].toUpperCase() + types[1].type.name.substring(1);
        }
        return types[0].type.name[0].toUpperCase() + types[0].type.name.substring(1)
    }

    const insertDataModal = () => {
        setPokeData({pokemonId: id, species: species})
        setHandlerListTeam(true);
    }

    return (
        <>
            <Card>
                <div onClick={() => insertDataModal()}><ion-icon name="add-circle"></ion-icon></div>
                <Link to={`/${id}/info`}>
                    <Imagem src={pokeImage} alt={`${name} image`} />
                </Link>
                <Types>{typeHandler()}</Types>
                <Name>{caseFirstLetter(name)}</Name>
            </Card>
        </>
    );
};

export default PokemonCard;