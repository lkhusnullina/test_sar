import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
    return (
        <div className={styles.notfound__block}>
            <h1 className={styles.notfound__title}>Страница не найдена</h1>
            <Link className={styles.notfound__link} to='/'>Вернуться на главную</Link>
        </div>
    )

}