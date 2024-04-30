import { useState } from "react";

export default function Form2() {
    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
            confirmPassword: "",
            wantNewsletter: true
        }
    );

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.confirmPassword) {
             console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
            
        {formData.wantNewsletter && console.log("Thanks for signing up for our newsletter!")}
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input 
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <input 
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            <div className="form--marketing">
                <input 
                    type="checkbox"
                    name="wantNewsletter"
                    checked={formData.wantNewsletter}
                    onChange={handleChange}
                    id="id"
                />
                <label htmlFor="id">I want to join the newsletter</label>
            </div>
            
            <br />
            <br />
            <button>Sign up</button>

        </form>
    )

}