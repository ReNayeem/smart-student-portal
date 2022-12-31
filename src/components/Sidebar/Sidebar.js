import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../resources/logos/logo5.png'
import profileImg from '../../resources/profileImg/Pro.jpg'
import logoOriginal from '../../resources/logos/university.png'

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
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

            <div className='d-flex align-items-center mt-5 mb-4 ms-3'>
              <img className='logo-original' src={logoOriginal} alt="" />
              <p className='site-name'>Smart Student <br /><span>Portal</span></p>
            </div>

            <div className='nav-list'>
              <NavLink to='/dashboard' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </NavLink>
              <NavLink to='/result' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Live Result</span>
              </NavLink>
              <NavLink to='/gallery' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>Gallery</span>
              </NavLink>
              <NavLink to='/transaction' className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")}>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Transaction</span>
              </NavLink>
              <NavLink>
                {/* <p className='pb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente adipisci mollitia at vel officia quos eaque maiores, soluta labore, tempore, exercitationem reprehenderit! Ducimus nesciunt ad tempore alias exercitationem inventore quae quis, dolorum repudiandae dolore dignissimos, accusamus quod fugiat unde nihil at dolorem dicta totam doloremque autem cupiditate? Magnam aut necessitatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, libero! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus blanditiis veritatis quaerat quos quod minima sunt neque quam, soluta ab eius voluptates est corporis iure corrupti aspernatur consequuntur hic odit? Excepturi dolor rerum inventore nostrum porro vero exercitationem sapiente ad, cum hic autem, illum laboriosam eos maxime consequuntur laborum recusandae totam. Atque, accusamus. Rem, labore unde itaque sint illum ducimus, nam aspernatur natus aliquam optio adipisci eius beatae recusandae illo, velit sit? Nesciunt officia voluptatem temporibus impedit voluptas sunt facere tempore provident recusandae, deserunt tenetur quo, asperiores aliquam, quas non illo necessitatibus itaque quis suscipit sed quos? Suscipit, voluptate voluptates?</p> */}
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
  );
};

export default Sidebar;
