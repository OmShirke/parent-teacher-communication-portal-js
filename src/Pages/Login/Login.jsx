import './styles.css'
import { useEffect, useState } from 'react';
import {auth} from "../../config/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function Login() {
    const [currentUser, setCurrentUser] = useState()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userLogIn = async() => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    
    return unSubscribe 
    },[])

    })
    return (
        <div className="container" id="container">
            <div className={`form-container sign-in`}>
                <div className='form'>
                    <h1>Sign In</h1>
                    <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email or Enrollment ID" />
                    <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" />
                    <button onClick={userLogIn}>Sign In</button>
                </div>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-right">
                        <h1>Hello User!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}