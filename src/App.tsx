import { AppRoutes } from 'routes';
import './index.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCards } from 'store/cardsSlice';
import { GetAllCards } from 'utils/api';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    GetAllCards().then(cards => {
      dispatch(setCards({cards}))
    });
  },)

  
  return (
    <div className="container">
      <AppRoutes />
    </div>
  );
}

export default App;
