import React from 'react';

class SwitchBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState=>({
            isToggleOn: !prevState.isToggleOn
        }))
        // this.setState({
        //     isToggleOn: !this.state.isToggleOn
        // })
    }
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn? 'ON':'OFF'}
            </button>
        )
    }
}
 export default SwitchBtn;
