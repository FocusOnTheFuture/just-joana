import styles from "./button.module.scss";

const Button = (props: { label: string; }) => {
    const { label } = props;

    return (
        <button className={styles.button}>
            <div className={styles.label}>
                {label}
            </div>
        </button>
    )
}

export default Button;