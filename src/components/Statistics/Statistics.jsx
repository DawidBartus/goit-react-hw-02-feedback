import React from 'react';
import Notification from 'components/Notification/Notification';
import style from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = props => {
  const { good, bad, neutral, total, positivePercentage } = props;
  //   console.log(props);

  return (
    <div>
      {total ? (
        <section className={style.statistics}>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Bad: {bad}</p>
          <p>Neutral: {neutral}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
