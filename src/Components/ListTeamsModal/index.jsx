import Modal from 'react-modal';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { getTeams } from "../../Services/teamApi";

import CreateTeamModal from "../CreateTeamModal";
import { useContext } from "react";
import StateContext from "../../Contexts/StateContext";

import Item from './Item';

import { Section, Div, NoTeam } from './styled';

const ListTeamsModal = ({ pokemonId, handlerListTeam, setHandlerListTeam, species }) => {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    const [dataTeams, setDataTeams] = useState(null);
    const { handlerModalTeam, setHandlerModalTeam, reloadPage } = useContext(StateContext);
    const [loadPage, setLoadPage] = useState(false);

    useEffect(() => {
        const teams = async () => {
            try {
                setDataTeams(null)
                const response = await getTeams(token);
                setDataTeams(response);
            } catch (error) {
                toast.warning("Failed to search for teams");
            }
        }
        teams();
    }, [token, loadPage, reloadPage]);
    
    const customStyles = {
        content: {
            height: '80%',
            top: '55%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    if (dataTeams === null) {
        return (
            <></>
        );
    }

    return (
        <Modal
            isOpen={handlerListTeam}
            style={customStyles}
            ariaHideApp={false}
        >
            <CreateTeamModal handlerModalTeam={handlerModalTeam} setHandlerModalTeam={setHandlerModalTeam}></CreateTeamModal>
            <Section>
                <div className="close-icon" onClick={() => setHandlerListTeam(false)}>
                    <ion-icon name="close-outline" />
                </div>
                <h1>Your Teams</h1>
                {
                    dataTeams.length === 0 ?

                        <NoTeam>You do not have any team <span onClick={() => setHandlerModalTeam(true)}>click here</span> to add</NoTeam> :

                        <Div>
                            {
                                dataTeams.map((team, key) => (
                                    <Item
                                        key={key}
                                        token={token}
                                        pokemonId={pokemonId}
                                        length={team.Pokemons.length}
                                        title={team.titleTeam}
                                        teamId={team.id}
                                        species={species}
                                        speciesTeam={team.Pokemons}
                                        loadPage={loadPage} 
                                        setLoadPage={setLoadPage}
                                        setHandlerListTeam={setHandlerListTeam}
                                    />
                                ))
                            }
                        </Div>
                }
            </Section>
        </Modal>
    );
}

export default ListTeamsModal;