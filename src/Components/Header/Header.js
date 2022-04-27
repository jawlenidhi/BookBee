import { React, useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import data from '../../Data/staticTestData';

const Header = ({ isShow }) => {

    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="headerFile">
            <nav className="nav-bar">
                <Link to="/" style={{ textDecoration: 'none' }}><div className="logo">BookBee</div></Link>
                <ul className="nav-list">
                    <Link style={{ textDecoration: 'none' }} to="/read"><li className="nav-item">
                        EXPLORE
                    </li></Link>
                    <Link style={{ textDecoration: 'none' }} to="/about"><li className="nav-item">
                        ABOUT
                    </li></Link>
                    <Link style={{ textDecoration: 'none' }} to="/community"><li className="nav-item">
                        COMMUNITY
                    </li></Link>
                    <Link style={{ textDecoration: 'none' }} to="/search"><li className="nav-item">
                        SEARCH
                    </li></Link>

                </ul>
                <Link to="/signup"><button className="btn">Sign up</button></Link>
                <Link to="/signin"><button className="btn">Log in</button></Link>

            </nav>
            {isShow && <div className="nav-bar-2">
                <ul className="nav-list">
                    <Link to="/read" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            All Categories
                        </li>
                    </Link>
                    <Link to="/adventure" style={{ textDecoration: 'none' }}><li className="nav-item">
                        Adventure
                    </li></Link>
                    <Link to="/mystery" style={{ textDecoration: 'none' }}><li className="nav-item">
                        Mystery
                    </li></Link>
                    <Link to="/romance" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            Romance
                        </li>
                    </Link>
                    <Link to="/thriller" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            Thriller
                        </li>
                    </Link>

                </ul>
            </div>}
        </div>
    )
}

export default Header
