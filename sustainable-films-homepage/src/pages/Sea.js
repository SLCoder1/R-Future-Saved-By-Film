import React from 'react';
import walleCover from "./Movie_Covers/sea.png"
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
          React.createElement('h3', null, 'Seaspiracy')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2021'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'TV-MA'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '8.1'),
            React.createElement('p', { className: 'summary' }, 'Seaspiracy investigates the dark side of the global fishing industry. It challenges the idea of sustainable seafood and exposes environmental harm beneath the surface of our oceans.')
          ]
        )
      ]
    )
  );
}

export default App;