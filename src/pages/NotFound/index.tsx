import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import styles from "./notfound.module.scss";
import NotFoundImg from "../../assets/NotFoundImg.png";



const NotFound = () => {

    const navigate = useNavigate() ;

    return (
        <div className={styles.container}>

            <img src={ NotFoundImg } alt="Mulher se arrumando" />
            <div className={styles.title}>
                <h1>Ops! Não encontramos essa página</h1>

                {/* <Link to="/">
                    <Button label={"Voltar para a página principal"} />
                </Link> */}

                <Button label={"Voltar para a página anterior"} onClick={ () => navigate(-1) }/>

            </div>
        </div>
    )
}

export default NotFound;