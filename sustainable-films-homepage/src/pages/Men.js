import React from 'react';
import walleCover from "./Movie_Covers/men.jpg"
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
          React.createElement('h3', null, 'Children of Men')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2006'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'R'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '7.9'),
            React.createElement('p', { className: 'summary' }, 'Children of Men imagines a bleak future where humans can no longer reproduce, and society is crumbling. It’s a powerful reflection on hope, resilience, and the consequences of a dying world.')
          ]
        )
      ]
    )
  );
}

export default App;