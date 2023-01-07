import { Route, Routes } from 'react-router-dom';
import Result from './components/Result/Result';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/home';
import Dashboard from './components/Dashboard/dashboard';
import Profile from './components/Profile/profile';
import Footer from './components/Footer/footer';
import './App.css'

function App() {
  return (


    <div className='App'>
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
