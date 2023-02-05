import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { insertPokemonTeam } from "../../Services/teamApi"

import {
    DivItem
} from "./styled"

const Item = ({ token, pokemonId, length, title, teamId, species, speciesTeam, loadPage, setLoadPage, setHandlerListTeam }) => {
    const navigate = useNavigate();
    const [hasSpecie, setHasSpecie] = useState(false);
   
    useEffect(() => {
        if (speciesTeam.length > 0) {
            for (let i = 0; i < speciesTeam.length; i++) {
                if (speciesTeam[i].species === species) {
                    setHasSpecie(true);
                }
            }
        }
    }, [speciesTeam, species, loadPage]);

    

    const insertPoke = async () => {
        if (hasSpecie) {
            return toast.warning(`Team already has ${species} specie`);
        }
        
        try {
            await insertPokemonTeam(token, pokemonId, teamId, species);
            toast('Successfully registered!');
            setTimeout(() => {
                let dialog = window.confirm('press "OK" to view teams page or "CANCEL" to continue adding');
                if(dialog){
                    setHandlerListTeam(false);
                    navigate('/teams');
                }
              }, "200")
              setLoadPage(!loadPage);   
        } catch (error) {
            toast.error('Failed to insert pokemon');
        }
    }

    return (
        <DivItem
            onClick={() => insertPoke()}
            length={length}
            hasSpecie={hasSpecie}
        >
            {title}
            <span>{length}/6</span>
        </DivItem>
    );
};

export default Item;