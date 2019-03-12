import React from 'react';

const Ingredients = (props) => {
  return(
    <ul className='ingredients'><h2>Ingredients</h2>
      <li>Water
        <ul>
          <li className='nested-li'>
            {props.boilVolume.value} {props.boilVolume.unit}
          </li>
        </ul>
      </li>
      <li>Malt
        <ul>
          {props.ingredients.malt.map((malt, index) => {
            return <li key={`malt_${index}`} className='nested-li'>"{malt.name}" - {malt.amount.value} {malt.amount.unit}</li>
          })}
        </ul>
      </li>
      <li>Hops
        <ul>
          {props.ingredients.hops.map((hops, index) => {
            return <li key={`hops_${index}`} className='nested-li'>"{hops.name}" - {hops.amount.value} {hops.amount.unit}, add when {hops.add}</li>
          })}
        </ul>
      </li>
      <li>Yeast
          <ul>
            <li className='nested-li'>{props.ingredients.yeast}</li>
          </ul>
      </li>
    </ul>
  )
}

export default Ingredients;
