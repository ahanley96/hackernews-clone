import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    
    return (

        <header id="news-header">
            <section>

                <b className="brand">
                    <NavLink to="/">Hacker News</NavLink>
                </b>

                <div className="nav">

                    <ul>

                        <li>
                            <NavLink to="/">New Stories</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Top Stories</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Best Stories</NavLink>
                        </li>

                    </ul>

                </div>

            </section>
            
        </header>

    )
}