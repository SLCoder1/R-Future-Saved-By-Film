import React from 'react';
import walleCover from "./Movie_Covers/stupid.jpeg"
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
          React.createElement('h3', null, 'The Age of Stupid')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2009'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'Not Rated'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '7'),
            React.createElement('p', { className: 'summary' }, 'The Age of Stupid is set in a devastated future where an archivist reflects on why humanity failed to stop climate change. Combining documentary footage with fiction, it warns of inaction through a powerful lens.')
          ]
        )
      ]
    )
  );
}

export default App;