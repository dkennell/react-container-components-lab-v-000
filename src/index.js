import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';
import MovieReviews from './components/MovieReviews';

ReactDOM.render(
  <div className="app">
    <LatestMovieReviewsContainer className="latest-movie-reviews"/>
    <SearchableMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);