import React from 'react';
import walleCover from "./Movie_Covers/okja.jpg"
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
          React.createElement('h3', null, 'Okja')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2017'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'TV-MA'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '7.3'),
            React.createElement('p', { className: 'summary' }, 'Okja follows a girl fighting to save her genetically-engineered super pig from a powerful corporation. The film critiques industrial farming and questions our relationship with animals and the environment.')
          ]
        )
      ]
    )
  );
}

export default App;