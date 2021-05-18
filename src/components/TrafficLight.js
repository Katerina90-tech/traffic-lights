import React, {Component} from 'react';
import classes from './TrafficLight.module.css';

const colors = ['green', 'yellow', 'red']

class Trafficlight extends Component {
  state = { step: 0 }

  changeTrafficLight = () => {
    const step = this.state.step
    return (step === 2) ? this.setState({ step: 0 }) : this.setState({ step: step + 1 })
     }

  componentDidMount(){
   setInterval(this.changeTrafficLight, (20*1000)/3);
  }

   render(){

    let currentColor = colors[this.state.step]
    let backgroundColorClassName = classes.Container + ' ' + classes['Container' + currentColor]
    let redLightClassName = classes.Light + (currentColor === 'red' ? ' ' + classes.Lightred : '')
    let yellowLightClassName = classes.Light + (currentColor === 'yellow' ? ' ' + classes.Lightyellow : '')
    let greenLightClassName = classes.Light + (currentColor === 'green' ? ' ' + classes.Lightgreen : '')
    return (
  <div>
       <div className={backgroundColorClassName}>
          <div className={classes.Trafficlight}>
            <div className={redLightClassName} />
            <div className={yellowLightClassName} />
            <div className={greenLightClassName} />
          </div>
          <p>{`This light is ${currentColor}`}</p>
        </div>
  </div>
);
  }
}




export default Trafficlight;
