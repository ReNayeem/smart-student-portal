import { Route, Routes } from 'react-router-dom';
import Result from './components/Result/Result';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/home';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/profile';
import Footer from './components/Footer/footer';
import './App.css'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (


    <div className='App'>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>


          <Route path='/result' element={<Result></Result>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>


  )
}

export default App;
