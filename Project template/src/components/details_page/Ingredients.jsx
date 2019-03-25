import React from 'react';

const Ingredients = (props) => {
  return(
    <ul className='ingredients'><h2>Ingredients</h2>
      <li className='ingredients-description-list'>Water
        <ul>
          <li className='ingredients-description'>
            {props.boilVolume.value} {props.boilVolume.unit}
          </li>
        </ul>
      </li>
      <li className='ingredients-description-list'>Malt
        <ul>
          {props.ingredients.malt.map((malt, index) => {
            return <li key={`malt_${index}`} className='ingredients-description'>"{malt.name}" - {malt.amount.value} {malt.amount.unit}</li>
          })}
        </ul>
      </li>
      <li className='ingredients-description-list'>Hops
        <ul>
          {props.ingredients.hops.map((hops, index) => {
            return <li key={`hops_${index}`} className='ingredients-description'>"{hops.name}" - {hops.amount.value} {hops.amount.unit}, add when {hops.add}</li>
          })}
        </ul>
      </li>
      <li className='ingredients-description-list'>Yeast
          <ul>
            <li className='ingredients-description'>{props.ingredients.yeast}</li>
          </ul>
      </li>
    </ul>
  )
}

export default Ingredients;
