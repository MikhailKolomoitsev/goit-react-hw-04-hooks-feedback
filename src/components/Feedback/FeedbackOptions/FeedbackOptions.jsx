import React from "react";
import PropTypes from "prop-types";
import { controls, button } from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, id, name }) => (
  <div className={controls}>
    
      <button
      type="button"
        className={button}
        name={name}
        onClick={onLeaveFeedback}
        key={id}
      >
        {name}
      </button>
  </div>
);

// eslint-disable-next-line react/no-typos
FeedbackOptions.propTypes  = {
  onLeaveFeedback: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default FeedbackOptions;
