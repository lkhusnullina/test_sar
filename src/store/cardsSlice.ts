import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "models/iCard";

export type CardsState = {
  cards: ICard[];
  isLoading: boolean;
}

const initialState: CardsState = {
  cards: [],
  isLoading: true,
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    setCards(state, action: PayloadAction<ICard[]>) {
      state.cards = action.payload;
      state.isLoading = false;
    },
    removeCard(state, action: PayloadAction<string>) {
      state.cards = state.cards.filter((card: ICard) => card.id !== action.payload);
    },
    likeCard(state, action: PayloadAction<string>) {
      const cardId = action.payload;
      const card = state.cards.find((card: ICard) => card.id === cardId);
   
      if (card) {
        (card as ICard).isLiked = true;
      }
    },
    dislikeCard(state, action: PayloadAction<string>){
      const cardId = action.payload;
      const card = state.cards.find((card: ICard) => card.id === cardId);
      if (card) {
        (card as ICard).isLiked = false;
      }
    },
  },
});

export const { setCards, removeCard, likeCard,  dislikeCard } = cardsSlice.actions;
export default cardsSlice.reducer;