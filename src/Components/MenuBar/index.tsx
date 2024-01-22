import React from 'react';
import logo from '../../assets/logo.png';
import styles from "./menubar.module.scss";


// export default function MenuBar () {
//     return (
//         <ul className={menubar["menu-bar"]}>
//             <li> Trabalho </li>
//             <li> Redes sociais </li>
//         </ul>
//     )
// }

const MenuBar = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo Just Joana"></img>

            <ul className={styles["menu-bar"]}>
                <li> Trabalho </li>
                <li> Redes sociais </li>
            </ul>
        </div>
    )
}

export default MenuBar;