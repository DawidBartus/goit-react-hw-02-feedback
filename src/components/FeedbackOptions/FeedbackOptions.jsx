import React from 'react';
import style from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  const names = Object.keys(options);

  return (
    <section className={style.buttons}>
      {names.map(name => {
        return (
          <button key={name} name={name} onClick={onLeaveFeedback}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        );
      })}
    </section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
