import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            <main style={{ padding: "1rem" }}>
                <p>Not Fond</p>
                <p>Go back to home page <span><Link to='/React-Auth'>Here</Link></span></p>
            </main>
        </div>
    )
}
