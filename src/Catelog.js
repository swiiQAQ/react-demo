import React from 'react';

// function RenderList(props){
//     let list = props.content.map(function(item){
//         return <li>{item}</li>
//     })
//     return <ul className="catelog">{list}</ul>
// };
class Catelog extends React.Component{
    render(){
        // return(
        //     <RenderList content={this.props.content}/>
        // )
        const list = this.props.content;
        return (
            <ul className="catelog">
                {list.map((item,index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        )
    }
}
export default Catelog;