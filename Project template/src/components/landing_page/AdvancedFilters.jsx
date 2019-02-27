import React from 'react';
import './AdvancedFilters.css';

class AdvancedFilters extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      abvValue: 4,
      ibuValue: 30,
      ebcValue: 30
    };

    this.changeFilterValue = this.changeFilterValue.bind(this);
  }

  changeFilterValue(e) {
    this.setState({
      [e.target.id]: Number(e.target.value)
    });
  }

  render() {
    return (
      <div className='advanced-filters'>
        <span>Alcohol by volume: {this.state.abvValue}</span>
        <input
          type='range'
          min='2' max='14'
          value={this.state.abvValue}
          onChange={this.changeFilterValue}
          className='slider'
          id='abvValue'
        />
        <span>International Bitterness Units: {this.state.ibuValue}</span>
        <input
          type='range'
          min='0' max='120'
          value={this.state.ibuValue}
          onChange={this.changeFilterValue}
          className='slider'
          id='ibuValue'
        />
        <span>Color by EBC: {this.state.ebcValue}</span>
        <input
          type='range'
          min='4' max='80'
          value={this.state.ebcValue}
          onChange={this.changeFilterValue}
          className='slider'
          id='ebcValue'
        />
      </div>
    );
  }
}


export default AdvancedFilters;
