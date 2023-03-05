import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          {/* Wrap Route elements in a Routes component */}
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/" element={<Home />} />
            <Route path="projects/*" element={<Projects />} />
            {/* Define a route that will have descendant routes */}
            <Route path="contact/*" element={<Contact />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

