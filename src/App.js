import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import NavTabs from './components/NavTabs';
import Header from './components/Header';
import Home from './components/pages/Home';
// import About from './components/pages/About';
import Projects from './components/pages/Projects';
// import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="projects/*" element={<Projects />} />
          {/* <Route path="blog" element={<Blog />} /> */}
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

