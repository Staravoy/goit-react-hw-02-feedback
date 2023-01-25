import React from "react";

import PropTypes from "prop-types";

const FeedbackOption = ({ options, onLeaveFeedback }) => {
    return options.map((option) => (
        
             <button
      type="button"
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
    
};
    FeedbackOption.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};
    
export default FeedbackOption;