import Card from 'components/Card/Card';
import { FunctionComponent, useEffect, useState } from 'react';
import styles from "./Cards.module.css";
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { ICard } from 'models/iCard';
import classNames from 'classnames'


const Cards:FunctionComponent = () => {
    const cards = useSelector((state: RootState) => state.cards.cards);
    const [fav, setFav] = useState(false);
    const [filtred, setFiltred] = useState<ICard[]>([]);
    const cn = classNames({
        [styles.favoriteCards__button]: true,
        [styles.favoriteCards__button_active]: fav,
      })

    useEffect(() => {
        if(fav) {
            setFiltred(cards.filter((item: ICard) => item.isLiked === true));
        } else {
            setFiltred(cards);
        }
    }, [cards, fav]);

    const favSwitcher = () => {
        setFav(!fav);
    }

    return (
        <>
            <button className={cn} onClick={favSwitcher}>Избранные карточки</button>
            <div className={styles.cards__block}>
                {!filtred || filtred.length < 1 ? (fav ? <span className={styles.cards__span}>Нет избранных карточек</span> : <span className={styles.cards__span}>Нет данных</span>) :
                filtred.map((card: ICard)=> <Card key={card.id} card={card}></Card>)}
            </div>
        </>
    )
}

export default Cards;