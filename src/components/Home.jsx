import React from 'react'
import { Link } from 'react-router-dom'
import Teacher from '../svg/teacher.svg'

const Home = () => {
  return (
    <div className="home">
        <nav>
            <h1>KODE<span className='logo-pink'>CAMP</span></h1>
            <Link to='/login'>
                <button className='login-btn'>Login</button>
            </Link>
        </nav>
        <section className="hero">
            <div className="hero-left">
                <h1><span className='first-word'>Learn</span> on your class <span className='last-word'>schedule</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam blanditiis maiores illum odit. Eius ex sit facere odit et eligendi at cumque. Odio?</p>
            </div>
            <div className="hero-right">
                <object data={Teacher} width="400" height="400"> </object>
            </div>
        </section>
    </div>
  )
}

export default Home

// <img src={heroImg} alt="hero" />