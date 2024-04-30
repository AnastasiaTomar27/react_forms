import React from "react";
import {useState} from 'react';

const Lomake4 = () => {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            role: ""
        }
    );
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        if (!email.includes("@")) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                error: 'Sähköpostin tulee sisältää "@"',
            }));
            return false;
        }
        setErrors((prevErrors) => ({...prevErrors, error: null}));
        return true;
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
        }));
        if (name === "email") {
            validateEmail(value);
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (validateEmail(formData.email)) {
            alert(
                `Name: ${formData.name}, Email: ${formData.email}, Role: ${formData.role}`
            )
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nimi"
                onChange={handleChange}
                value={formData.name}
            />
            <input
                type="email"
                name="email"
                placeholder="Sähköposti"
                onChange={handleChange}
                value={formData.email}
            />

            {errors.error && <div style={{color: "red"}}>{errors.error}</div>}
            
            <select 
                name="role" 
                value={formData.role}
                onChange={handleChange}
                >
                <option value="">Valitse Rooli</option>
                <option value="Opiskelija">Opiskelija</option>
                <option value="Opettaja">Opettaja</option>
                <option value="The Last Jedi">The Last Jedi</option>
                <option value="Muu">Muu</option>
            </select>
            <br />
            <br />
            <button>Lähetä</button>
        </form>
    )
}

export default Lomake4;
