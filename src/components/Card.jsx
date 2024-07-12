import Starship from "./Starship";
import { useRef, useEffect, useState } from "react";


function Card({ starships }) {
    // const shipRef = useRef('')
    // const [shipname, setShipname] = useState(null)
    // console.log(starships)

    // function getName() {
    //     {starships.map((ship, i) => {
    //         console.log(`Card component ${ship.name}`)
    //         shipRef.current = ship.name
    //         setShipname(shipName);
    //         console.log(`Card State ${shipname}`);
    //         <Starship ship={shipRef} />
    //     })};

    // }

    // function getName(starships){
    //     starships.forEach(ship => {
    //         <Starship ship={ship.name}/>
    //         console.log("Map working")

    //     })

    // let test1 = [
    //     { name: "1 djkfjdkf" },
    //     { name: "2 fdf" },
    //     { name: "3 dffdfdjkfjdkf" },
    //     { name: "4 fdff" }
    // ]

    // const [counter, setCounter] = useState(0)


    // useEffect(() => {
    //     if (counter < 1) {
    //         setCounter(counter + 1)
    //     }

    // }, [counter])

    return (
        <>
            {/* {starships.map((ship) => { 
                return <Starship ship={ship.name} /> 
            })} */}

        </>
    )
}

export default Card