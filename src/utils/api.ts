import axios from 'axios';
import { ICard } from 'models/iCard';

const GET_ALL = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=';

export async function GetAllCards(limit: number = 21): Promise<ICard[]> {
    const response = await axios.get(GET_ALL + limit);
    if (response && response.status === 200)
        return response.data.map((card: ICard, index: number) => {return {...card, id: `simps${index}`, isLiked: false}});
    return [];
}
