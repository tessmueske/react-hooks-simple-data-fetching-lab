import React, { useState, useEffect } from "react";

function App(){

const [dogBreed, setDogBreed] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then(data => setDogBreed(data.message))
    }, [])

    if (!dogBreed){
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src={dogBreed} alt="A Random Dog"></img>
        </div>
    )
}

export default App;