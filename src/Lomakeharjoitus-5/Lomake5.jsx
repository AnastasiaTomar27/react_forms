import { useState } from "react";

export default function Lomake5() {
    const [hobbies, setHobbies] = useState([])

    function handleAddHobby() {
        setHobbies([...hobbies, ""]);
    };

    function handleHobbyChange(index, event){
        const newHobbies = hobbies.map((hobby, i) => {
          
            if (i === index) {
                console.log("yes")
                return event.target.value;
            }
            console.log("no")
            return hobby;
        });
        console.log(`new ${newHobbies}`)

        setHobbies(newHobbies);
        console.log(hobbies)
    };

    function handleSubmit(event) {
        event.preventDefault();
        alert("Hobbies: " + hobbies.join(", "));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            {hobbies.map((hobby, index) => (
                    <input 
                        key={index}
                        type="text" 
                        value={hobby}
                        onChange={(event) => handleHobbyChange(index, event)}
                    />
            ))}
           </div>
           <button type="button" onClick={handleAddHobby}>
                Lisää harrastus
           </button>
           <br />
           <br />
           <button type="submit">Lähetä</button>
        </form>

    )

}