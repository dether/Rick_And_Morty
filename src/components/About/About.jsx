import "./About.css"
import myImage from './myImage.jpg'; // Asumiendo que tienes una imagen llamada myImage.jpg en la misma carpeta que este archivo
import { Link } from "react-router-dom";
//! target="_blank" abre una pestaña nueva en el navegador
//! href="url_que_le_pasemos" en esa pestaña nueva nos redirecciona a la url que le pasemos

const About = () => {
    
    return (
        <div className="about-container">
            <div className="about-content">
                <img src={myImage} alt="Mi imagen personal" />
                <h1>Alejandro Vargas</h1>
                <p>Hola, soy un estudiante de soyHenry y este es mi primer proyecto </p>
                <ul>
                    <li>Contacto:</li>
                    <li>Dether2011@gmail.com</li>
                    <li >
                        <a className="link" href="https://www.linkedin.com/in/alejandro-vargas-b81445267/" target="_blank" >Linkedin</a> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;