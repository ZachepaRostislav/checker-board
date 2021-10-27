import React, { Component } from 'react';

//styles
import styles from './board-item.module.scss';

export default class BoardItem extends Component {

  render() {

    const { item } = this.props
    return <div className={styles.boardItem}>{item}</div>
  }
}
