import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';


export const Header = () => {
    
    return (

        <div className="nav">

            <ul class className="links">
                
                <Link to="/">
                    <li id="home">Home</li>
                </Link>

                <Link to="/topstories">
                    <li id="top-stories">Top Stories</li>
                </Link>

                <Link to="/beststories">
                    <li id="best-stories">Best Stories</li>
                </Link>
            
            </ul>
           
        </div>

    )
          
}
       