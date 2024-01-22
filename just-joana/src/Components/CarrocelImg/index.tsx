import carrocelimg from "./carrocelimg.module.scss";
import logo512 from "../../assets/logo192.png";

export default function CarrocelImg () {
    return (
        <>
            <div id="carousel-container">
                <div className={carrocelimg["carousel-slide"]}>
                    <img src={logo512} alt="Imagem 1"/>
                </div>
                <div className={carrocelimg["carousel-slide"]}>
                    <img src={logo512} alt="Imagem 2"/>
                </div>
                <div className={carrocelimg["carousel-slide"]}>
                    <img src={logo512} alt="Imagem 3"/>
                </div>

                {/* Adicione mais slides conforme necessário  */}

                {/* <button id="prevBtn" onClick="changeSlide(-1)">Anterior</button>
                <button id="nextBtn" onclick="changeSlide(1)">Próximo</button> */}
            </div>

            <script src="script.js"></script>
        </>
    )
}
