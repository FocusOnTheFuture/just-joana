import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import styles from "./notfound.module.scss";
import NotFoundImg from "../../assets/NotFoundImg.png";


const NotFound = () => {
    return (
        <div className={styles.container}>

            <img src={ NotFoundImg } alt="Mulher se arrumando" />
            <div className={styles.title}>
                <h1>Ops! Não encontramos essa página</h1>

                <Link to="/">
                    <Button label={"Voltar para a página principal"} />
                </Link>
            </div>
        </div>
    )
}

export default NotFound;