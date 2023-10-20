import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PopupState {
  popupIsActive: boolean
}

const initialState: PopupState = {
  popupIsActive: false
}


export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    changePopupStatus: (state, action: PayloadAction<boolean>) => {
      state.popupIsActive = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { changePopupStatus } = popupSlice.actions

export default popupSlice.reducer