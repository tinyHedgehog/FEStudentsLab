import React from 'react';
import filterIcon from './filter_icon.png';
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
      <div className={'advanced-filters' + this.props.className}>
        <img className='advanced-filters-icon first-icon' src={filterIcon} />
        <span>Alcohol by volume: {this.state.abvValue}</span>
        <input
          type='range'
          min={filtersRange.minAbv}
          max={filtersRange.maxAbv}
          value={this.state.abvValue}
          onChange={this.changeFilterValue}
          onMouseUp={this.applyFilters}
          className='advanced-filters-slider'
          id='abvValue'
        />
        <img className='advanced-filters-icon second-icon' src={filterIcon} />
        <span>International Bitterness Units: {this.state.ibuValue}</span>
        <input
          type='range'
          min={filtersRange.minIbu}
          max={filtersRange.maxIbu}
          value={this.state.ibuValue}
          onChange={this.changeFilterValue}
          onMouseUp={this.applyFilters}
          className='advanced-filters-slider'
          id='ibuValue'
        />
        <img className='advanced-filters-icon third-icon' src={filterIcon} />
        <span>Color by EBC: {this.state.ebcValue}</span>
        <input
          type='range'
          min={filtersRange.minEbc}
          max={filtersRange.maxEbc}
          value={this.state.ebcValue}
          onChange={this.changeFilterValue}
          onMouseUp={this.applyFilters}
          className='advanced-filters-slider'
          id='ebcValue'
        />
      </div>
    );
  }
}

export default AdvancedFilters;
