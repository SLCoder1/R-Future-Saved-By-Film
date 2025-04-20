import React from 'react';
import walleCover from "./Movie_Covers/first.jpg"
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
          React.createElement('h3', null, 'First Reformed')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2017'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'R'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '7.1'),
            React.createElement('p', { className: 'summary' }, 'First Reformed follows a troubled priest whose growing environmental concern leads him down a dark path. The film explores eco-anxiety, faith, and moral responsibility in a warming world.')
          ]
        )
      ]
    )
  );
}

export default App;