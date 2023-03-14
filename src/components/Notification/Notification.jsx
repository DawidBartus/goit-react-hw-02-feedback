import React from 'react';
import style from 'components/Notification/Notification.module.css';
import PropTypes from 'prop-types';

const Notification = props => {
  return <p className={style.message}>{props.message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
