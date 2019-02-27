import React from 'react';
import Header from '../common/Header';
import SearchBar from './SearchBar';
import DisplayBeer from './DisplayBeer';
import './index.css';

const Home = () => (
  <div>
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

export default Home;