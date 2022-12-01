import { Route, Routes } from 'react-router-dom';
import Result from './components/Result/Result';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (


    <div>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/result' element={<Result></Result>}></Route>
      </Routes>
    </div>


  )
}

export default App;
