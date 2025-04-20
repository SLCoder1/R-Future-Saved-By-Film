import React from 'react';
import walleCover from "./Movie_Covers/inter.jpeg"
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
          React.createElement('h3', null, 'Interstellar')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2014'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'PG-13'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '8.7'),
            React.createElement('p', { className: 'summary' }, 'Interstellar follows a team of astronauts who travel through a wormhole in search of a new home as Earth becomes uninhabitable. The film explores space travel, survival, and humanity’s impact on its environment.')
          ]
        )
      ]
    )
  );
}

export default App;