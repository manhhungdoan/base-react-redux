import axios from '../ultils/axiosCustomize';
const postCreateUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data)
}

const getAllUsers = () => {
    return axios.get('api/v1/participant/all')
}
const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}
const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data)
}

const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } })
}

const postLogin = (userEmail, usePassword) => {
    return axios.post('/api/v1/login', { email: userEmail, password: usePassword, delay: 5000 })
}

const postSignup = (userEmail, userName, userPassword) => {
    return axios.post('/api/v1/register', { email: userEmail, username: userName, password: userPassword });
}

const getQuizByUser = () => {
    return axios.get('api/v1/quiz-by-participant');
}

const getDataQuiz = (quizId) => {
    return axios.get(`/api/v1/questions-by-quiz?quizId=${quizId}`);
}

const postSubmitQuiz = (data) => {
    return axios.post(`/api/v1/quiz-submit`, { ...data });
}

const postNewQuiz = (description, name, difficulty, image) => {
    const data = new FormData();
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);
    return axios.post('api/v1/quiz', data)
}

const getAllQuizByAdmin = () => {
    return axios.get(`/api/v1/quiz/all`);
}

const deleteQuizByAdmin = (id) => {
    return axios.delete(`/api/v1/quiz/${id}`);
}

const updateQuizByAdmin = (id, description, name, difficulty, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);
    return axios.put('api/v1/quiz', data)
}
export {
    postCreateUser,
    getAllUsers,
    putUpdateUser,
    deleteUser,
    getUserWithPaginate,
    postLogin,
    postSignup,
    getQuizByUser,
    getDataQuiz,
    postSubmitQuiz,
    postNewQuiz,
    getAllQuizByAdmin,
    deleteQuizByAdmin,
    updateQuizByAdmin
}