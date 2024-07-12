// Import data
import { swapi as apiFetch} from './services/sw-api';
import Nav from './components/Nav';
import Card from './components/Card';

// Import modules
import { useState, useEffect } from 'react';
import './App.css'

function App() {
    // Invoke api fetch function and store starship values
    // const data = apiFetch();
    // State to hold starship data 
    const [starships, setStarships] = useState(null);
    // console.log(starships)
    
    useEffect(()=>{
        let data =  apiFetch();
        console.log(data)
        setStarships(data);
    }, [])

    return (
        <>
            {/* <Nav /> */}
            <Card starships={starships} />
        </>
    )
}

export default App