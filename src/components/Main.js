require('normalize.css');
require('styles/App.sass');

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

injectTapEventPlugin();

class AppComponent extends React.Component {
  contextTypes: {
    router: React.PropTypes.object.isRequired
  }
  constructor(){
    super();
    this.state = {
      open: true,
      settingsName: 'Settings'
    };
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  navigate(path){
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="index">
        <AppBar
        title="Keys shop"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementRight={
          <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem
                primaryText="Home"
                onTouchTap={this.navigate.bind(this, '/')} />
              <MenuItem
                primaryText="Shop"
                onTouchTap={this.navigate.bind(this, '/shop')} />
              <MenuItem
                primaryText={this.state.settingsName}
                onTouchTap={this.navigate.bind(this, '/settings')} />
              <MenuItem
                primaryText="Sign out"
                onTouchTap={this.setState.bind(this, {settingsName: 'Settings'})}
               />
          </IconMenu>
        } />
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
