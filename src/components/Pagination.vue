<template>
  <section class="flex flex-col md:flex-row my-4 justify-between w-full">
    <div>Page {{ this.getCurrentPage }} of {{ pages }}</div>
    <div class="">
      <button
        @click="changePage(idx + 1)"
        :class="{ 'bg-sw-yellow': getCurrentPage - 1 === idx }"
        class="pagination_button mt-1 mr-2 border rounded shadow border-black px-2 text-center items-center hover:bg-sw-yellow-light transition ease-in-out duration-200"
        v-for="(page, idx) in this.pages"
        :key="idx"
      >
        {{ idx + 1 }}
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("search", [
      "peopleCount",
      "addToPeopleArray",
      "setCurrentPage",
      "fetchPeopleData"
    ]),
    async changePage(pageNumber) {
      if (this.getPeopleArray.find(x => x.page === pageNumber)) {
        this.setCurrentPage(pageNumber);
      } else {
        await this.fetchPeopleData(pageNumber);
        this.setCurrentPage(pageNumber);
      }
    }
  },
  computed: {
    ...mapGetters("search", [
      "getPeopleURL",
      "getPeopleArray",
      "getCurrentPage"
    ]),
    pages() {
      return Math.ceil(this.totalResults / 10);
    }
  },
  props: {
    totalResults: {
      type: Number,
      reuquired: true
    }
  }
};
</script>
