import React from 'react';
import walleCover from "./Movie_Covers/promise.jpeg"
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
          React.createElement('h3', null, 'Promised Land')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2012'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'R'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '6.6'),
            React.createElement('p', { className: 'summary' }, 'Promised Land explores the ethics of fracking as a gas company rep faces resistance in a rural town. The film examines environmental impact and personal responsibility in corporate deals.')
          ]
        )
      ]
    )
  );
}

export default App;