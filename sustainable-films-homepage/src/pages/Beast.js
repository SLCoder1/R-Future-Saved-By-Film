import React from 'react';
import walleCover from "./Movie_Covers/beast.jpg"
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
          React.createElement('h3', null, 'Beasts of the Southern Wilds')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2012'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'PG-13'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '7.2'),
            React.createElement('p', { className: 'summary' }, 'Beasts of the Southern Wild follows a brave girl living in a flooded bayou community threatened by climate change. The film blends magical realism with a powerful story of resilience and environmental displacement.')
          ]
        )
      ]
    )
  );
}

export default App;