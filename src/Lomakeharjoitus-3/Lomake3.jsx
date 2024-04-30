import React from "react";
import {useState} from 'react';

const Lomake3 = () => {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            role: ""
        }
    );

    function handleSubmit(event) {
        event.preventDefault()
        alert("Nimi: " + formData.name + ", Sähköposti: " + formData.email + ", Rooli: " +formData.role);
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
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

export default Lomake3;
