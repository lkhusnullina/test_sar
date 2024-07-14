import { AppRoutes } from 'routes';
import './index.css';
import { useEffect } from 'react';
import { setCards } from 'store/cardsSlice';
import { GetAllCards } from 'utils/api';
import { useAppDispatch } from 'hooks';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    GetAllCards().then(cards => {
      dispatch(setCards(cards))
    });
  },)

  
  return (
    <div className="container">
      <AppRoutes />
    </div>
  );
}

export default App;
