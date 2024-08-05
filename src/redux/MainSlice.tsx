import {createSlice} from '@reduxjs/toolkit';

interface initialValType {
  token: string;
  apps: Array<any>;
}

export const mainSliceInitialValue: initialValType = {
  token: '',
  apps: [],
};

const MainSlice = createSlice({
  name: 'main',
  initialState: mainSliceInitialValue,
  reducers: {
    saveToken(state, action) {
      state.token = action.payload;
    },
    saveApps(state, action) {
      state.apps = action.payload;
    },
  },
});

export const {saveToken, saveApps} = MainSlice.actions;

export default MainSlice.reducer;
