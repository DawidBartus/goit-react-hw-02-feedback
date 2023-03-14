import React from 'react';
import style from 'components/Section/Section.module.css';
import PropTypes from 'prop-types';

const Section = props => {
  const { title, children } = props;
  return (
    <div className={style.section}>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
