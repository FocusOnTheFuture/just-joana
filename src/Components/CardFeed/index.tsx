import React from "react";
import photoFeed from "../../assets/logo.png";
import styles from "./cardfeed.module.scss";
import TextFeed from "./TextFeed";
import CommentSection from "../CommentSection";


export default function cardFeed() {
    return (
        <>
            <section className={styles.container}>
                <img className={styles.imgFeed} src={photoFeed} alt="Imagem do Feed" />

                <span>
                    <p>By <strong>Just Joana</strong></p>
                </span>
            </section>

            <TextFeed label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur imperdiet turpis in sodales."}/>

            {/* IMPLEMENTAÇÃO DOS COMENTÁRIOS: */}
            {/* <CommentSection/> */}
        </>
    )
}