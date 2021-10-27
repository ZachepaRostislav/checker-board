import React, { Component } from 'react';

// @material
import { Toolbar } from '@mui/material';

// styles
import style from './history.module.scss';

export default class HistoryStep extends Component {
  render() {
    const { counter } = this.props;
    return (
      <>
        <Toolbar className={style.counter}>
          {counter}
        </Toolbar>
      </>
    )
  }
}
