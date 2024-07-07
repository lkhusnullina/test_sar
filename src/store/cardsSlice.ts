import { createSlice } from "@reduxjs/toolkit";
import { ICard } from "models/iCard";

export type CardsState = {
  cards: ICard[]
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    isLoading: true,
  },
  reducers: {
    setCards(state, action) {
      state.cards = action.payload.cards;
      state.isLoading = false;
    },
    removeCard(state, action) {
      state.cards = state.cards.filter((card: ICard) => card.id !== action.payload);
    },
    likeCard(state, action) {
      const cardId = action.payload.id;
      const card = state.cards.find((card: ICard) => card.id === cardId);
   
      if (card) {
        (card as ICard).isLiked = true;
      }
    },
    dislikeCard(state, action){
      const cardId = action.payload.id;
      const card = state.cards.find((card: ICard) => card.id === cardId);
      if (card) {
        (card as ICard).isLiked = false;
      }
    },
  },
});

export const { setCards, removeCard, likeCard,  dislikeCard } = cardsSlice.actions;
export default cardsSlice.reducer;