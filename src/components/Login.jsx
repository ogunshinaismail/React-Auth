import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

export const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { logIn, googleSignIn } = useUserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
        await logIn(email, password);
        navigate('/dashboard')
    }catch(err) {
        setError(err.message)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn();
      navigate('/dashboard')
    }catch(err) {
        setError(err.message)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Submit</button>
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      </form>
      <p>Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>

    </div>
  )
}

  // const clearInput = () => {
  //   setEmail('')
  //   setPassword('')
  // }

  // const handleLogin = () => {
  //   clearInput()
  //   app
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }