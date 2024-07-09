export function swapi() {
    // Initialize empty starship array
    const starships = [];

    // Async function to fetch starship api
    async function getStarships() {
        // for loop to iterate through the 4 url links for api
        // Store results into starships array
        try {
            for (let i = 1; i < 5; i++) {
                const response = await fetch(`https://swapi.dev/api/starships/?page=${i}`)
                const data = await response.json();
                starships.push(data.results);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Initiate getStarships function
    getStarships();

    return starships;
}