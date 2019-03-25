import React from 'react';

const Method = (props) => {
  return(
    <ul className='method'><h2>Method</h2>
      <li className='method-description-list'>Mash
        <ul>
          {props.method.mash_temp.map((mash, index) => {
            if(mash.duration){
              return <li key={`mash_${index}`} className='method-description'>{mash.duration} minutes at {mash.temp.value} &#8451;</li>
            }
            return <li key={`mash_${index}`} className='method-description'>N/A minutes at {mash.temp.value} &#8451;</li>;
          })}
        </ul>
      </li>
      <li className='method-description-list'>Fermentation
        <ul>
          <li className='method-description'>Perform at {props.method.fermentation.temp.value} &#8451;</li>
        </ul>
      </li>
      {props.method.twist && 
      <li className='method-description-list'>Twist
        <ul>
          <li className='method-description'>
            {props.method.twist}
          </li>
        </ul>
      </li>
      }
    </ul>
  )
}

export default Method;
