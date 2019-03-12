import React from 'react';

const Method = (props) => {
  return(
    <ul className='method'><h2>Method</h2>
      <li>Mash
        <ul>
          {props.method.mash_temp.map((mash, index) => {
            return <li key={`mash_${index}`} className='nested-li'>{mash.duration} minutes at {mash.temp.value} &#8451;</li>
          })}
        </ul>
      </li>
      <li>Fermentation
        <ul>
          <li className='nested-li'>Perform at {props.method.fermentation.temp.value} &#8451;</li>
        </ul>
      </li>
      {props.method.twist && 
      <li>Twist
        <ul>
          <li className='nested-li'>
            {props.method.twist}
          </li>
        </ul>
      </li>
      }
    </ul>
  )
}

export default Method;
