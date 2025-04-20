import React from 'react';
import walleCover from "./Movie_Covers/Civil.jpg"
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
          React.createElement('h3', null, 'A Civil Action')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '1998'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'PG-13'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '6.6'),
            React.createElement('p', { className: 'summary' }, 'A Civil Action tells the story of a lawyer who sues companies for dumping toxic waste into a town’s water. It’s a courtroom drama showing how environmental justice can come at a great personal cost.')
          ]
        )
      ]
    )
  );
}

export default App;