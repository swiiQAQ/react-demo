import React from 'react';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: '123'};
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }
    handlerChange(e){
        // this.setState({value:e.target.value});
        this.setState({value: e.target.value.toUpperCase()})
    }
    handlerSubmit(e){
        alert('name: ' +this.state.value);
        e.preventDefault();
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handlerSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handlerChange} />
                    </label>
                    <input type="submit" value="Submit" /> 
                </form>
            </div>
            
        )
    }
}
export default NameForm;