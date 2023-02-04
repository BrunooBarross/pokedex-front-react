import { Link } from "react-router-dom";

import { caseFirstLetter } from "../../Utils/Functions"

import {
    Cards,
    Imagens,
    Names,
    Type
} from "./styled"

const PokeTeam = ({ id, name, pokeImage, types }) => {
    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name[0].toUpperCase() + types[0].type.name.substring(1) + " | " + types[1].type.name[0].toUpperCase() + types[1].type.name.substring(1);
        }
        return types[0].type.name[0].toUpperCase() + types[0].type.name.substring(1)
    }
    return (
        <Cards>
            <Link to={`/${id}/info`}>
                <Imagens src={pokeImage} alt={`${name} image`} />
            </Link>
            <Type>{typeHandler()}</Type>
            <Names>{caseFirstLetter(name)}</Names>
        </Cards>

    );
};

export default PokeTeam;