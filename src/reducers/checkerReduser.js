import createBoard from '../utils/create-board';
import actionCheckers from '../const/action_types';

const initialState = {
  board: [],
  isGameOver: false,
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
      const isGameOver = state.isGameOver;
      let counter = { ...state }.counter;
      const { row, cell } = action.payload;
      const isChecker = board[row][cell].isItemActive;
      const isActiveBoardItem = board[row][cell].isItemStep;
      if (isGameOver) {
        alert('game over press restart')       
        return { ...state, board }
      } 
      if (counter === 0) {
        if (board[row][cell].isItemStep) {
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
      }

      else if (counter === 1) {
        if (board[row][cell].isItemStep) {
          board[0].forEach((item, index) => {
            if (item.isItemBlack) {
              board[0][index].isItemStep = false;
            }
          })

          board[row][cell].isItemActive = true;
          board[row][cell].checker.isBlack = true;

          counter++
        }
      }

      else if (counter > 1 && isChecker) {
        const isCheckerWhite = !board[row][cell].checker.isBlack;       
        if (counter % 2 === 0 && isCheckerWhite) {
          board[row][cell].checker.isActive = true
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
          const isCheckerWhite = board[row][cell].checker.isBlack;
          if (isCheckerWhite) {
            board[row][cell].checker.isActive = true
            if (+cell === 0) {
              board[+row + 1][+cell + 1].isItemStep = true
            }
            else if (+cell === 7) {
              board[+row + 1][+cell - 1].isItemStep = true
            }
            else {
              board[+row + 1][+cell - 1].isItemStep = true
              board[+row + 1][+cell + 1].isItemStep = true
            }
          }
        }

        board[row][cell].isItemActive = true;

      } else if (counter > 1 && isActiveBoardItem) {
        const isCheckerWhite = !board[row][cell].checker.isBlack;
        if (counter % 2 === 0 && isCheckerWhite) {

          board.forEach(item => {
            item.forEach(elem => {
              elem.isItemStep = false
              if (!elem.checker.isBlack) {
                elem.isItemActive = false
                elem.checker.isActive = false
              }
            })
          })
          board[row][cell].isItemActive = true;
          board[row][cell].checker.isBlack = false;

          if (+row === 0) {
            alert('white win')
            return { ...state, board, isGameOver: true }
          }

        } else {
          board.forEach(item => {
            item.forEach(elem => {
              elem.isItemStep = false
              if (elem.checker.isBlack) {
                elem.isItemActive = false
                elem.checker.isActive = false
              }
            })
          })

          board[row][cell].isItemActive = true;
          board[row][cell].checker.isBlack = true;

          if (+row === 7) {
            alert('black win')
            return { ...state, board, isGameOver: true }
          }
        }

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