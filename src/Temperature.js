import React from 'react';


class Temperature extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''}
        this.handlerChange = this.handlerChange.bind(this);                                                                             
    }
    handlerChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        return(
            <div className={`temperatureBox ${this.props.scale}`}>
                <label>{this.props.scale}</label>
                <input type="text" value={this.props.value} onChange={this.handlerChange}></input>
            </div>
        )
    }
}
export default Temperature;

  