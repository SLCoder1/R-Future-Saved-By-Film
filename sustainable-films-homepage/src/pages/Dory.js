import React from 'react';
import walleCover from "./Movie_Covers/dory.jpg"
import './Walle.css';

function App() {
  return React.createElement(
    'div',
    { className: 'movie-wrapper' },
    React.createElement(
      'div',
      { className: 'movie-card' },
      [
        React.createElement('img', {
          className: 'movie-img',
          src: walleCover,  // ✅ use the imported variable here
          alt: 'WALL-E Poster',
          key: 'img'
        }),
        React.createElement(
          'div',
          { className: 'movie-info', key: 'info' },
          React.createElement('h3', null, 'Finding Dory')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2016'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'G'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '7.3'),
            React.createElement('p', { className: 'summary' }, "Finding Dory centers on a forgetful fish's quest to reunite with her family, exploring themes of disability and marine life conservation. It encourages empathy for ocean creatures and respect for their habitats.")
          ]
        )
      ]
    )
  );
}

export default App;