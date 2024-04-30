import React from "react";
import { useState } from "react";

export default function Lomake() {
    const [arvo, setArvo] = useState("")

    const handleChange = (event) => {
        setArvo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Submitted value: " + arvo)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={handleChange}
                name="arvo"
                value={arvo}
            />
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}