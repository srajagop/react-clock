import React, { Component } from 'react';

class Clock extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            hoursRatio: 0,
            minutesRatio: 0,
            secondsRatio: 0
        };
         this.timerId = null;
      }
    componentDidMount() {
        requestAnimationFrame(this.getTime.bind(this))
    }

    getTime() {
        const currentDate = new Date()
        const secondsRatio = currentDate.getSeconds() / 60
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
        const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
        this.setState(state => ({
            hoursRatio,
            secondsRatio,
            minutesRatio
        }));
        requestAnimationFrame(this.getTime.bind(this));
    }

    render() {
        const { secondsRatio, minutesRatio, hoursRatio } = this.state;
      return (
            <div class="clock">
                <div class="hand hour" style={{"--rotation": hoursRatio * 360}}></div>
                <div class="hand minute" style={{"--rotation": minutesRatio * 360}}></div>
                <div class="hand second" style={{"--rotation": secondsRatio * 360}}></div>
                <div class="number number1">1</div>
                <div class="number number2">2</div>
                <div class="number number3">3</div>
                <div class="number number4">4</div>
                <div class="number number5">5</div>
                <div class="number number6">6</div>
                <div class="number number7">7</div>
                <div class="number number8">8</div>
                <div class="number number9">9</div>
                <div class="number number10">10</div>
                <div class="number number11">11</div>
                <div class="number number12">12</div>
            </div>
        );
    }
  }

  export default Clock;