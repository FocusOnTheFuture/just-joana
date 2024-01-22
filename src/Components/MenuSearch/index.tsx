import React from "react";
import styles from "./menusearch.module.scss";

const MenuSearch = () => {
    return (
        <>
            <head>
                <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
            </head>

            <body className={styles.container_search}>
                <div className={styles["search-container"]}>
                    <input type="text" name="search" placeholder="O que procura?" className={styles["search-input"]}/>
                    <a href="#" className={styles["search-btn"]}>
                            <i className={styles["fas fa-search"]}></i>
                    </a>
                </div>
            </body>
        </>
    )
}

export default MenuSearch;
