import React from 'react';
import './App.css'
import Layout from "../components/Layout";
import Fireflies from '../components/Fireflies';
import Flood from './Flood';
import Twenty from './Twenty';
import Ice from './Ice';
import Cost from './Cost';
import Kiss from './Kiss';
import Sea from './Sea';
import Farm from './Farm';
import Octo from './Octo';

export default function Drama() {
  return (
    <Layout>
      <Fireflies />
      <div className="p-5 min-h-[20vh]">
        <h1 className="text-4xl font-bold mb-4">Documentary Films</h1>
        <p>Showcase real-world efforts, challenges, and victories in the movement toward sustainability.</p>
      </div>
      <div className="movie-wrapper">
        <Flood />
        <Twenty />
        <Ice />
        <Cost />
        <Kiss />
        <Sea />
        <Farm />
        <Octo />
      </div>
    </Layout>
  );
}
