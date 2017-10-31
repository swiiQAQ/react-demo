import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleDateString(),
            isChange : false
        };
        this.changeTimer = this.changeTimer.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date().toLocaleDateString()
        });
    }

    changeTimer() {
        clearInterval(this.timerID);
        this.setState(prevState =>  ({
            isChange: !prevState.isChange
        }));
        // this.setState({
        //     isChange: !this.state.isChange
        // })
        if (this.state.isChange) {
            this.timerID = setInterval(
                () => this.tick(),
                1000
            )           
        }
        else {
            this.timerID = setInterval(
                () => this.tickTime(),
                1000
            )
        }
    }

    tickTime() {
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }
    render() {
        return (
            <div className="clockBox example">
                <h2>{this.state.date}</h2>
                <input type="button" value={this.state.isChange ? 'date' : 'time'} onClick={this.changeTimer} />

            </div>

        )
    }
}
export default Clock;