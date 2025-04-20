import React from 'react';
import walleCover from "./Movie_Covers/rio.jpeg"
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
          React.createElement('h3', null, 'Rio')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2011'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'G'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '6.9'),
            React.createElement('p', { className: 'summary' }, "Rio follows a domesticated blue macaw discovering his roots in Brazil, while confronting the threat of animal trafficking. It's a vibrant story that sheds light on wildlife protection and cultural diversity.")
          ]
        )
      ]
    )
  );
}

export default App;