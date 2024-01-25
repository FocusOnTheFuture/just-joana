import DateCalendarServerRequest from "../Calendar";
import styles from "./cardnews.module.scss";

const CardNews = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <h3>Novidades</h3>

                <h5 className={styles.title}>
                    Post 1
                </h5>
                <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur imperdiet turpis in sodales.
                </p>

                <h5 className={styles.title}>
                    Post 2
                </h5>
                <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur imperdiet turpis in sodales.
                </p>

                <h5 className={styles.title}>
                    Post 3
                </h5>
                <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur imperdiet turpis in sodales.
                </p>

            </div>
                <DateCalendarServerRequest/>
        </section>
    )
}

export default CardNews;