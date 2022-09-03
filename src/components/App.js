// create your App component here
import React, {useState, useEffect} from 'react';

function App(props) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [dog, setDog] = useState()

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDog(data.message)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return (
        <div>
            <img src={dog} alt="A Random Dog" />
        </div>
    );
}

export default App;