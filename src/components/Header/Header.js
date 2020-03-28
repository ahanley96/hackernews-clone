import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    
    return (

       

        <nav>

            <b className="brand">
                <h3>Hackernews</h3>
            </b>

            <div>

                <ul className="nav-links">

                    <Link to="/">
                        <li>
                            Home
                        </li>
                    </Link>
                   <Link to="/topstories">
                        <li>
                            Top Stories
                        </li>
                    </Link>
                    <Link to="/beststories">
                        <li>
                            Best Stories
                        </li>
                    </Link>

                </ul>

            </div>

        </nav>
            


    )
}