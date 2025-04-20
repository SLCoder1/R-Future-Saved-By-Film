import React from 'react';
import Layout from "../components/Layout";
import './App.css'
import Fireflies from '../components/Fireflies';
import Dark from './Dark';  
import Promise from './Promise';
import Civil from './Civil';
import First from './First';
import Night from './Night';
import Beast from './Beast';
import Day from './Day';
import Okja from './Okja';

export default function Drama() {
  return (
    <Layout>
      <Fireflies />
      <div className="p-5 min-h-[20vh]">
        <h1 className="text-4xl font-bold mb-4">Drama Films</h1>
        <p>Explore deep emotional narratives where the environment shapes the lives of characters and communities.</p>
      </div>
      <div className='movie-wrapper'>
        <Dark /> 
        <Promise />     
        <Civil />
        <First />
        <Night />
        <Beast />
        <Day />
        <Okja />
        </div>
    </Layout>
  );
}
