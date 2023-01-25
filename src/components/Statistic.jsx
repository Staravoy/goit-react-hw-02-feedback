import React from "react";
import PropTypes from 'prop-types';


const Statistic = ({ good, neutral, bad }) => {
    return (
                <>
                    <span>Good:{good}</span>
                    <span>Neutral:{neutral}</span>
                    <span>Bad:{bad}</span>
                    <span>Total:{bad + good + neutral}</span>
                    <span>Positive feedback:{Math.round(good * 100 / (bad + good + neutral))}%</span>
    </>)
};

                
                Statistic.propTypes = {
                    good: PropTypes.number.isRequired,
                    neutral: PropTypes.number.isRequired,
                    bad: PropTypes.number.isRequired,
                };
                
 export default Statistic;