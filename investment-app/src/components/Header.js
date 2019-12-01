import React from 'react';
import { NavLink } from 'react-router-dom'
import '../common/style.css';
import Search from 'antd/lib/input/Search';
import userImg from '../images/user.png';

let Header = (props) => {
    return(
        <div className='header-container'>
                 <div className='heading'>
                <img src={userImg} alt='user' style={{width:'25px', height:'25px'}}></img>
                    <div className='heading-left'><h2>LenDen</h2></div>
                    <div className='heading-right'>
                    <Search 
                        placeholder = "search"
                        className='search'
                        onSearch = {value => console.log(value)}
                        size = 'small'
                        style = {{width: 150, marginRight: '12px'}}
                    />
                    <h4>User</h4>
                    </div>
                    
                </div>
                <div className='header-head'>
                    <nav>
                        <ul>
                            <li ><NavLink to='/' exact activeClassName="selected">Dashboard</NavLink></li>
                            <li><NavLink to='/profile' activeClassName="selected">Profile</NavLink></li>
                            <li><NavLink to='/report' activeClassName="selected">Report</NavLink></li>
                            <li><NavLink to='/register' activeClassName="selected">Register</NavLink></li>
                            <li><NavLink to='/signin' activeClassName="selected">Sign In</NavLink></li>
                        </ul>
                    </nav>
                </div>
        </div>
    )
}

export default Header;