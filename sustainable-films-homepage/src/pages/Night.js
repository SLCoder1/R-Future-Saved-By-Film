import React from 'react';
import walleCover from "./Movie_Covers/night.jpg"
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
          React.createElement('h3', null, 'Night Moves')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2013'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'R'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '6'),
            React.createElement('p', { className: 'summary' }, 'Night Moves tells the story of environmental activists planning a radical protest against a dam. It delves into the psychological toll and consequences of eco-terrorism.')
          ]
        )
      ]
    )
  );
}

export default App;