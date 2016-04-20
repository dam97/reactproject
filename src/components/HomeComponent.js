'use strict';

import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import YouTube  from 'react-youtube';

require('styles//Home.sass');

const styles = {
  inputStyle: {
    color: '#FFFFFF'
  },
  hintStyle: {
    color: '#FFFFFF'
  }
}

/*const video = (
  <YouTube
    videoId = {this.state.videoId}
  />
);*/

class HomeComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      textFieldValue: '',
      videoId: 'RCWBxxEJiGc'
    };
  }

  /*handleTextFieldChange = (e) =>{
    this.setState({
      textFieldValue: e.target.value
    });
  }*/
  render() {
    return (
      <div className="home-component"  >
        <div id= 'text-field-div'>
        <TextField
          className = "text-field"
          inputStyle = {styles.inputStyle}
          hintStyle = {styles.hintStyle}
          hintText = 'Put video id'
          floatingLabelText = 'Video id'
          onChange = {this.handleTextFieldChange = (e) =>{
            this.setState({
              textFieldValue: e.target.value
            });
          }}
        />
        <RaisedButton
          label = "Show video"
          onMouseUp = {this.handleVideoChange = () =>{
            this.setState({
              videoId: this.state.textFieldValue
            });
          }}
        />
        </div>
        <div id = 'player-div'>
          <YouTube
           videoId = {this.state.videoId}
          />
        </div>
      </div>
    );
  }
}

HomeComponent.displayName = 'HomeComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default HomeComponent;
