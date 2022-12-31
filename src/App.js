import { Route, Routes } from 'react-router-dom';
import Result from './components/Result/Result';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/home';


function App() {
  return (


    <div>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/result' element={<Result></Result>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>


  )
}

export default App;
