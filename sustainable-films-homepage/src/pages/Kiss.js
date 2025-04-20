import React from 'react';
import walleCover from "./Movie_Covers/kiss.jpg"
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
          React.createElement('h3', null, 'Kiss the Ground')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2020'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'PG'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '8.2'),
            React.createElement('p', { className: 'summary' }, 'Kiss the Ground spotlights regenerative agriculture as a powerful solution to climate change. Through compelling visuals and expert insights, it reveals how soil can be a secret weapon to heal the planet.')
          ]
        )
      ]
    )
  );
}

export default App;