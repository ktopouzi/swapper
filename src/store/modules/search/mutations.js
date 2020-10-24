const setPeopleCount = (state, payload) => {
  state.peopleCount = payload;
};

// sets the number of the pages we are currently in.
const setCurrentPage = (state, payload) => {
  state.currentPage = payload;
};

// adds people retrieved by the api call to an array.
const addToPeopleArray = (state, payload) => {
  state.peopleArray.push(payload);
};

const addToPlanetArray = (state, payload) => {
  // inject a custom field to have a generic and centralized space for the table
  // maps the data from the unique calls for planets and append the `originPlanet` field to
  // the initial peopleData.
  state.peopleArray
    .find(ppl => ppl.page === state.currentPage)
    .data.map(pl => {
      pl.originPlanet = payload.find(ppl => ppl.url === pl.homeworld).name;
    });
  state.planetArray.push(...payload);
};
export default {
  setPeopleCount,
  addToPeopleArray,
  setCurrentPage,
  addToPlanetArray
};
