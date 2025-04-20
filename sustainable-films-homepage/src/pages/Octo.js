import React from 'react';
import walleCover from "./Movie_Covers/octo.jpg"
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
          React.createElement('h3', null, 'My Octopus Teacher')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2020'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'G'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '8.1'),
            React.createElement('p', { className: 'summary' }, 'My Octopus Teacher documents a filmmaker’s bond with a wild octopus in a South African kelp forest. The film offers a poetic look at interspecies connection and ocean conservation.')
          ]
        )
      ]
    )
  );
}

export default App;