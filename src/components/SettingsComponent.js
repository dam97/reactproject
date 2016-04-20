'use strict';

import React from 'react';
import { Button } from 'react-bootstrap';

require('styles//Settings.sass');


class SettingsComponent extends React.Component {
  render() {
    return (
      <div className="settings-component">
        <Button>Start</Button>
      </div>
    );
  }
}

SettingsComponent.displayName = 'SettingsComponent';

// Uncomment properties you need
// SettingsComponent.propTypes = {};
// SettingsComponent.defaultProps = {};

export default SettingsComponent;
