import React from "react";
import MenuBar from "../../Components/MenuBar";
import MenuSearch from "../../Components/MenuSearch";
import CarrocelImg from "../../Components/CarrocelImg";
import Card from "../../Components/CardSocialMedia";
import styles from "./home.module.scss";
import CardLinks from "../../Components/CardLinks";
import CardFeed from "../../Components/CardFeed";
import CardNews from "../../Components/CardNews";



export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <MenuBar/>
                {/* <Button label={"Publicar"}/> */}
            </header>

            <main className={styles.main}>
                <div className={styles.leftSide}>
                    <CardNews/>
                </div>

                <div className={styles.cardSocialMedia}>
                    <Card/>
                    <CardFeed/>
                </div>
                <div className={styles.rightSide}>
                    <MenuSearch/>
                    <CardLinks/>
                </div>
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}

