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

  render() {
    let openMenu = () => {
      this.setState({isMenuHidden: !this.state.isMenuHidden});
  }

    return (
      <div 
        className="Container"
        onClick={openMenu}
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
