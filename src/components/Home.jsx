import React from 'react'
import heroImg from '../college-student.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
        <nav>
            <h1>LOGO</h1>
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
                <img src={heroImg} alt="hero" />
            </div>
        </section>
    </div>
  )
}

export default Home