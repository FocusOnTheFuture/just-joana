import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
    label: string;
    onClick?: () => void; // A função é opcional (pode ou não ser passada)
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
      <button className={styles.button} onClick={onClick}>
        <div className={styles.label}>
          {label}
        </div>
      </button>
    );
  };
  
export default Button;