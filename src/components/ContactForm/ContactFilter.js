import React from 'react';
import PropTypes from 'prop-types';
import s from './contactForm.module.css';

const ContactFilter = ({ value, onChange }) => (
  <label className={s.labelFilter}>
    Find contacts by name
    <input value={value} onChange={onChange}></input>
  </label>
);

ContactFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default ContactFilter;
