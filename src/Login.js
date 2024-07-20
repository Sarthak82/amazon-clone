import React ,{ useState }  from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const navigate = useNavigate()
;
    const [email,setEmail] =useState();
    const [password,setPassword] =useState()


    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth)=>{
            if(auth){
                navigate('/')
            }
        }).catch(error=>alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                navigate('/')
            }
        }).catch(error=>alert(error.message))
    }
    
    return (
    <div className='login'>
        <Link to='/'>
            <img 
                className="login__logo"
                src='https://cdn.logojoy.com/wp-content/uploads/20230629132639/current-logo-600x338.png' alt="logo"/>
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                
                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                <p>
                    By signing-in you agree to Amazon's CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our
                </p>

                <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
            </form>
        </div>
    </div>
    )
    }

export default Login