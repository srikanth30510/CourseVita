import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Personal from "./components/categories/Personal"
import Education from "./components/categories/Education"
import Experience from "./components/categories/Experience"
import Skills from "./components/categories/Skills"
import Projects from "./components/categories/Projects"
import Certificates from "./components/categories/Certificates"
import Achievements from "./components/categories/Achievements"
import Resume from './components/Resume'
import Logout from './components/Logout'
function App() {
  return (  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path ="/signup" element={<Signup />}></Route>
          <Route path ="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/personal" element={<Personal/>}></Route>
          <Route path="/education" element={<Education/>}></Route>
          <Route path='/experience' element={<Experience/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/certify' element={<Certificates/>}></Route>
          <Route path='/achieve' element={<Achievements/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
