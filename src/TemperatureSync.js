import React from 'react';
import Temperature from './Temperature.js';




class TemperatureSync extends React.Component{
    constructor(props){
        super(props);
        this.syncCelsiusChanger = this.syncCelsiusChanger.bind(this);
        this.syncFahrenheitChanger = this.syncFahrenheitChanger.bind(this);
        this.state={celsius:'',fahrenheit:''};
    }
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    syncCelsiusChanger(value){
        this.setState({fahrenheit:this.toFahrenheit(value),celsius: value});
    }
    syncFahrenheitChanger(value){
        this.setState({celsius : this.toCelsius(value),fahrenheit: value});
    }
    render(){
        return(
            <div className="example">
                <Temperature scale="Celsius" value={this.state.celsius} onTemperatureChange={this.syncCelsiusChanger}/>
                <Temperature scale="Fahrenheit" value={this.state.fahrenheit} onTemperatureChange={this.syncFahrenheitChanger}/>
                <span>{this.state.celsius>100?'boil':'no boil'}</span>
            </div>
        )
    }
}
export default TemperatureSync;

