import { FunctionComponent } from 'react';
import styles from "./Heading.module.css";

const Heading:FunctionComponent = () => {
    return(
        <h1 className={styles.heading}>The Simpsons</h1>
    )

}

export default Heading;