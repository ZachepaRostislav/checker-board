import createBoard from '../utils/create-board';
import actionCheckers from '../const/action_types';

const initialState = {
  board: []
};

const checkerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCheckers.CREATE_BOARD: {
      const board = createBoard();
      return { ...state, board }
    }
    case actionCheckers.ADD_ITEM_BOARD: {
      const board = createBoard(true);
      return { ...state, board }
    }
    default: {
      return { ...state }
    }

  }
}

export default checkerReducer;