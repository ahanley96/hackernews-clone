import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';


export const Header = () => {
    
    return (

        <div className="nav">

            <Link to="/">
                <a href="#" className="link">Home</a>
            </Link>

            <Link to="/topstories">
                <a href="#" className="link">Top Stories</a>
            </Link>

            <Link to="/beststories">
                <a href="#" className="link">Best Stories</a>
            </Link>
            
        </div>

    )
          
}
       