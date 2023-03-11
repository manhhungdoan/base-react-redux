import { useState } from "react";
import Table from 'react-bootstrap/Table';
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";

const TableQuizzes = (props) => {
    const { listQuizzes, fectListQuizzes } = props;
    const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
    const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
    const [deleteQuizData, setDeleteQuizData] = useState("");
    const [updateQuizData, setUpdateQuizData] = useState({});
    const handleDeleteQuiz = (id) => {
        setShowModalDeleteQuiz(true);
        setDeleteQuizData(id);
    }
    const handleUpdateQuiz = (item) => {
        setShowModalUpdateQuiz(true);
        setUpdateQuizData(item);
    }
    return (
        <>
            <div>List Quizzes:</div>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Quiz Name</th>
                        <th>Difficulty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuizzes && listQuizzes.map((item, index) => {
                        return (
                            <tr key={`quiz-${item.id}`}>
                                <td style={{ verticalAlign: "baseline", textAlign: "center" }}>{index + 1}</td>
                                <td style={{ verticalAlign: "baseline" }}>{item.name}</td>
                                <td style={{ verticalAlign: "baseline" }} className="text-center">{item.difficulty}</td>
                                <td className="d-flex gap-2 align-items-center justify-content-center">
                                    <button className="btn btn-warning col-4 col-md-4" onClick={() => handleUpdateQuiz(item)}>Edit</button>
                                    <button className="btn btn-danger col-6 col-md-6 col-xl-4" onClick={() => handleDeleteQuiz(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <ModalUpdateQuiz
                show={showModalUpdateQuiz}
                setShow={setShowModalUpdateQuiz}
                updateQuizData={updateQuizData}
                fectListQuizzes={fectListQuizzes}
            />
            <ModalDeleteQuiz
                show={showModalDeleteQuiz}
                setShow={setShowModalDeleteQuiz}
                deleteQuizData={deleteQuizData}
                fectListQuizzes={fectListQuizzes}
            />
        </>
    )
}
export default TableQuizzes;