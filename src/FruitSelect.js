import React from 'react';

class FruitSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 'mango'};
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }
    handlerSubmit(e){
        alert(`fruit: ${this.state.value}`)
        e.preventDefault();
    }
    handlerChange(e){
        this.setState({value: e.target.value});
    }
    render(){
        return(
            <form onSubmit={this.handlerSubmit}>
                <label>
                    <select value={this.state.value} onChange={this.handlerChange}>
                        <option value="Apple">Apple</option>
                        <option value="mango">mango</option>
                        <option value="watermelon">watermelon</option>
                        <option value="strawberry">strawberry</option>
                        <option value="lemon">lemon</option>
                    </select>
                </label>
                <input type="submit" value="submit"></input>
            </form>
        )
    }
}
export default FruitSelect;