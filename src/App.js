import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import NavBar from './components/NavBar';
function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/acercade' element={<AboutMe />} />
        <Route path='/experiencia' element={<Experience />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
