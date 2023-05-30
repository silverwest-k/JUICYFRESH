import {Button} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

function ModalComponent({isOpen, closeModal}) {

    return(
        <>
            <div className="modal show"
                style={{
                    display: isOpen ? "block" : "none",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 800,
                    height: 500,
                    maxWidth: "100%",
                    maxHeight: "100%",
                    overflowY: "auto",
            }}
            >
                <Modal.Dialog>

                    <Modal.Header style={{background : "#ffea62"}}>
                        <Modal.Title>LOT</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>내용 들어가는 자리임, 데이터 넣어도됨</p>
                    </Modal.Body>

                    <Modal.Footer style={{background : "#ffea62"}}>
                        <Button className="modalButton" onClick={closeModal}>닫기</Button>
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        </>
    )
}

export default ModalComponent