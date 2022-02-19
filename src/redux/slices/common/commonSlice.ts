

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface commonState {
  value: {
    openMenu: boolean
  }
}


const initialState: commonState = {
  value: {
    openMenu: true
  },
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setOpenMenu: (state, action: PayloadAction<boolean>) => {
      const value = action.payload
      return {
        ...state,
        value: {
          ...state.value,
          openMenu: value
        }
      }
    },

  }
})

export const { setOpenMenu, } = commonSlice.actions

export default commonSlice.reducer
