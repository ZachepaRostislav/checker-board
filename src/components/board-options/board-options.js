import React, { Component } from 'react';

// components
import { Grid } from '@mui/material';
import Options from '../options/options';
import { connect } from 'react-redux';

// const 
import { arrOptions } from '../../const/const';
import actionCheckers from '../../const/action_types';


class BoardOptions extends Component {

  state = {
    isStart: true,
  }

  handleOptionClick = (option) => {
    switch (option) {
      case 'START' || 'RESTART': {
        this.setState({ ...this.state, isStart: false })
        this.props.addChecker()
        break;
      }
      default: {
        console.log('you click me')
      }
    }
  }

  render() {
    return (
      <Grid container item xs={12} style={{ padding: '20px' }}>
        {arrOptions.map(item => <Grid item xs style={{
          display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around'
        }} key={item}>
          <Options nameBtn={item} isStart={this.state.isStart} onBtnClick={this.handleOptionClick} />
        </Grid>)}
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChecker: () => {
      dispatch({ type: actionCheckers.ADD_ITEM_BOARD })
    }
  }
}

export default connect(null, mapDispatchToProps)(BoardOptions);