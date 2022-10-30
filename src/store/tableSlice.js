import { createSlice, current } from "@reduxjs/toolkit";
const TableSlice = createSlice({
  name: "table",
  initialState: { data: null, tableArray: null, checkDiagonal: null },
  reducers: {
    setData(state, action) {
      let arr;
      let { x, y } = action.payload;

      let board = Array(Number(y))
        .fill(0)
        .map((row) => new Array(Number(x)).fill(0));
      state.tableArray = board;
      state.data = action.payload;
      state.checkDiagonal = x == y ? true : false;
    },
    updateArray(state, action) {
      let { x, y, value } = action.payload;
      let temp = current(state.tableArray);
      //state.tableArray[y][x] = value;
      console.log(state.tableArray);
      let tempX = Number(x);
      let tempY = Number(y);
      let sum = 0;
      for (let index = 0; index < Number(state.data.x); index++) {
        //only x is changing
        console.log("ii", index, y, state.tableArray[index][y], temp[index][y]);
        if (index === x) {
          sum = sum + value;
          console.log("inside if", sum, value);
        } else {
          sum = sum + state.tableArray[index][y];
        }
      }
      console.log("sumx", sum);
      if (sum <= Number(state.data.sum)) {
        sum = 0;
        for (let index = 0; index < Number(state.data.y); index++) {
          //only y is changing
          if (y === index) {
            sum = sum + value;
          } else {
            sum = sum + state.tableArray[x][index];
          }
        }
        console.log(sum, "sumy");
        if (sum <= Number(state.data.sum)) {
          //Diagonal to the right
          //state.tableArray[y][x] = value;
          sum = 0;
          console.log("before last");
          while (tempX !== 0 && tempY !== 0) {
            tempX--;
            tempY--;
          }
          while (tempX < state.data.x - 1 && tempY < state.data.y - 1) {
            if (tempX === x && tempY === y) {
              sum = sum + value;
              tempX++;
              tempY++;
            } else {
              sum = sum + state.tableArray[tempX][tempY];
              tempX++;
              tempY++;
            }
          }
          console.log(sum, "sum");
          if (sum <= Number(state.data.sum)) {
            sum = 0;
            console.log("while last");
            tempX = Number(x);
            tempY = Number(y);
            while (tempX < state.data.x - 1 && tempY !== 0) {
              //Diagonal to the left
              tempX++;
              tempY--;
            }
            //console.log(tempX, tempY, "init");
            //state.tableArray[y][x] = value;
            while (tempX >= 0 && tempY < state.data.y) {
              if (tempX === x && tempY === y) {
                sum = value;
                tempX--;
                tempY++;
              } else {
                sum = sum + state.tableArray[tempX][tempY];
                tempX--;
                tempY++;
              }
            }
            if (sum <= Number(state.data.sum)) {
              console.log("if");
              state.tableArray[x][y] = value;
            } else {
              state.tableArray[x][y] = 0;
              console.log("else1");
            }
            //state.tableArray[y][x] = value;
          }
        } else {
          state.tableArray[x][y] = 0;
          console.log("else2");
        }
      } else {
        state.tableArray[x][y] = 0;
        console.log("else3");
      }
    },
  },
});

export default TableSlice;

export const tableAction = TableSlice.actions;
