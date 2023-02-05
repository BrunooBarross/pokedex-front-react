import Modal from 'react-modal';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createTeam } from "../../Services/teamApi";
import { toast } from 'react-toastify';
import { useContext } from "react";
import StateContext from "../../Contexts/StateContext"

import {
    DivModal,
    BtnDiv
} from "./styled"

const CreateTeamModal = ({ handlerModalTeam, setHandlerModalTeam }) => {
    const { reloadPage, setReloadPage } = useContext(StateContext);
    const { token } = JSON.parse(localStorage.getItem('userData'));
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const customStyles = {
        content: {
            width: '80%',
            height: '250px',
            top: '29%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    
    async function registerTeam(event) {
        event.preventDefault();
        try {
            await createTeam(token, title);
            setReloadPage(!reloadPage);
            toast.success("Team successfully added");
            setHandlerModalTeam(false);
            let pathname = window.location.pathname;
            setReloadPage()
            const finalUrl = pathname.slice(pathname.length - 4);
            if (finalUrl === "info"){
                return;
            }
            navigate('/teams');
        } catch (error) {
            if (error.response.status === 409) {
                toast.warning("Title is already in use");
            }

            if (error.response.status === 422) {
                toast.error("Error! Check the data");
            }
        }
    }

    return (
        <Modal
            isOpen={handlerModalTeam}
            style={customStyles}
            ariaHideApp={false}
        >
            <DivModal>
                <div className="modal-header">
                    <h5><ion-icon name="add-circle-outline"></ion-icon> Create new team</h5>
                    <ion-icon name="close" onClick={() => setHandlerModalTeam(false)}></ion-icon>
                </div>
                <hr />
                <form onSubmit={registerTeam}>
                    <input type="text" placeholder="Enter team name" minLength={4} maxLength={20}
                        onChange={e => setTitle(e.target.value)} required />
                    <hr />
                    <BtnDiv>
                        <button type="submit" className="btn-submit">
                            Create
                        </button>
                        <button type="button" className="btn-close" onClick={() => setHandlerModalTeam(false)}>
                            Close
                        </button>
                    </BtnDiv>
                </form>
            </DivModal>
        </Modal>
    );
}

export default CreateTeamModal;