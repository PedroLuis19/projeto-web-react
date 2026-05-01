import {useState} from 'react'

import './Login.css'

function Login() {

    const [userLogin, setUserLogin] = useState({email:'', password:''})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Logado:', userLogin);
    }

  return (
    <div className='login-container'>
        <h1>Login</h1>
        <form className='form-container' onSubmit={handleSubmit}>

            <input type='email' name='email' placeholder='Email' value={userLogin.email} onChange={handleChange} required></input>
            <br/>
            <input type='password' name='password' placeholder='Senha' value={userLogin.password} onChange={handleChange} required></input>
            <br/>
            <button type='submit' className='ghost-button'>Login</button>

        </form>
    </div>
  )
}

export default Login