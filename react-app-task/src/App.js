import './App.css';
import MainContext from "./context/MainContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import AllPostsPage from './pages/allPostsPage';
import PostForm from './components/PostForm';
import SinglePost from './components/SinglePost';

function App() {

    return (

        <MainContext.Provider value={{}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={< Login />} />
                    <Route path="/profile" element={< Profile />} />
                    <Route path="/posts" element={<AllPostsPage/>}/>
                    <Route path="/singlePost" element={<SinglePost/>}/>
                </Routes>
            </BrowserRouter>
        </MainContext.Provider>

    );
}

export default App;

