import React from 'react';
import HeaderIcon from './HeaderIcon.js';
import Catelog from './Catelog.js';

class HeaderB extends React.Component{
    
    render(){
        const content = ['Docs','Tutorial','Community','Blog'];
        return(
            <div class="header">
                <div class="headerBox">
                    <HeaderIcon src={this.props.src} text={this.props.text}/>
                    <ul>
                        <Catelog content={content}/>
                    </ul>
                </div>
            </div>
        )
    }
}
export default HeaderB;