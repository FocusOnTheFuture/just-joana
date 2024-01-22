import React from "react";
import MenuBar from "../../Components/MenuBar";
import MenuSearch from "../../Components/MenuSearch";
import CarrocelImg from "../../Components/CarrocelImg";
import Card from "../../Components/CardSocialMedia";
import styles from "./home.module.scss";
import CardLinks from "../../Components/CardLinks";
import CardFeed from "../../Components/CardFeed";


export default function Home() {
    return (
        <>
            <header className={styles.header}>
                <MenuBar/>
            </header>

            <main className={styles.main}>
                <div className={styles.leftSide}>
                    <CardLinks/>
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
        </>
    )
}

