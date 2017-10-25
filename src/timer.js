import React from 'react';
import Welcome from './welcome'
class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {secondsElpased: 0};
    }
    tick(){
        this.setState((prevState) => ({
                secondsElpased: prevState.secondsElpased + 1
            })
        );
    }
    componentDidMount(){
        this.interval = setInterval(
            ()=>this.tick(),1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                <div> Seconds Elapsed : {this.state.secondsElpased} </div>
                <Welcome name="sara"/>
                <Welcome name="lily" />
            </div>
        );
    }
}
export default Timer;