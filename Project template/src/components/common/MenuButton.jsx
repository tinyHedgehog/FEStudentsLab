import React from 'react';
import Menu from './Menu';
import './MenuButton.css';

class MenuButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      isMenuHidden: true 
    };

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
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
        {!this.state.isMenuHidden && <Menu />}
      </div>
    );
  }
}

export default MenuButton;
