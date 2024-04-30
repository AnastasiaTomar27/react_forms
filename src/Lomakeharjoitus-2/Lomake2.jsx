import React from 'react';
import {useState} from 'react';

export default function Lomake2() {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: ""
        }
    );

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
            
        });  
    };

    function handleSubmit(event) {
        event.preventDefault();
        alert("Nimi: " + formData.name + ", Sähköposti: " + formData.email);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Nimi'
                onChange={handleChange}
                name='name'
                value={formData.name}
            />
            <input 
                type="email" 
                placeholder='Sähköposti'
                onChange={handleChange}
                name='email'
                value={formData.email}
            />
            <br />
            <br />
            <button>Lähetä</button>
        </form>
    )
}