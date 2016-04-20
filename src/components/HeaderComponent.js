'use strict';

import React from 'react';

require('styles//Header.sass');

class HeaderComponent extends React.Component {
  constructor(){
    super();
    this.state = {name: 'Name'};
  }

  handleChange(e){
    const name = e.target.value;
    this.setState({name: name});
  }

  render() {
    return (
      <div className="header-component">
        <header > {this.state.name} </header>
        <input
          value = {this.state.name}
          onChange = {this.handleChange.bind(this)} />
      </div>
    )
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
