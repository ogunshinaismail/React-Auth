import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import '../css/login.css'
import LoginSvg from '../svg/login.svg'

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
        } catch (err) {
            setError(err.message)
        }
    }


    return (
        <div className='login'>
            <div className="container" id="container">
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Student Sign Up</h1>
                            <p>Make sure your account is secure</p>
                            <object data={LoginSvg} width="200" height="200"> </object>
                        </div>
                    </div>
                </div>

                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        {error && <p>{error}</p>}
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button>Sign Up</button>
                        <p>Already have an account? <span><Link to='/login'>Sign In</Link></span></p>
                    </form>
                </div>
            </div>
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

    // <h1>Sign Up</h1>
    // {error && <p>{error}</p>}
    // <form onSubmit={handleSubmit}>
    //     <label>Email</label>
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //     <label>Password</label>
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     <button>Submit</button>
    // </form>
    // <p>Already have an account <Link to='/login'>Sign In</Link></p>