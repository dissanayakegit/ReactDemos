import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <ul className="nav-bar">
                <Link to="/states">
                    <li>States</li>
                </Link>
                <Link to="rest-api">
                    <li>RestApi</li>
                </Link>
                <Link to="/to-dos">
                    <li>ToDos</li>
                </Link>
            </ul>

        </div>
    )
}

export default Nav
