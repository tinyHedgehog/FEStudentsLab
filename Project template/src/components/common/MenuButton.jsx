import React from 'react';
import Menu from './Menu';
import './MenuButton.css';

class MenuButton extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { 
      isMenuHidden: true 
    };
  }

  openMenu = () => {
    this.setState({isMenuHidden: !this.state.isMenuHidden});
  }

  render() {
    return (
      <div 
        className="Container"
        onClick={this.openMenu}
      >
        <div className="Bars" />
        <div className="Bars" />
        <div className="Bars" /> 
        <Menu
          className={(this.state.isMenuHidden ? '' : ' active')}
          favorite={this.props.favorite}
          favoritePage={this.props.favoritePage}
        />
      </div>
    );
  }
}

export default MenuButton;
