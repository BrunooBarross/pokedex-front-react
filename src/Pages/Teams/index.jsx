import { getTeams } from "../../Services/teamApi";
import { useEffect, useState } from "react";
import { useContext } from "react";
import StateContext from "../../Contexts/StateContext";

import Header from "../../Components/Header";
import { toast } from 'react-toastify';
import TeamCard from "../../Components/TeamCard";
import { BallTriangle } from 'react-loader-spinner';

import { Container, Main, Label } from "./styled"
import { Loading } from '../Home/styled';


const Teams = () => {
    const { reloadPage, setReloadPage, setHandlerModalTeam } = useContext(StateContext);
    const { token } = JSON.parse(localStorage.getItem('userData'));
    const [dataTeams, setDataTeams] = useState(null);

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
    }, [token, reloadPage]);

    if (!token) {
        return (
            <></>
        );
    }

    if (dataTeams === null) {
        return (
            <Container>
                <Main>
                    <Header />
                    <Loading>
                        <span>
                            <BallTriangle
                                height={120}
                                width={120}
                                color="#451264"
                            />
                        </span>
                    </Loading>
                </Main>
            </Container>
        );
    }

    return (
        <Container>
            <Header />
            <Main>
                {dataTeams.length === 0 ?
                    <Label>You don't have teams, <span onClick={() => setHandlerModalTeam(true)}>click here</span> to add</Label>
                    :
                    <>
                        <button className="btn primary" onClick={() => setHandlerModalTeam(true)}>Add Team</button>
                        {
                            dataTeams.map((team, key) => (
                                <TeamCard
                                    key={key}
                                    token={token}
                                    reloadPage={reloadPage}
                                    setReloadPage={setReloadPage}
                                    id={team.id}
                                    title={team.titleTeam}
                                    pokemons={team.Pokemons}
                                />
                            ))
                        }
                    </>
                }
            </Main>
        </Container>
    );
}

export default Teams;