import React from 'react';
import walleCover from "./Movie_Covers/cost.jpeg"
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
          React.createElement('h3', null, 'The True Cost')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2015'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'Not Rated'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '7.7'),
            React.createElement('p', { className: 'summary' }, 'The True Cost explores the impact of fast fashion on people and the planet. It unveils the hidden human and environmental costs behind cheap clothing production worldwide.')
          ]
        )
      ]
    )
  );
}

export default App;