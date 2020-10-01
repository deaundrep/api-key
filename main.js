// Use any ONE of these API's that needs an API key to get data.
// Read the docs to see how to call for and get the data that you want
// Or you can use one of your choosing if you are comfortable, HOWEVER it must require an API Key
// Parse the data, and log any important information you would like to show in a nice format of your choosing.
// You can add your own spin to the data in how you present it.
// Use any tools we've practiced such as promises, destructuring, etc.
// Once everything works, upload the file and submit.

const fetch = require('node-fetch')


let keys = 'd486859ffa0e558e3d1b7adb1934c988'

let city = 'New York'

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${keys}`

const niceDay = ['😎']
const coldDay = ['😨']

fetch(url)
.then((data) => data.json())
.then((newData) => {
const  newData1 = newData.weather
const getTemp = newData.main.temp
if(getTemp >= 65){
    console.log(`Its nice out today! ${niceDay}`)
} else {
        console.log(`You might need a jacket! ${coldDay}`)
}
const todayLow = newData.main.temp_min
const todayHigh = newData.main.temp_max
const itFeelsLike = newData.main.feels_like
    newData1.forEach(({description, id}) => {
        
        
        const printOut = 
        `City ID : ${id} 
Temp : ${getTemp}
Todays High : ${todayHigh}
Todays Low : ${todayLow}
It Feels Like : ${itFeelsLike}
Forecast : ${description}
        `
        console.log(printOut)
        
                        
    })
    
    
    })


// // Weather API- https://openweathermap.org/api
// // Weather/Air Quality API-  https://www.airvisual.com/dashboard/api
// // Recipe API- https://developer.edamam.com/ (uses two key code)
// // Superheroes API- https://superheroapi.com/index.html
// // Movies API- https://www.omdbapi.com/
// // Sports API - https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal
// // News API - https://newsapi.org/
// // Harvard Art Museum API - https://www.harvardartmuseums.org/collections/api


// If you want to make your project a little more robust and dynamic you could use tools like the ones below:
// Read the docs to see how it works. Not hard.


// Readline: https://nodejs.org/api/readline.html
// OR
// Inquirer: https://www.npmjs.com/package/inquirer
// Read the docs to find out how to use. Pretty intuitive.
