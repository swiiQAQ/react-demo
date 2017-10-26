import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date().toLocaleDateString()};
        this.changeTimer = this.changeTimer.bind(this);
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date().toLocaleDateString()
        });
    }
    tickTime(){
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }
    changeTimer(){
        clearInterval(this.timerID);
        this.setState({
            date: new Date().toLocaleTimeString()
        })
        this.timerID = setInterval(
            ()=>this.tickTime(),
            1000
        )
    }
    render(){
        return(
            <div className="clockBox">
                <h2>{this.state.date}</h2>
                <input type="button" value="change" onClick={this.changeTimer}/> 
            </div>
            
        )
    }
}
export default Clock;