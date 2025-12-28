//using the react hook //
import React, {useState} from 'react';


function MyComponent(){
    const  [name, setName] = useState("Guest");
    const  [age, setAge] = useState(0);
    const  [employed, setemployed] = useState(false);
   
    const updateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployeStatus = () => {
        setemployed(!employed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

             <p> employed: {employed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployeStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent