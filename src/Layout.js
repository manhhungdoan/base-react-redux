import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import DashBoard from './components/Admin/Content/DashBoard';
import ManageUser from './components/Admin/Content/ManageUser';
import Login from './components/Admin/Auth/Login';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Signup from './components/Admin/Auth/Signup';
import ListQuiz from './components/User/ListQuiz';
import DetailQuiz from './components/User/DetailQuiz';
import ManageQuiz from './components/Admin/Content/Quiz/ManageQuiz';
const NotFound = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div class="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path='users' element={<ListQuiz />}></Route>
                </Route>
                <Route path='quiz/:id' element={<DetailQuiz />}></Route>
                <Route path='/admin' element={<Admin />}>
                    <Route index element={<DashBoard />}></Route>
                    <Route path='manage-user' element={<ManageUser />}></Route>
                    <Route path='manage-quizzes' element={<ManageQuiz />}></Route>
                </Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </>
    )
}
export default Layout;