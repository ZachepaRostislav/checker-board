import createBoard from '../utils/create-board';
import actionCheckers from '../const/action_types';

const initialState = {
  board: [],
  initialStep: false,
  counter: -1,
};

const checkerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCheckers.CREATE_BOARD: {
      console.log('CREATE_BOARD')
      const board = createBoard();
      return { ...state, board }
    }

    case actionCheckers.ADD_ITEM_BOARD: {
      console.log('ADD_ITEM_BOARD')
      const board = state.board.slice();
      board[7].forEach((item, index) => {
        if (item.isItemBlack) {
          board[7][index].isItemStep = true;
        }
      })
      return { ...state, board, counter: 0 }
    }

    case actionCheckers.CHECKER_MOVE_SELECTION: {
      console.log('CHECKER_MOVE_SELECTION')
      const board = state.board.slice();
      let counter = { ...state }.counter;
      const { row, cell } = action.payload;
      const isChecker = board[row][cell].isItemActive;

      if (counter === 0) {
        board[7].forEach((item, index) => {
          if (item.isItemBlack) {
            board[7][index].isItemStep = false;
          }
        })


        board[row][cell].isItemActive = true;

        board[0].forEach((item, index) => {
          if (item.isItemBlack) {
            board[0][index].isItemStep = true;
          }
        })
        counter++
      }

      else if (counter === 1) {
        board[0].forEach((item, index) => {
          if (item.isItemBlack) {
            board[0][index].isItemStep = false;

          }
        })

        board[row][cell].isItemActive = true;

        counter++

      }

      else if (counter > 1 && isChecker) {
        const isCheckerWhite = !board[row][cell].checker.isBlack;
        if (counter % 2 === 0 && isCheckerWhite) {
          if (+cell === 0) {
            board[+row - 1][+cell + 1].isItemStep = true
          }
          else if (+cell === 7) {
            board[+row - 1][+cell - 1].isItemStep = true
          }
          else {
            board[+row - 1][+cell + 1].isItemStep = true
            board[+row - 1][+cell - 1].isItemStep = true
          }
        } else {
          if (+cell === 0) {
            board[+row + 1][+cell - 1].isItemStep = true
          }
          else if (+cell === 7) {
            board[+row + 1][+cell + 1].isItemStep = true
          }
          else {
            board[+row + 1][+cell - 1].isItemStep = true
            board[+row + 1][+cell + 1].isItemStep = true
          }
        }
        // board[0].forEach((item, index) => {
        //   if (item.isItemBlack) {
        //     board[0][index].isItemStep = false;

        //   }
        // })

        board[row][cell].isItemActive = true;

        counter++

      }


      return { ...state, board, counter }
    }

    case actionCheckers.STEP_ITEM_BOARD: {
      console.log('STEP_ITEM_BOARD')
      const { row, cell } = action.payload
      const board = state.board.slice();
      if (board[row][cell].isItemActive) {
        const newBoardItem = Object.assign(board[row][cell], { isItemActive: false, isItemStep: true })
        board[+row + 1][+cell + 1] = { ...newBoardItem }
      } else {
        board[+row + 1][+cell + 1] = { ...board[row][cell], isItemActive: false, isItemStep: false }
      }
      // board[+row + 1][+cell + 1] = { ...board[row][cell], isItemActive:false, ...(board[row][cell].isItemActive ? { isItemStep: true } : { isItemStep: false }) }
      board[+row + 1][+cell - 1] = { ...board[row][cell], isItemActive: false, ...(board[row][cell].isItemActive ? { isItemStep: true } : { isItemStep: false }) }
      return { ...state, board }
    }
    default: {
      return { ...state }
    }

  }
}

export default checkerReducer;