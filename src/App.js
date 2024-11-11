import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Team from './Components/Team';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventsPage from './Components/EventsPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<EventsPage/>} />
        </Routes>
        {/* <EventsPage/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
