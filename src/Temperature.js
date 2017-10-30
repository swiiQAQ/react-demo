import React from 'react';

class Temperatrue extends React.Component{
    constructor(props){
        super(props);
        this.setState({temperatrue: ''})
    }
    render(){
        return(
            <div>
                <input type="text" value={this.value.temperatrue}></input>
            </div>
        )
    }
}
export default Temperate;