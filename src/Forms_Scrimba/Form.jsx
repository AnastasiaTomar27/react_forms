import React from "react";
import { useState, useId } from "react";

export default function Form() {
    const [formData, setFormData] = useState(
        {
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "", 
        onTaysiIkainen: true,
        employment: "",
        favColor:""
        }

    );

    const id = useId()

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                //[event.target.name]: event.target.value
                //[name]: value
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        //submitToApi(formData)
        console.log(formData)
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={id + "-etunimi"}>Etunimi</label>
            <input
                type="text" 
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                id={id + "-etunimi"}
                
            />
            <label htmlFor={id + "-sukunimi"}>Sukunimi</label>
            <input
                type="text" 
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                id={id + "-sukunimi"}
            />
            <label htmlFor={id + "-sahkoposti"}>Sähköposti</label>
            <input
                type="email" 
                onChange={handleChange}
                name="email"
                value={formData.email}
                id={id + "-sahkoposti"}
            />

            {/* Textarea */}
            <textarea 
                value={formData.comments}
                onChange={handleChange}
                name="comments"
            />

            {/* Input type: Checkbox */}
            <input 
                type="checkbox"
                id={id + "-onTaysiIkainen"}
                checked={formData.onTaysiIkainen}
                onChange={handleChange}
                name="onTaysiIkainen"
             />
            <label htmlFor={id + "-onTaysiIkainen"}>Oletko täysi-ikäinen?</label>
            
            <br />
            <br />

             {/* Input type: radio  */}
             <fieldset>
                <legend>Nykyinen työllisyystilanne</legend>
                    <input 
                        type="radio" 
                        id={id + "-tyoton"}
                        name="employment" 
                        value="työtön" 
                        onChange={handleChange}  
                        checked={formData.employment === "työtön"}  
                    />
                    <label htmlFor={id + "-tyoton"}>Työtön</label>
                    <br />

                    <input 
                        type="radio" 
                        id={id + "-osaaikainen"}  
                        name="employment" 
                        value="osaaikainen" 
                        onChange={handleChange}
                        checked={formData.employment === "osaaikainen"}  
                    />
                    <label htmlFor={id + "-osaaikainen"}>Osaaikainen</label>
                    <br />

                    <input 
                        type="radio" 
                        id={id + "-kokoaikainen"}  
                        name="employment"  
                        value="kokoaikainen"  
                        onChange={handleChange}
                        checked={formData.employment === "kokoaikainen"}  
                    />
            <label htmlFor={id + "-kokoaikainen"}>Kokoaikainen</label>
            <br />
    
            </fieldset>
            <br />

            {/* Select */}
            <label htmlFor={id + "-favColor"}>Minkä on sinun lempiväri?</label>
            <br />
            <select
                 id={id + "-favColor"}
                 value={formData.favColor}
                 onChange={handleChange}
                 name="favColor"
                 >
                <option value="">-- Choose --</option>
                <option value="punainen">Punainen</option>
                <option value="oranssi">Oranssi</option>
                <option value="keltainen">Keltainen</option>
                <option value="vihrea">Vihreä</option>
                <option value="sininen">Sininen</option>
                <option value="indigo">Indigo</option>
                <option value="violetti">Violetti</option>
            </select>
            <br />
            <br />
            <button>Lähetä</button>
        </form>
    )
}