import React from "react";
import Statistic from "./Statistic";
import Section from "./Section";
import FeedbackOption from "./FeedbackOption";
import Notification from "./Notification";
import "./counter.css"

class Counter extends React.Component {
    static defaultProps = {
        initialValue:  0,
    }; 

    state = {
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue 
    };
     
    
    
    onLeaveFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };
    render() {
        const objKey = Object.keys(this.state);
        const total = this.state.bad + this.state.good + this.state.neutral;

        return (
            <>
        <Section>
                <FeedbackOption options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
                </Section>

                {total === 0 ? (
                    <Notification message="No feedback given" />
                ) : (
                        
                    <Section title="Statistics">
                        <Statistic good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
                    </Section>
                )}
            </>
        )
    }
}
export default Counter;