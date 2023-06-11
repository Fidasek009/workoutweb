import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import HowTo from './components/pages/HowTo';
import Bros from './components/pages/Bros';
import SignUp from './components/pages/SignUp';
import Highlights from './components/pages/Highlights';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/how-to' exact Component={HowTo} />
        <Route path='/highlights' exact Component={Highlights} />
        <Route path='/bros' exact Component={Bros} />
        <Route path='/sign-up' exact Component={SignUp} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
