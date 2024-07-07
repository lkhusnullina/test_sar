import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cardsSlice';

const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
});


export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;