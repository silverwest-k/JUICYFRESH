import {Button} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Table from "react-bootstrap/Table";

function ModalComponent({isOpen, closeModal, res}) {

    return(
        <>
            <div
                className="custom-modal"
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
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>
                                    LOT NO.
                                </th>
                            </tr>
                            </thead>

                            <tbody>
                            {res?.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{item}</td>
                                    </tr>
                                )
                            })
                            }
                            </tbody>
                        </Table>
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