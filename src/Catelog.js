import React from 'react';

function RenderList(props){
    let list = props.content.map(function(item){
        return <li>{item}</li>
    })
    return <ul className="catelog">{list}</ul>
};
class Catelog extends React.Component{
    render(){
        return(
            <RenderList content={this.props.content}/>
        )
    }
}
export default Catelog;