import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hebergement from './components/Hebergement';
import Transport from './components/Transport';
import Agences from './components/Agences';
import Activites from './components/Activites';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Hebergement />
      <Transport />
      <Agences />
      <Activites />
    </div>
  );
}

export default App;