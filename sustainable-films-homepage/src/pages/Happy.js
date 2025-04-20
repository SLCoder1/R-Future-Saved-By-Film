import React from 'react';
import walleCover from "./Movie_Covers/happy_feet_keyart.jpg"
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
          React.createElement('h3', null, 'Happy Feet')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2006'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'PG'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '6.4'),
            React.createElement('p', { className: 'summary' }, 'Happy Feet is about a tap-dancing penguin who doesn’t fit in with his singing colony. It delivers a fun yet serious message about overfishing and the need to protect Antarctic wildlife.')
          ]
        )
      ]
    )
  );
}

export default App;