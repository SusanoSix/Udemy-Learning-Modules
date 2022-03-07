//code returns a list of habitable planets, filtered from official NASA data collection. 

const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet ['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11  //this condition (filter) only shows results matching values between .36 and 1.11
    && planet['koi_prad'] < 1.6;                                 //returns planets that are less than the size of dangerously large planets
}

fs.createReadStream('kepler_data.csv')      //this function calls th data from the csv file
    .pipe(parse({
      comment: '#',
      columns: true,
    }))                          //.pipe writes the data to a js array, a redable format
    .on('data', (data) => {                 
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);  
        }
    
})
    .on('error', (err) => {
        console.log(err);
})        
    .on('end', () => {
        console.log(habitablePlanets.map((planet) => {
            return planet['kepler_name'];
        }));
        console.log(`${habitablePlanets.length} Welcome home.`);

});

//parse();
