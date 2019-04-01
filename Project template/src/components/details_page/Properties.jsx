import React from 'react';
import icon from './info_icon.png';
import AcronymInfo from './AcronymInfo';
import './Properties.css';

const Properties = (props) => {
  return(
    <ul className='properties'>
      <h2>Properties</h2>
      <li className='properties-description'>
        ABV
        <img className='properties-info-icon' src={icon} title={AcronymInfo.ABV} />
        <span className='property-value'>{props.abv}</span>
      </li>
      <li className='properties-description'>
        IBU
        <img className='properties-info-icon' src={icon} title={AcronymInfo.IBU} />
        <span className='property-value'>{props.ibu}</span>
      </li>
      <li className='properties-description'>
        EBC
        <img className='properties-info-icon' src={icon} title={AcronymInfo.EBC} />
        <span className='property-value'>{props.ebc}</span>
      </li>
    </ul>
  )
}

export default Properties;
