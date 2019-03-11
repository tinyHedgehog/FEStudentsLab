import React from 'react';
import icon from './info_icon.png';
import AcronymInfo from './AcronymInfo';
import './Properties.css';

const Properties = (props) => {
  return(
    <ul className='properties'>
      <h2>Properties</h2>
      <li>ABV <img className='info-icon' src={icon} title={AcronymInfo.ABV} /> {props.abv}</li>
      <li>IBU <img className='info-icon' src={icon} title={AcronymInfo.IBU} /> {props.ibu}</li>
      <li>EBC <img className='info-icon' src={icon} title={AcronymInfo.EBC} /> {props.ebc}</li>
    </ul>
  )
}

export default Properties;
