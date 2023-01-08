import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../resources/logos/logo5.png'
import profileImg from '../../resources/profileImg/Pro.jpg'
import logoOriginal from '../../resources/logos/university.png'
import { createContext } from 'react';


import ReactSwitch from "react-switch";


export const ThemeContext = createContext(null);


const Sidebar = () => {
  const [show, setShow] = useState(false);


  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className={show ? 'space-toggle' : null} id={theme}>
        <header className={`header header2 ${show ? 'space-toggle' : null}`}>
          <div className='header-toggle d-flex align-items-center'>
            <i onClick={() => setShow(!show)} className={`fas  header-toggle fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
            <NavLink to='/result'><img className='profile-img' src={profileImg} alt="" /></NavLink>
          </div>
          <img className='logo' src={logo} alt="" />
        </header>

        <aside className={`sidebar ${show ? 'show' : null}`}>
          <nav className='nav'>
            <div className='nav2'>
              {/* <NavLink to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Homepage</span>
            </NavLink> */}

              <h1 className='ms-3 mt-3 title'>Class<span>.</span></h1>

              <div className='d-flex align-items-center mt-3 mb-4 ms-3'>
                <img className='logo-original' src={logoOriginal} alt="" />
                <p className='site-name'>Smart Student <br /><span>Portal</span></p>
              </div>

              <div className='nav-list'>
                <NavLink to='/' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                  <i className='fas fa-tachometer-alt nav-link-icon'></i>
                  <span className='nav-link-name'>Dashboard</span>
                </NavLink>
                <NavLink to='/profile' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                  <i className='fa-solid fa-user nav-link-icon'></i>
                  <span className='nav-link-name'>Profile</span>
                </NavLink>
                <NavLink to='/transactions' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                  <i className='fas fa-dollar-sign nav-link-icon'></i>
                  <span className='nav-link-name'>Transactions</span>
                </NavLink>
                <NavLink to='/registration' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                  <i className='fa-solid fa-id-card nav-link-icon'></i>
                  <span className='nav-link-name'>Registration</span>
                </NavLink>
                <NavLink to='/courses' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                  <i className='fa-solid fa-book-open-reader nav-link-icon'></i>
                  <span className='nav-link-name'>Courses</span>
                </NavLink>
                <NavLink to='/drop-semester' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                  <i className='fa-solid fa-school-circle-xmark nav-link-icon'></i>
                  <span className='nav-link-name'>Drop Semester</span>
                </NavLink>
                <NavLink to='/course-result' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                  <i className='fa-solid fa-square-poll-vertical nav-link-icon'></i>
                  <span className='nav-link-name'>Course Result</span>
                </NavLink>
                <NavLink to='/result' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                  <i className='fa-solid fa-square-poll-horizontal nav-link-icon'></i>
                  <span className='nav-link-name'>Semester Result</span>
                </NavLink>
                <NavLink to='/routine' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                  <i className='fa-solid fa-calendar-days nav-link-icon'></i>
                  <span className='nav-link-name'>Routine</span>
                </NavLink>
                {/* <div className="switch">
                  <label> {theme === "dark" ? "Dark Mode" : "Light Mode"}</label>
                  <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
                </div>
                <p className='hola'>Checking</p> */}
                <NavLink to='/notices' className={({ isActive }) => (isActive ? "active-link nav-link nav-last-one" : "link nav-link nav-last-one")}>
                  <i className='fa-solid fa-circle-exclamation nav-link-icon'></i>
                  <span className='nav-link-name'>Notices</span>
                </NavLink>
              </div>
            </div>

            <NavLink to='/logout' className={({ isActive }) => (isActive ? "active-link nav-link nav-link-logout" : "link nav-link nav-link-logout")}>
              <i className='fas fa-sign-out nav-link-icon'></i>
              <span className='nav-link-name'>Logout</span>
            </NavLink>
          </nav>
        </aside>
      </main >

    </ThemeContext.Provider>
  );
};

export default Sidebar;
