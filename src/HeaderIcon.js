import React from 'react';

class HeaderIcon extends React.Component{
    render(){
        return (
            <div class="headerIcon">
                <img src={this.props.src} />
                <span>{this.props.text}</span>
            </div>
        )
    }
}
export default HeaderIcon;