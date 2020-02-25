import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.css';

const Display = props => (
  <div className={styles.display} clildren = {props.children} />
);

Display.defaultProps = {
  children: '',
}

Display.propTypes = {
  children: PropTypes.string

};

export default Display;