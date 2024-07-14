import Cards from "components/Cards/Cards";
import Heading from "components/Heading/Heading";
import { RootState } from 'store/store';
import { useSelector } from "react-redux";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  const isLoading = useSelector((state: RootState) => state.cards.isLoading);
  return (
    <>
      <Heading/>
      {isLoading ? <div className={styles.loading__text}>Идет загрузка...</div> : <Cards/>}
    </>
  );
};
