import {
    Card,
    Imagem,
    Name,
    Types
} from "./styled"

const PokemonCard = ({ name, pokeImage, types }) => {
    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name[0].toUpperCase() + types[0].type.name.substring(1) + " | " + types[1].type.name[0].toUpperCase() + types[1].type.name.substring(1);
        }
        return types[0].type.name[0].toUpperCase() + types[0].type.name.substring(1)
    }
    return (
        <Card>
            <Imagem src={pokeImage} alt={`${name} image`} />
            <Types>{typeHandler()}</Types>
            <Name>{name[0].toUpperCase() + name.substring(1)}</Name>
        </Card>

    );
};

export default PokemonCard;