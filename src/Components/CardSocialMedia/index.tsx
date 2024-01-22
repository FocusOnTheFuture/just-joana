import React from "react";
import styles from "./cardsocialmedia.module.scss";
import miniLogo from "../../assets/miniLogo.png";
import twitterLogo from "../../assets/twitter.png";
import instagramLogo from "../../assets/instagram.png";
import telegramLogo from "../../assets/telegram.png";

const card = () => {
    return (
        <div className={styles.container}>
            
            <img src={miniLogo} alt="Mini logo Just Joana" className={styles.imgMiniLogo}/>

            <ul className={styles.text}>
                <li>Just Joana</li>
                <li>Sex Worker</li>
                <li className={styles.socialmedia}>Mídias Sociais</li> 
            </ul>

            <div className={styles.links}>
                <a href="https://www.twitter.com/justjoanabr" aria-label="Ir para Twitter">
                    <img src={twitterLogo} alt="Ir para Twitter" />
                </a>

                <a href="https://www.instagram.com/justjoanaofc?igsh=MW00MmRveHVxeGIzNw==" aria-label="Ir para Instagram">
                    <img src={instagramLogo} alt="Ir para Instagram" />
                </a>

                <a href="https://t.me/justjoanabr" aria-label="Ir para Telegram">
                    <img src={telegramLogo} alt="Ir para Telegram" />
                </a>

            </div>

        </div>
    )
}

export default card;
