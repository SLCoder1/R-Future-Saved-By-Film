import React from 'react';
import walleCover from "./Movie_Covers/flood.jpg"
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
          React.createElement('h3', null, 'Before the Flood')
        ),
        React.createElement(
          'div',
          { className: 'movie-hover-details', key: 'hover' },
          [
            React.createElement('p', null, React.createElement('strong', null, 'Release Year: '), '2016'),
            React.createElement('p', null, React.createElement('strong', null, 'Age Rating: '), 'PG'),
            React.createElement('p', null, React.createElement('strong', null, 'IMDb Rating: '), '8.2'),
            React.createElement('p', { className: 'summary' }, "Before the Flood follows Leonardo DiCaprio as he travels the globe witnessing the impacts of climate change firsthand. Through global interviews, the film delivers a compelling call to reduce carbon emissions and protect Earth's future.")
          ]
        )
      ]
    )
  );
}

export default App;