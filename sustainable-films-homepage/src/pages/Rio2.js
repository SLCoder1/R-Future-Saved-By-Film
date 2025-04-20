import React from 'react';
import walleCover from "./Movie_Covers/rio2.jpg"
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
          React.createElement('h3', null, 'Rio 2')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2014'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'G'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '6.3'),
            React.createElement('p', { className: 'summary' }, 'Rio 2 takes Blu and his family into the Amazon, where they discover a hidden tribe and face threats from deforestation. The film blends humor and music with a strong environmental conservation message.')
          ]
        )
      ]
    )
  );
}

export default App;