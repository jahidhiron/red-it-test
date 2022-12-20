// custom
const { read } = require("./read");
const charData = require("./data/character.json");
const planetsData = require("./data/planets.json");
const starshipsData = require("./data/starships.json");
const vehiclesData = require("./data/vehicles.json");
const speciesData = require("./data/species.json");

// read films
exports.readFilms = (filmsUrl, data) => {
  return new Promise(async (resolve, _reject) => {
    if (filmsUrl.length === 0) {
      resolve([]);
    }

    const charFilms = [];
    for (let i = 0; i < filmsUrl.length; i++) {
      const index = data.findIndex((film) => film.url === filmsUrl[i]);
      const characters = await read(data[index].characters, charData);
      const planets = await read(data[index].planets, planetsData);
      const starships = await read(data[index].starships, starshipsData);
      const vehicles = await read(data[index].vehicles, vehiclesData);
      const species = await read(data[index].species, speciesData);
      charFilms.push({
        ...data[index],
        characters,
        planets,
        starships,
        vehicles,
        species,
      });
    }
    resolve(charFilms);
  });
};
