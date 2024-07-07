import styles from "./Card.module.css";
import sprite from "img/sprite.svg";
import {ICard} from "models/iCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dislikeCard, likeCard, removeCard } from "store/cardsSlice";

type CardProps = {
  card: ICard
}

const Card: React.FC<CardProps> = ({card}) => {
    const dispatch = useDispatch();

    const deleteCard = (event:React.MouseEvent<HTMLOrSVGElement>) => {
      event.preventDefault();
      dispatch(removeCard(card.id));
    }

    const handleAddCard = async (event:React.MouseEvent<HTMLOrSVGElement>) => {
      event.preventDefault();
      dispatch(likeCard({id: card.id}));
    }
    
    const handleDeleteCard = async (event:React.MouseEvent<HTMLOrSVGElement>) => {
      event.preventDefault();
      dispatch(dislikeCard({id: card.id}));
    }

    const toggleLike = card.isLiked ?  handleDeleteCard: handleAddCard ;

  return (
    
    <div className={styles.card}>
      <Link to={`/card/${card.id}`} id={card.id} className={styles.card__link}>
        <svg className={styles.card__delete} viewBox="0 0 24 24" height="36" width="36" xmlns="http://www.w3.org/2000/svg" onClick={deleteCard}>
          <path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z" />
        </svg>
        <div className={styles.card__item}>
          <img className={styles.card__image} src={card.image} alt="character" />
          <span className={styles.card__title}>{card.character}</span>
          <div className={styles.card__text}>{card.quote}</div>
          <svg className={styles.card__likes} onClick={toggleLike}>
            {card.isLiked ? (<use xlinkHref={`${sprite}#icon-like`} /> ) 
            : ( <use xlinkHref={`${sprite}#icon-dislike`}/>)}
          </svg>
        </div>
      </Link>
    </div>
    
  );
};

export default Card;
