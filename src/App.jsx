import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
 

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
        </Routes>
        <Footer />
    </Router>
  </>
  )
}

export default App
