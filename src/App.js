import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import ProjectsCard from './sections/ProjectsCard';
import Navbar from './components/Navbar';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <About />
        <Skills />
        <ProjectsCard />
        <Contact />
      </main>
    </div>
  );
}

export default App;
