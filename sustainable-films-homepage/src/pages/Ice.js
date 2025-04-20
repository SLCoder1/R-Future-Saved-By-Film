import React from 'react';
import walleCover from "./Movie_Covers/ice.jpeg"
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
          React.createElement('h3', null, 'Chasing Ice')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2012'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'PG-13'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '7.8'),
            React.createElement('p', { className: 'summary' }, 'Chasing Ice follows environmental photographer James Balog as he captures time-lapse images of melting glaciers. The film reveals striking visual evidence of climate change through disappearing ice landscapes.')
          ]
        )
      ]
    )
  );
}

export default App;