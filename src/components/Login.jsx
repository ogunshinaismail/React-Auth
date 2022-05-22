import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import '../css/login.css'
import LoginSvg from '../svg/login.svg'
import GoogleImg from '../svg/google.png'

export const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  let { logIn, googleSignIn, user } = useUserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn(email, password);
      navigate('/admin/dashboard')
      console.log(user);
    } catch (err) {
      setError(err.message)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn();
      navigate('/admin/dashboard');
      console.log(user);
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className='login'>
      <div className="container">
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Student Login</h1>
              <p>Make sure your account is secure</p>
              <object data={LoginSvg} width="200" height="200"> </object>
            </div>
          </div>
        </div>

        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            {error && <p className='error'>{error}</p>}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Sign In</button>
            <div className="social-container">
              <p>Or sign in with</p>
              <img src={GoogleImg} onClick={handleGoogleSignIn} alt='google-sign-in' width='30' height='30' className='google-icon'/>
            </div>
            <p>Don't have an account? <span><Link to='/sign-up'>Sign Up</Link></span></p>
          </form>
        </div>
      </div>

    </div>
  )
}

// <h1>Login</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <label>Password</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button>Submit</button>
//         <button onClick={handleGoogleSignIn}>Sign In with Google</button>
//       </form>
//       <p>Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>