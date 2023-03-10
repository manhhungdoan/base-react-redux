import { useEffect } from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import './ManageQuiz.scss'
import ModalDeleteQuiz from "./ModalDeleteQuiz";

const TableQuizzes = (props) => {
    const { listQuizzes, fectListQuizzes } = props;
    const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
    const [deleteQuizData, setDeleteQuizData] = useState("");
    const handleDeleteQuiz = (id) => {
        setShowModalDeleteQuiz(true);
        setDeleteQuizData(id);
    }
    return (
        <>
            <div>List Quizzes:</div>
            <Table striped bordered hover>
                <thead>
                    <tr>
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
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td className="text-center">{item.difficulty}</td>
                                <td className="d-flex gap-2 align-items-center justify-content-center">
                                    <button className="btn btn-warning">Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDeleteQuiz(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
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