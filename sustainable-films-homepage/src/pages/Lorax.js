import React from 'react';
import walleCover from "./Movie_Covers/lorax.jpg"
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
          React.createElement('h3', null, 'The Lorax')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2012'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'PG'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '6.4'),
            React.createElement('p', { className: 'summary' }, 'The Lorax tells the story of a guardian who fights to protect his forest from greedy industrialists. It’s a colorful warning about environmental destruction and the power of speaking up.')
          ]
        )
      ]
    )
  );
}

export default App;