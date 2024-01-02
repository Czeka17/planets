import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import Home from './pages/Home';
import Planets from './pages/Planets';
import SolarSystem from './pages/SolarSystem';

function App() {

  return <Router>
  <Navigation />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="planets" element={<Planets />} />
    <Route path="solarsystem" element={<SolarSystem />} />
  </Routes>
</Router>
}

export default App;
