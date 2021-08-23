import React from 'react'
import { LoginPage } from './styles'
import illustration from '../../assets/images/hero.svg'
import { FcGoogle } from "react-icons/fc";
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router';

export default function Index() {

    const {user, signInWithGoogle} = useAuth()
    const history = useHistory()

    async function handleLogin(){
        if(!user){
            await signInWithGoogle()
        }

        history.push("/dashboard")
    }

    return (
        <LoginPage>
            <div className="left">
                <h1>Organizer App</h1>
                <img src={illustration} alt="illustration completed tasks" />
            </div>

            <div className="right">
                <div>
                    <h2>Keep your life organized.</h2>
                    <p>Increase your productivity and focus.</p>
                    <button onClick={handleLogin}>
                        <FcGoogle />
                        Enter with your Google account
                    </button>
                </div>
            </div>
        </LoginPage>
    )
}
