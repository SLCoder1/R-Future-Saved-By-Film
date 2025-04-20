import React from 'react';
import Layout from "../components/Layout";
import './App.css'
import Fireflies from '../components/Fireflies';
import Lorax from './Lorax';
import Stupid from './Stupid';
import Silent from './Silent';
import Mad from './Mad';
import Men from './Men';
import Eli from './Eli';
import Inter from './Inter';
import Snow from './Snow';

export default function Dystopian() {
  return (
    <Layout>
      <Fireflies />
      <div className="p-5 min-h-[20vh]">
        <h1 className="text-4xl font-bold mb-4">Dystopian / Sci-Fi Films</h1>
        <p>Explore environmental collapse and human resilience through fiction.</p>
      </div>
      <div className = 'movie-wrapper'>
      <Lorax />
       <Stupid />
       <Silent />
       <Mad />
       <Men />
       <Eli />
       <Inter />
       <Snow /> 
      </div>
    </Layout>
  );
}
