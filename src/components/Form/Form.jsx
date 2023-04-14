import React from "react";
import { useState } from "react";
import validate from "../Utility/validate";
import "./Form.css"; // importar el archivo CSS

const Form = ({login}) => {

    const [userData, setUserData] = useState({
    email: "",
    password: "",
    });

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value,
    });
    setErrors(validate({
        ...userData,
        [event.target.name]: event.target.value
    }))
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData);
    }

    return (
        <div>
            <img src="https://playbyplaytoys.es/wp-content/uploads/2021/01/rickymorty_bleed.png" className="header-image" alt="Imagen del encabezado" />
        <form onSubmit={handleSubmit}>
            <div className="form-container">
            <h1 className="login-container">Login</h1>
            <label htmlFor="email" className="form-label">Usuario:</label>
            <input
                name="email"
                type="email"
                placeholder="Ingrese su email"
                value={userData.email}
                onChange={handleChange}
                className="form-input"
            />
            {errors.email && <p className="error-container">{errors.email}</p>}
            <label htmlFor="password" className="form-label">Password:</label>
            <input
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                value={userData.password}
                onChange={handleChange}
                className="form-input"
            />
            {errors.password && <p className="error-container">{errors.password}</p>}
            <button className="form-button">Submit</button>
        </div>
    </form>
    </div>
    );
};
export default Form;
