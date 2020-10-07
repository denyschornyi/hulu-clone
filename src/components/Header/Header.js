import React from 'react';
import { NavLink } from "react-router-dom";
import  './Header.css'

import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        //BEM naming convention class
        <div className="header">
            <div className="header__icons">

                
                    <NavLink exact to='/' className="header__icon" activeClassName="header__icon--active">
                        <HomeIcon/>
                        <p>Home</p>
                    </NavLink>
                
                    <NavLink to='/trending' className="header__icon" activeClassName="header__icon--active">
                        <FlashOnIcon/>
                        <p>Trending</p>
                    </NavLink>
                
                    <NavLink to="/verified" className="header__icon" activeClassName="header__icon--active">
                        <LiveTvIcon/>
                        <p>Verified</p>
                    </NavLink>

                    <NavLink to='/collections' className="header__icon" activeClassName="header__icon--active">
                        <VideoLibraryIcon/>
                        <p>Collections</p>
                    </NavLink>

                    <NavLink to='/search' className="header__icon" activeClassName="header__icon--active">
                        <SearchIcon/>
                        <p>Search</p>
                    </NavLink>
                
                    <NavLink to='/account' className="header__icon" activeClassName="header__icon--active">
                        <PersonOutlineIcon/>
                        <p>Account</p>
                    </NavLink>
                
            </div>
            <img
                src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
                alt="Hulu Logo"
            />
        </div>
    )
}

export default Header
