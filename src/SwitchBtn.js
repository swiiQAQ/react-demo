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
        let styleObj;
        if(this.state.isToggleOn){
            styleObj = {
                marginLeft: '',
            }
        }
        else{
            styleObj ={
                // marginRight: '20px',
                background: '#E74C3C'
            }
        }
        return (
            <div className="example">
                <div class="switchBox">
                    <button style={styleObj} className="switchBtn" onClick={this.handleClick}>
                        {this.state.isToggleOn? 'ON':'OFF'}
                    </button>                    
                </div>

            </div>
            
        )
    }
}
 export default SwitchBtn;
