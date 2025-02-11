// src/App.jsx
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Team from './components/Team';
import Director from './components/Director';
import Facilities from './components/Facilities';
import Activities from './components/Activities';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Course_offered from './components/Course_offered';
import ImageGallery from './components/Image_Gallery';
import Services from './components/Services';
import ExecutiveCommittee from './components/ExecutiveCommittee';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <HelmetProvider>
    <Router>
      <div className="min-h-screen bg-white text-black relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/director_message" element={<Director />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses/online-courses" element={<Course_offered />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/executive_committee" element={<ExecutiveCommittee />} />
          <Route path="/events&news" element={<Activities />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}
 
export default App;

