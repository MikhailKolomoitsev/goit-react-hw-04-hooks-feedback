// import PropTypes from "prop-types";
import styles from "./Feedback.module.css";
import React, { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
const shortid = require('shortid');

export default function Feedback(){
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
setGood(good+1)
  };

    const handleNeutral = () => {
setNeutral(neutral+1)
    };
    const handleBad = () => {
setBad(bad+1)
  };
 const countTotalFeedback=()=> {
    let sum = good + neutral + bad;
    return sum;
  }

  const countPositiveFeedbackPercentage = () => {
    let result = (good * 100) / (good + neutral + bad);
    if (!result) {
      result = 0;
    }
    return Math.floor(result * 100) / 100;
  }

    return (
      <div className={styles.feedback}>
        <h2>Please, leave us feedback</h2>
        <FeedbackOptions
          name={'good'}
          id={shortid.generate()}
          option={good}
          onLeaveFeedback={handleGood}
        />
        <FeedbackOptions
          name={'neutral'}
          id={shortid.generate()}
          option={neutral}
          onLeaveFeedback={handleNeutral}
        />
        <FeedbackOptions
          name={'bad'}
          id={shortid.generate()}
          option={bad}
          onLeaveFeedback={handleBad}
        />

        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + neutral + bad}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
}


