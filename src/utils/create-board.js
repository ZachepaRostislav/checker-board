const createBoard = () => {
  const matrix = []
  const length = 8;

  for (let row = 0; row < length; row++) {
    matrix.push([]);
    for (let col = 0; col < length; col++) {
      const boardItem = {
        isItemBlack: false,
        isItemActive: false,
        checker: {
          isBlack: false,
          isActive: false
        }
      }
      if (row < 3) {
        if (row % 2 === 0) {
          if (col % 2 === 0) {
            matrix[row].push(boardItem)
          } else {
            matrix[row].push({
              ...boardItem, isItemBlack: true, isItemActive: true, checker: {
                isBlack: true,
                isActive: false
              }
            })
          }
        } else {
          if (col % 2 === 0) {
            matrix[row].push({
              ...boardItem, isItemBlack: true, isItemActive: true, checker: {
                isBlack: true,
                isActive: false
              }
            })
          } else {
            matrix[row].push(boardItem)
          }
        }
      } else if (row > 2 && row < 5) {
        if (row % 2 === 0) {
          if (col % 2 === 0) {
            matrix[row].push(boardItem)
          } else {
            matrix[row].push({ ...boardItem, isItemBlack: true, isItemActive: false })
          }
        } else {
          if (col % 2 === 0) {
            matrix[row].push({ ...boardItem, isItemBlack: true, isItemActive: false })
          } else {
            matrix[row].push(boardItem)
          }
        }
      } else if (row > 4) {
        if (row % 2 === 0) {
          if (col % 2 === 0) {
            matrix[row].push(boardItem)
          } else {
            matrix[row].push({
              ...boardItem, isItemBlack: true, isItemActive: true, checker: {
                isBlack: false,
                isActive: false
              }
            })
          }
        } else {
          if (col % 2 === 0) {
            matrix[row].push({
              ...boardItem, isItemBlack: true, isItemActive: true, checker: {
                isBlack: false,
                isActive: false
              }
            })
          } else {
            matrix[row].push(boardItem)
          }
        }
      }
    }
  }
  return matrix
}

export default createBoard;