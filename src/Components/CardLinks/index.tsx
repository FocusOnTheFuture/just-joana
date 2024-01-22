import styles from "./cardlinks.module.scss"
import cardLinkImg from "../../assets/imgLinks.png"

const cardLinks = () => {
    return (
        <div className={styles.container}>

            <h3>Links</h3>

            <a href="https://privacy.com.br/profile/justjoanabr" aria-label="Meu privacy">
                <img src={cardLinkImg} alt="Foto de uma fruta banana descascada pela metada dentro de uma rosquinha" />

                <div className={styles.container_text}>
                    <p className={styles.title}>
                        Meu Privacy
                    </p>

                    <p className={styles.subtitle}>
                        Venha ver fotos mais exclusivas!
                    </p>
                </div>
            </a>

            <a className={styles.links_a} href="https://t.me/justjoanabr" aria-label="Meu Telegram">
                <img src={cardLinkImg} alt="Foto de uma fruta banana descascada pela metada dentro de uma rosquinha" />

                <div className={styles.container_text}>
                    <p className={styles.title}>
                        Meu Telegram
                    </p>

                    <p className={styles.subtitle}>
                        Vamos bater um papo!
                        <br></br>
                        @justjoanabr
                    </p>
                </div>
            </a>

            <a href="#" aria-label="Meu Pix">
                <img src={cardLinkImg} alt="Foto de uma fruta banana descascada pela metada dentro de uma rosquinha" />

            <div className={styles.container_text}>
                <p className={styles.title}>
                    Meu Pix
                </p>
                <p className={styles.subtitle}>
                    pixdajust@gmail.com
                </p>
            </div>
            </a>
        </div>
    )
} 

export default cardLinks