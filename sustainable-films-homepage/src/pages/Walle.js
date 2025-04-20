import React from 'react';
import walleCover from "./Movie_Covers/Walle.jpg"
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
          React.createElement('h3', null, 'WALL-E')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2008'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'PG'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '8.4'),
            React.createElement('p', { className: 'summary' }, 'A lonely robot cleans up a trash-covered Earth and discovers love, hope, and the future of humanity.')
          ]
        )
      ]
    )
  );
}

export default App;