import React, { Component } from 'react';

// styles
import styles from './checker.module.scss';

export default class Checker extends Component {
  render() {
    const { isBlack } = this.props;    
    return (
      <div className={`${styles.checker} ${isBlack ? styles.black : styles.white}`}>
      </div>
    )
  }
}
