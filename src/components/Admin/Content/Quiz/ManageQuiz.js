import Select from 'react-select';
import "./ManageQuiz.scss";
const ManageQuiz = (props) => {
    const options = [
        { value: 'EASY', label: 'Easy' },
        { value: 'MEDIUM', label: 'Medium' },
        { value: 'HARD', label: 'Hard' }
    ]
    return (
        <>
            <div className="manage-container">
                <div className="title">
                    Manage Quizzes
                </div>
                <div className="add-new">
                    <fieldset className="border rounded-3 p-3">
                        <legend className="float-none w-auto px-3">Add new Quiz:</legend>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingName" placeholder="Quiz name" />
                            <label for="floatingName">Quiz name</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingDes" placeholder="Description" />
                            <label for="floatingDes">Description</label>
                        </div>
                        <div className='my-3'>
                            <Select options={options}
                                placeholder="Difficulty"
                            />
                        </div>
                        <div>
                            <label className='mb-1'>Quiz Image:</label>
                            <input type="file" class="form-control" placeholder="Choose file" ></input>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-warning'>Save</button>
                        </div>
                    </fieldset>
                </div>
                <div className="list-detail">
                    table
                </div>

            </div >
        </>
    )
}
export default ManageQuiz;