import React from 'react';
import './App.css'
import Layout from "../components/Layout";
import Fireflies from '../components/Fireflies';
import Walle from './Walle';
import Nemo from './Nemo';
import Dory from './Dory';
import Momo from './Momo';
import Rio from './Rio';
import Rio2 from './Rio2';
import Happy from './Happy';
import Moana from './Moana';

export default function Animated() {
  return (
    <Layout>
      <Fireflies />
      <div className="p-5 min-h-[20vh]">
        <h1 className="text-4xl font-bold mb-4">Animated / Family Films</h1>
        <p>Explore animated stories that engage younger audiences with sustainability and imagination.</p>
      </div>
      <div className = "movie-wrapper">
        <Walle/>
        <Nemo />
        <Dory />
        <Momo />
        <Rio />
        <Rio2 />
        <Happy />
        <Moana />
      </div>
      
    </Layout>
  );
}
