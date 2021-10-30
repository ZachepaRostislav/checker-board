import React, { Component } from 'react';

// @material
import { Button } from '@mui/material';

export default class Options extends Component {

  handleClick = () => {
    const { nameBtn, onBtnClick } = this.props;
    onBtnClick(nameBtn.toUpperCase())
  }

  render() {
    const { nameBtn, isStart } = this.props;
    const { handleClick } = this;    

    return (
      <Button variant="contained" size="large" onClick={handleClick}>
        {nameBtn === 'start' && !isStart ? 'restart' : nameBtn}
      </Button>
    )
  }
}
