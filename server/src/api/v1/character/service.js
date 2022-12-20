// lib
const axios = require("axios");

// custom
const { peopleApi } = require("../config/api");
const { read } = require("../utils/read");
const { readFilms } = require("../utils/readFilms");
const vehicleData = require("../utils/data/vehicles.json");
const starshipsData = require("../utils/data/starships.json");
const speciesData = require("../utils/data/species.json");
const charData = require("../utils/data/character.json");
const filmsData = require("../utils/data/films.json");

// list
exports.listService = async ({ page, q }) => {
  const response = {
    code: 200,
    status: "success",
    message: "Fetch character successfully",
    data: {},
  };

  try {
    const p = parseInt(page) || 1;
    const limit = 10;
    let query = "";

    if (q !== "undefined" && q !== undefined) {
      query = q;
    }

    const {
      data: { count, _next, _previous, results },
    } = await axios.get(`${peopleApi}/?page=${p}&search=${query}`);

    response.data = {
      count,
      page: Math.ceil(count / limit),
      results,
      current: p,
    };

    return response;
  } catch (error) {
    response.code = 500;
    response.status = "failed";
    response.message = "Error. Try again";
    return response;
  }
};

// detailed
exports.detailService = async ({ id }) => {
  const response = {
    code: 200,
    status: "success",
    message: "Fetch detail character successfully",
    data: {},
  };

  try {
    let { data } = await axios.get(`${peopleApi}/${id}`);
    let { data: homeworld } = await axios.get(data.homeworld);

    const homeworldResidents = await read(homeworld.residents, charData);
    homeworld.residents = homeworldResidents;
    const homeworldFilms = await read(homeworld.films, filmsData);
    homeworld.films = homeworldFilms;

    const films = await readFilms(data.films, filmsData);
    const vehicles = await read(data.vehicles, vehicleData);
    const starships = await read(data.starships, starshipsData);
    const species = await read(data.species, speciesData);

    response.data = { ...data, homeworld, films, vehicles, starships, species };
    return response;
  } catch (error) {
    response.code = 500;
    response.status = "failed";
    response.message = "Error. Try again";
    return response;
  }
};
