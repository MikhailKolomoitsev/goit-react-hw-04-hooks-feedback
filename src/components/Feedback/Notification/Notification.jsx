/* eslint-disable react/no-typos */
import React from "react";
import styles from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return (
    <div className={styles.notificationBox}>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes  = {
  message: PropTypes.string,
};

export default Notification;
