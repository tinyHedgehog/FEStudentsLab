import React from 'react';
import './AdvancedFilters.css';

class AdvancedFilters extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {
      abvValue: 0,
      ibuValue: 0,
      ebcValue: 0
    };
  }

  changeFilterValue = (e) => {
    this.setState({
      [e.target.id]: Number(e.target.value)
    });
  }

  applyFilters = () => {
    this.props.applyFilters(this.state.abvValue, this.state.ebcValue, this.state.ibuValue)
  }

  render() {
    const filtersRange = {
      minAbv: 2.0,
      maxAbv: 14.0,
      minIbu: 0,
      maxIbu: 120,
      minEbc: 4,
      maxEbc: 80 
    };

    return (
      <div className='advanced-filters'>
        <span>Alcohol by volume: {this.state.abvValue}</span>
        <input
          type='range'
          min={filtersRange.minAbv}
          max={filtersRange.maxAbv}
          value={this.state.abvValue}
          onChange={this.changeFilterValue}
          onMouseUp={this.applyFilters}
          className='slider'
          id='abvValue'
        />
        <span>International Bitterness Units: {this.state.ibuValue}</span>
        <input
          type='range'
          min={filtersRange.minIbu}
          max={filtersRange.maxIbu}
          value={this.state.ibuValue}
          onChange={this.changeFilterValue}
          onMouseUp={this.applyFilters}
          className='slider'
          id='ibuValue'
        />
        <span>Color by EBC: {this.state.ebcValue}</span>
        <input
          type='range'
          min={filtersRange.minEbc}
          max={filtersRange.maxEbc}
          value={this.state.ebcValue}
          onChange={this.changeFilterValue}
          onMouseUp={this.applyFilters}
          className='slider'
          id='ebcValue'
        />
      </div>
    );
  }
}

export default AdvancedFilters;
