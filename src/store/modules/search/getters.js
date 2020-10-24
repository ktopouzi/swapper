const getPeopleCount = state => {
  return state.peopleCount;
};

const getPeopleURL = state => {
  return state.peopleURL;
};

const getPeopleArray = state => {
  return state.peopleArray;
};

const getPlanetArray = state => {
  return state.planetArray;
};

const getCurrentPage = state => {
  return state.currentPage;
};

const getPlanetName = state => link => {
  return state.planetArray.find(planet => planet.url === link);
};

export default {
  getPeopleCount,
  getPeopleURL,
  getPeopleArray,
  getCurrentPage,
  getPlanetArray,
  getPlanetName
};
