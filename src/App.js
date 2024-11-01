// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Team from './Components/Team';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <section id="home" style={{ height: '100vh', background: '#0d0d0d' }}><Home/></section>
        <section id="about" style={{ height: '100vh', background: '#333' }}><About/></section>
        <section id="services" style={{ height: '100vh', background: '#555' }}>Services Section</section>
        <section id="contact" style={{ height: '100vh', background: '#777' }}>Contact Section</section>
        <section id='team' style={{background: '#555' }}><Team/></section>
        <section id='footer'><Footer/></section>
      </div>
    </>
  );
}

export default App;