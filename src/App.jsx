// Import data
import { swapi as apiFetch} from './services/sw-api';
import Nav from './components/Nav';
// Import modules
import { useState } from 'react';
import './App.css'

function App() {
    // Initiate api fetch function and store starship values
    const data = apiFetch();
    // State to hold starship data 
    const [starships, setStarships] = useState(data);
    console.log(starships)

    return (
        <>
            <Nav />
        </>
    )
}

export default App