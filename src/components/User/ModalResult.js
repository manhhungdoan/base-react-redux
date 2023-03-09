import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalResult = (props) => {
    const { show, setShow, dataModalResult } = props;
    console.log("check dataModal:", dataModalResult)
    const handleClose = () => setShow(false);
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop={'static'}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Your Result</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Result: <b>{dataModalResult.countCorrect}/{dataModalResult.countTotal}</b></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Show Answer
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalResult;