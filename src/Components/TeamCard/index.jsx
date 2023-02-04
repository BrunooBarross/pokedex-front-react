import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteTeamById } from "../../Services/teamApi";

import { Container, Header, Notification } from "./styled";

const TeamCard = ({ token, reloadPage, setReloadPage, id, title, pokemons }) => {
    const navigate = useNavigate();

    const deleteTeam = async () => {
        try {
            await deleteTeamById(token, id);
            toast.success("Successfully Deleted");
            setReloadPage(!reloadPage);
        } catch (error) {
            toast.error("delete error, try again!");
        }
    }
    return (
        <Container>
            <Header>{title}
                <span>{pokemons.length}/6</span>
                <ion-icon name="trash-outline" onClick={() => deleteTeam()}></ion-icon>
            </Header>
            {
                pokemons.length === 0 ? <Notification>You don't have pokemons in this team,
                    <span onClick={() => navigate('/home')}>click here</span> to browse between pokemons</Notification>
                    : <></>
            }
        </Container>
    );
};

export default TeamCard;