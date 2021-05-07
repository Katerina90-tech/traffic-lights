import React, {Component} from 'react';
import classes from './TrafficLight.module.css';


const color = {
  green: 0,
  yellow: 1,
  red: 2
  }


class  Trafficlight extends Component{
  constructor(props) {
    super(props);
    this.state={
      color: color.green
    }
  }

  componentDidMount(){
     const changeTrafficLight = () => {
       if (this.state.color == color.green) {
        this.setState({color: color.yellow})
       }
       else if (this.state.color == color.yellow) {
        this.setState({color: color.red})
       }
       else if (this.state.color == color.red) {
        this.setState({color: color.green})
       }
     }

   setInterval(changeTrafficLight, (20*1000)/3);
  }

  render(){

  let backgroundColorClassName = classes.Container

   switch(this.state.color){
    case color.green:
      backgroundColorClassName += ' ' + classes.Containergreen;
      break;
    case color.yellow:
      backgroundColorClassName += ' ' + classes.Containeryellow;
      break;
    case color.red:
     backgroundColorClassName += ' ' +classes.Containerred;
      break;
    default:
     break;
  }

  let redLightClassName = classes.Light + (this.state.color == color.red ? ' ' + classes.Lightred : '')
  let yellowLightClassName = classes.Light + (this.state.color == color.yellow ? ' ' + classes.Lightyellow : '')
  let greenLightClassName = classes.Light + (this.state.color == color.green ? ' ' + classes.Lightgreen : '')
    return (
  <div>
       <div className={backgroundColorClassName}>
          <div className={classes.Trafficlight}>
            <div className={redLightClassName}></div>
            <div className={yellowLightClassName}></div>
            <div className={greenLightClassName}></div>
          </div>
          <p> {'This light is ' + (this.state.color == color.green ? 'green' : (this.state.color == color.yellow ? 'yellow' : 'red'))} </p>
        </div>
  </div>
);
  }
}




export default Trafficlight;
