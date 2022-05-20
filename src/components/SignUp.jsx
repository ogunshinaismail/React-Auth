import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const SignUp = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { signUp } = useUserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signUp(email, password);
            navigate('/login')
        }catch(err) {
            setError(err.message)
        }
    }
   

    return (
        <div>
            <h1>Sign Up</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Submit</button>
            </form>
            <p>Already have an account <Link to='/login'>Sign In</Link></p>
        </div>
    )
}

export default SignUp

// <button disabled={loading} onClick={handleSignup}>Submit</button>
 // const clearInput = () => {
    //     setEmail('')
    //     setPassword('')
    // }

    // async function handleSignup() {
    //     setLoading(true)
    //     try {
    //         await signup(email, password);
    //         navigate('./admin/dashboard')
    //     } catch {
    //         alert("Error!")
    //     }
    //     setLoading(false)
    // }