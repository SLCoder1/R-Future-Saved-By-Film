import React from 'react';
import walleCover from "./Movie_Covers/eli.jpg"
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
          React.createElement('h3', null, 'The Book of Eli')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2010'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'R'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '6.9'),
            React.createElement('p', { className: 'summary' }, 'The Book of Eli follows a lone traveler protecting a sacred book in a post-apocalyptic, sun-scorched world. The film reflects on scarcity, survival, and the remnants of culture after ecological ruin.')
          ]
        )
      ]
    )
  );
}

export default App;