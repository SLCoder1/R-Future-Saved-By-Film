import React from 'react';
import walleCover from "./Movie_Covers/Twenty.jpeg"
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
          React.createElement('h3', null, '2040')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2019'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'Not Rated'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '7.1'),
            React.createElement('p', { className: 'summary' }, '2040 is a hopeful documentary where Damon Gameau imagines a better future for his daughter by exploring real, existing climate solutions. From clean energy to ocean permaculture, it shows how we can reverse environmental damage by acting now.')
          ]
        )
      ]
    )
  );
}

export default App;