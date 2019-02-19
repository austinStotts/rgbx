import React from 'react';
import { StyleSheet, Text, View, Slider, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      red: Math.floor(Math.random() * 255),
      green: Math.floor(Math.random() * 255),
      blue: Math.floor(Math.random() * 255),
      alpha: Math.random(),
    }

    this.updateRed = this.updateRed.bind(this);
    this.updateGreen = this.updateGreen.bind(this);
    this.updateBlue = this.updateBlue.bind(this);
    this.updateAlpha = this.updateAlpha.bind(this);
    this.save = this.save.bind(this);
  }

  updateRed (value) { this.setState({red:value}) }
  updateGreen (value) { this.setState({green:value}) }
  updateBlue (value) { this.setState({blue:value}) }
  updateAlpha (value) { this.setState({alpha:value}) }

  save () {

  }

  render() {
    return (
      <View 
        style={{
          flex: 1,
          backgroundColor: `rgba(${this.state.red},${this.state.green},${this.state.blue},${this.state.alpha})`,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Slider
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FF4136" 
          thumbTintColor="#FF4136" 
          style={styles.red}
          onValueChange={this.updateRed}
          value={this.state.red}
        ></Slider>
        <Slider 
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#01FF70" 
          thumbTintColor="#01FF70"  
          style={styles.green}
          onValueChange={this.updateGreen}
          value={this.state.green}
        ></Slider>
        <Slider 
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#0074D9" 
          thumbTintColor="#0074D9"  
          style={styles.blue}
          onValueChange={this.updateBlue}
          value={this.state.blue}
        ></Slider>
        <Slider 
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="white" 
          thumbTintColor="black"  
          style={styles.alpha}
          onValueChange={this.updateAlpha}
          value={this.state.alpha}
        ></Slider>
        <TouchableOpacity 
          onPress={this.save}
          style={styles.save}
        >
        <Text style={styles.saveText}>save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    width: '80%',
    height: 50
  },
  green: {
    width: '80%',
    height: 50
  },
  blue: {
    width: '80%',
    height: 50
  },
  alpha: {
    width: '80%',
    height: 50
  },
  save: {
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 3,
    width: 75,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  saveText: {
    fontSize: 20
  }
});
