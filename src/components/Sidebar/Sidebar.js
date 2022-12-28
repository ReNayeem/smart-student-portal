import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import logo from '../../resources/logos/logo5.png'
import profileImg from '../../resources/profileImg/Pro.jpg'

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle d-flex align-items-center'>
          <i onClick={() => setShow(!show)} className={`fas text-white header-toggle fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
          <Link to='/result'><img className='profile-img' src={profileImg} alt="" /></Link>
        </div>
        <img className='logo' src={logo} alt="" />
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Homepage</span>
            </Link>

            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/result' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Live Result</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>Gallery</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Transaction</span>
              </Link>
              <Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente adipisci mollitia at vel officia quos eaque maiores, soluta labore, tempore, exercitationem reprehenderit! Ducimus nesciunt ad tempore alias exercitationem inventore quae quis, dolorum repudiandae dolore dignissimos, accusamus quod fugiat unde nihil at dolorem dicta totam doloremque autem cupiditate? Magnam aut necessitatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, libero! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus blanditiis veritatis quaerat quos quod minima sunt neque quam, soluta ab eius voluptates est corporis iure corrupti aspernatur consequuntur hic odit? Excepturi dolor rerum inventore nostrum porro vero exercitationem sapiente ad, cum hic autem, illum laboriosam eos maxime consequuntur laborum recusandae totam. Atque, accusamus. Rem, labore unde itaque sint illum ducimus, nam aspernatur natus aliquam optio adipisci eius beatae recusandae illo, velit sit? Nesciunt officia voluptatem temporibus impedit voluptas sunt facere tempore provident recusandae, deserunt tenetur quo, asperiores aliquam, quas non illo necessitatibus itaque quis suscipit sed quos? Suscipit, voluptate voluptates?</p>
              </Link>
            </div>
          </div>

          <Link to='/logout' className='nav-link nav-link-logout'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
    </main >
  );
};

export default Sidebar;
