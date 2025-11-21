import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Toolbox from './components/Toolbox';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-slate-200 selection:bg-cyan selection:text-black">
      <Header />
      <main>
        <Hero />
        <Toolbox />
        <Portfolio />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;