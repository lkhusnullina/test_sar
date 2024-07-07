import { useSelector } from "react-redux";
import { RootState } from 'store/store';
import styles from "./CardPage.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICard } from "models/iCard";
import Heading from "components/Heading/Heading";

export const CardPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const cards = useSelector((state: RootState) => state.cards.cards);
    const [card, setCard] = useState<ICard | null>(null);

    useEffect(() => {
        const crd = cards.find((item: ICard) => item.id === id);
        if (crd) {
            setCard(crd)
        } else {
            navigate('/404')
        }
    }, [cards, id, navigate])

    return (
        <>
        <Heading/>
        <div className={styles.cardPage__block}>
            <img className={styles.cardPage__image} src={card?.image} alt={card?.character} />
            <div className={styles.cardPage__description}>
                <h1 className={styles.cardPage__title}>{card?.character}</h1>
                <div className={styles.cardPage__text}>{card?.quote}</div>
                <Link className={styles.cardPage__link} to='/'>Вернуться на главную</Link>
            </div>
        </div>
        
        </>
    )

}