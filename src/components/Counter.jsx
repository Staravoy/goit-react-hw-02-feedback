import React from "react";

class Counter extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
     
    goodIncrease = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    }
    neutralIncrease = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    }
    badIncrease = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    }
    render() {
        return (
            <><div className="Counter">
                <button type="button" className="button-item" onClick={this.goodIncrease}>Good</button>
                <button type="button" className="button-item" onClick={this.neutralIncrease}>Neutral</button>
                <button type="button" className="button-item" onClick={this.badIncrease}>Bad</button>
            </div>
                <h1>Statistics</h1>
                <div className="Statisitc">
                    <li>Good:{this.state.good}</li>
                    <li>Neutral:{this.state.neutral}</li>
                    <li>Bad:{this.state.bad}</li>
                    <li>Total:{this.state.bad + this.state.good + this.state.neutral}</li>
                    <li>Positive feedback:{Math.round(this.state.good * 100 / (this.state.bad + this.state.good + this.state.neutral))}%</li>
                </div></>
        )
    }
}
export default Counter