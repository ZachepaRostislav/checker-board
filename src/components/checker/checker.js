import React, { Component } from 'react';

// styles
import styles from './checker.module.scss';

export default class Checker extends Component {
  render() {
    const { isActive, checkerIsBlack } = this.props;
    return (
      <div className={` ${isActive ? styles.checker : ""} ${checkerIsBlack ? styles.black : styles.white}`}>
      </div>
    )
  }
}
