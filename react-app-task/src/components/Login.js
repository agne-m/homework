import {useRef, useState} from 'react';
import {post} from "../plugins/http";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef = useRef()
    const passRef = useRef()
    let navigate = useNavigate()

    const [msg, setMsg ] = useState("")

    async function login() {
        const user = {
            email: emailRef.current.value,
            password: passRef.current.value
        }

        const res = await post("login", user)

        if(!res.error) {
            console.log(res.message)
            setMsg(res.message)

            localStorage.setItem("secret", res.data.secret)
        }

        navigate('/profile');

        console.log(res)
    }

    return (
        <div>
            <h1>{msg}</h1>
            <input ref={emailRef} type="text" placeholder="email"/>
            <input ref={passRef} type="text" placeholder="password"/>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;

//1
// in user database schema add new key "photo" and "secret"
// on user registration, let user to add his photo url
// when user registers, you generate random string value and save it to "secret" key

// when user will login, we send "secret" to front end
// in front end we save "secret" to local storage
// secret needed for later requests validation (requests where user should be logged in to make them)

//2
// create route and controller where user can get his photo
// this photo can be retrieved only if user provides his "secret"
// user sends his secret to this route, you check if user exists by this secret
// find user by secret and return only his photo to front-end

//3
// using "secret" from localstorage, make login in front end,
// so user could retrieve his photo