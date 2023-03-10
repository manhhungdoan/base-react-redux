import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteQuizByAdmin } from '../../../../services/apiServices';

const ModalDeleteQuiz = (props) => {
    const { show, setShow, deleteQuizData, fectListQuizzes } = props;
    const handleClose = () => setShow(false);
    const handleSubmitDeleteQuiz = async (deleteQuizData) => {
        let res = await deleteQuizByAdmin(+deleteQuizData);
        if (res && res.EC === 0) {
            toast.success(res.EM)
            handleClose();
            await fectListQuizzes();
        }
        else {
            toast.error(res.EM)
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop={'static'}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Comfirm Delete Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitDeleteQuiz(deleteQuizData)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteQuiz;