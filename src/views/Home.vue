<template>
  <main>
    <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center "
      style="min-height: 75vh;"
    >
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style='background-image: url("/img/background.jpg");'
      >
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-25 bg-black"
        ></span>
      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div>
              <h1 class="text-5xl md:text-6xl logo">
                Swapper
              </h1>
              <p class="mt-4 text-lg text-gray-300">
                A simple swapi consumer! Search for your favourite characters
                and explore their home planets!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden "
        style="height: 70px; transform: translateZ(0px);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <section class="pb-20 bg-white -mt-32 ">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center">
          <div class="lg:pt-12 pt-6 w-full md:w-8/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sw-yellow text-black"
                >
                  <svg
                    class="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <h3 class="mt-2 mb-2 text-gray-900 font-bold text-3xl">
                  Search
                </h3>
                <p class="text-gray-600">
                  Use the search bellow to find you favourite character!
                </p>
                <p class="mb-4 text-gray-600">
                  Navigate through pages with the pagination below.
                </p>
                <svg
                  @click="navigateToSearch()"
                  class="w-8 h-8 m-auto cursor-pointer animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-wrap mt-16 overflow-y-hidden overflow-x-scroll lg:overflow-visible search flex-col items-start"
        >
          <div
            class="mb-8 flex justify-start items-center border rounded max-w-2xl w-full py-2 px-3 shadow"
          >
            <span>
              🔍
            </span>
            <label
              class="text-gray-700 text-sm font-bold mb-2 hidden"
              for="name"
            >
              Name
            </label>
            <input
              v-model="searchTerm"
              class="appearance-none h-full ml-2 w-full text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <Pagination :totalResults="Number(this.getPeopleCount)" />
          <Table
            v-if="this.getPeopleArray.length > 0"
            :peopleData="filteredList"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Table from "@/components/PeopleTable";
import Pagination from "@/components/Pagination";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  created() {
    this.fetchPeopleData(1);
  },
  components: {
    Table,
    Pagination
  },
  computed: {
    filteredList() {
      return this.people.filter(person => {
        return person.name
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
    people() {
      return this.getPeopleArray.filter(
        ppl => ppl.page === this.getCurrentPage
      )[0].data
        ? this.getPeopleArray.filter(ppl => ppl.page === this.getCurrentPage)[0]
            .data
        : [];
    },
    ...mapGetters("search", [
      "getPeopleURL",
      "getPeopleCount",
      "getPeopleArray",
      "getCurrentPage",
      "getPlanetArray"
    ])
  },
  methods: {
    ...mapActions("search", [
      "peopleCount",
      "addToPeopleArray",
      "addToPlanetArray",
      "fetchPeopleData"
    ]),
    navigateToSearch() {
      const el = this.$el.getElementsByClassName("search")[0];
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style>
.search::-webkit-scrollbar {
  height: 10px;
}
.search::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.164);
  -webkit-border-radius: 10px;
}
.search::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #ffe300;
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
}
.search::-webkit-scrollbar-thumb:window-inactive {
  background: #ffe300;
}
</style>
