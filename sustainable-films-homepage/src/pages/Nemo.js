import React from 'react';
import walleCover from "./Movie_Covers/nemo.jpeg"
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
          React.createElement('h3', null, 'Finding Nemo')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2003'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'G'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '8.2'),
            React.createElement('p', { className: 'summary' }, 'Finding Nemo follows a curious young clownfish who is taken from his reef, sparking an epic journey across the ocean. Along the way, it highlights the beauty and fragility of marine ecosystems and the risks of human interference.')
          ]
        )
      ]
    )
  );
}

export default App;