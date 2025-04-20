import React from 'react';
import walleCover from "./Movie_Covers/dark.jpg"
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
          React.createElement('h3', null, 'Dark Waters')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2019'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'PG-13'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '7.6'),
            React.createElement('p', { className: 'summary' }, "Dark Waters follows a corporate lawyer who takes on a chemical company polluting a town's water supply. It's a gripping legal drama exposing the real-life dangers of environmental negligence.")
          ]
        )
      ]
    )
  );
}

export default App;