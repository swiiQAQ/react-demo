import React from 'react';
import HeaderIcon from './HeaderIcon.js';
import Catelog from './Catelog.js';

class HeaderB extends React.Component{
    
    render(){
        const content = ['Docs','Tutorial','Community','Blog'];
        return(
            <div className="header">
                <div className="header_box">
                    <HeaderIcon src={this.props.src} text={this.props.text}/>
                    <Catelog content={content}/>
                </div>
            </div>
        )
    }
}
export default HeaderB;