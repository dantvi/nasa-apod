

// NASA API
const count = 10;
const apiKey = 'CHr5FArb60YjjldYZGTln8YVfPwOm4hptQzfwRHI';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Get 10 Images from NASA API
async function getNasaPictures() {
    try {
        const response = await fetch(apiUrl);
        resultsArray = await response.json();
        console.log('resultsarray:' ,resultsArray);
    } catch (error) {
        // Catch Error Here
        console.log(error);
    }
}

// On Load
getNasaPictures();
