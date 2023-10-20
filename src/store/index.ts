import { configureStore } from '@reduxjs/toolkit';

import notes from '../components/noteList/notesSlice';

const store = configureStore({
  reducer: {notes },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;