import React from 'react'

class Clock extends React.Component{
    state = {
        currentTime: null
    }

    componentDidMount(){
        setInterval(() => { this.getCurrentTime() }, 1000);
    }

    render(){
        return(
        <div>{this.state.currentTime}</div>
        )
    }

    getCurrentTime(){
        let currntDate = new Date();
        let time = 
            this.formatNumberToTwoDigitsString(currntDate.getHours()) + ":" +
            this.formatNumberToTwoDigitsString(currntDate.getMinutes()) + ":" +
            this.formatNumberToTwoDigitsString(currntDate.getSeconds());
        this.setState({
            currentTime: time
        })      
    }

    formatNumberToTwoDigitsString(value) {
        return value < 10 ? "0" + value : value;
    }

}

export default Clock