import Calendar from "../Calendar";
import styles from "./cardnews.module.scss";

interface NewsProps {
    labelTitle: string;
    labelText: string;
}

const CardNews: React.FC<NewsProps> = ({ labelTitle, labelText }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <h3>Novidades</h3>

                <h5 className={styles.title}>
                    { labelTitle }
                </h5>
                <p className={styles.subtitle}>
                    { labelText }
                </p>

            </div>
                <Calendar/>
        </section>
    )
}

export default CardNews;