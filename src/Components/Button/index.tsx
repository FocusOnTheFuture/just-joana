import styles from "./button.module.scss";

const Button = (props: { label: string; }) => {
    const { label } = props;

    return (
        <button className={styles.button}>
            {label}
        </button>
    )
}

export default Button;