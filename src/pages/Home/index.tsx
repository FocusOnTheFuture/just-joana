import React from "react";
import MenuSearch from "../../Components/MenuSearch";
import Card from "../../Components/CardSocialMedia";
import styles from "./home.module.scss";
import CardLinks from "../../Components/CardLinks";
import CardFeed from "../../Components/CardFeed";
import CardNews from "../../Components/CardNews";




const Home = () => {

    return (

        <div className={styles.container}>

            <main className={styles.main}>
                <div className={styles.leftSide}>
                    <CardNews labelTitle={"Post"} labelText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur imperdiet turpis in sodales."}/>
                </div>

                <div className={styles.cardSocialMedia}>
                    <Card/>
                    <CardFeed />
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

export default Home;