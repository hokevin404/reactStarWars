export function swapi() {
    // Initialize empty starship array
    const starships = [];
    const abortController = new AbortController();
    let page = 4;

    function getShips(page) {
        if (page < 1) {
            // abortController.abort();
            return;
        }

        fetch(`https://swapi.dev/api/starships/?page=${page}`)
            .then((res) => {
                res.json()
                // console.log()
            })
            // .then((data) => {
            //     console.log(data);
                starships.push(data)
                // console.log(data)
                getShips(page - 1)
            })
            .catch((error) => {
                console.error(`Error: `, error)
            })
    }
    


    // Async function to fetch starship api
    // async function getStarships() {
    //     // for loop to iterate through the 4 url links for api
    //     // Store results into starships array
    //     try {
    //         for (let i = 1; i < 5; i++) {
    //             const response = await fetch(`https://swapi.dev/api/starships/?page=${i}`)
    //             const data = await response.json();
    //             // console.log(data.results)
    //             await data.results.forEach((starship) => {
    //                 starships.push(starship)
    //             })
    //             // starships.push(data.results);
    //             // console.log(starships)
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // Invoke getStarships function
    // getStarships();

    // function loaded(starships) {
    //     console.log(starships);
    //     console.log(starships.length);
    //     console.log(`API Loaded`)
    //     return starships;

    // }

    // function loading() {
    //     console.log(`Loading...`)
    // }

    getShips(page);

    console.log(starships)
    return starships;
}