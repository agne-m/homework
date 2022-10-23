import {useRef} from 'react';
import {post} from "../plugins/http";

const Register = () => {
    const emailRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()


    async function register() {
        const user = {
            email: emailRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value,
        }

        const data = await post('register', user)


        console.log(data)
    }


    return (
        <div>
            <input ref={emailRef} type="text" placeholder="email"/>
            <input ref={passOneRef} type="text" placeholder="pass one"/>
            <input ref={passTwoRef} type="text" placeholder="pass two"/>
            <button onClick={register}>Register</button>
        </div>
    );
};

export default Register;