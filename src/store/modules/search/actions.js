const peopleCount = ({ commit }, payload) => {
  commit("setPeopleCount", payload);
};

const setCurrentPage = ({ commit }, payload) => {
  commit("setCurrentPage", payload);
};

const addToPeopleArray = ({ commit }, payload) => {
  commit("addToPeopleArray", payload);
};

const addToPlanetArray = ({ commit }, payload) => {
  commit("addToPlanetArray", payload);
};

// universal api call for fetching data.
// creates a unique array for homeworld to reduce calls
const fetchPeopleData = async ({ commit, dispatch, state }, pageNumber) => {
  await fetch(`${state.peopleURL}?page=${pageNumber}`)
    .then(response => response.json())
    .then(json => {
      commit("setPeopleCount", json.count);
      commit("addToPeopleArray", { page: pageNumber, data: json.results });
      const uniqPlanets = [...new Set(json.results.map(x => x.homeworld))];
      dispatch("fetchPlanetData", uniqPlanets);
    });
};

const fetchPlanetData = async (store, payload) => {
  // we could optimize this too by narrowing down the amount of calls
  // for simplicity I left this undone.
  await Promise.all(
    payload.map(element => fetch(element).then(resp => resp.json()))
  ).then(json => {
    store.commit("addToPlanetArray", json);
  });
};

export default {
  peopleCount,
  addToPeopleArray,
  setCurrentPage,
  addToPlanetArray,
  fetchPeopleData,
  fetchPlanetData
};
