import React from 'react';
import Header from './common/Header';
import SearchBar from './landing_page/SearchBar';
import DisplayBeer from './landing_page/DisplayBeer';
import './index.css';

const App = () => (
  <div>
    <Header />
    <SearchBar />
    <div className='search-result'>
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
    </div>
  </div>
);

export default App;
