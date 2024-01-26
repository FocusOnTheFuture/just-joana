import React from "react";
import styles from "./textfeed.module.scss"

interface textProps {
    label: string;
}

const TextFeed: React.FC<textProps> = ({ label }) => {

    return (
        <div className={styles.container}>
            <p>
                {label}
            </p>
        </div>
    )
}

export default TextFeed;