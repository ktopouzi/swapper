<template>
  <section class="w-full">
    <table class="table w-full">
      <thead>
        <tr>
          <th
            @click="sort(header.key)"
            class="px-4 py-2 cursor-pointer bg-black text-sw-yellow hover:text-sw-yellow-light transition ease-in-out duration-200"
            v-for="(header, indx) in tableHeaders"
            :key="indx"
          >
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border px-4 py-2"
          v-for="(row, idx) in sortedColumns"
          :key="idx"
        >
          <td
            class="border px-4 py-2"
            v-for="(people, indx) in tableHeaders"
            :key="indx"
          >
            <button
              v-if="people.key === 'originPlanet' && getPlanetArray.length > 0"
              type="button"
              class="btn bg-black text-sw-yellow p-4 h-full rounded w-full"
              @click="showModal(row)"
            >
              {{ row[people.key] }}
            </button>
            <p v-else-if="people.key === 'created' || people.key === 'edited'">
              {{ formatDate(row[people.key]) }}
            </p>
            <p v-else>
              {{ row[people.key] }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        {{ planet.name }}
      </template>
      <template v-slot:content>
        <div class="mt-2 flex flex-col">
          <p class="text-sm leading-5 text-gray-500 ">
            Population: {{ planet.population }}
          </p>
          <p class="text-sm leading-5 text-gray-500 ">
            Diameter: {{ planet.diameter }}
          </p>
          <p class="text-sm leading-5 text-gray-500 ">
            Climate: {{ planet.climate }}
          </p>
        </div>
      </template>
    </modal>
  </section>
</template>

<script>
import Modal from "@/components/Modal";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      currentSort: "name",
      currentSortDirection: "asc",
      isModalVisible: false,
      planet: {},
      sortType: "Number"
    };
  },
  components: {
    Modal
  },
  mounted() {},
  computed: {
    ...mapGetters("search", ["getPlanetArray", "getPeopleArray"]),
    sortedColumns() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.peopleData.sort((a, b) => {
        let modifier = 1;
        if (this.currentSort === "height" || this.currentSort === "mass") {
          if (this.currentSortDirection === "desc") modifier = -1;
          if (Number(a[this.currentSort]) < Number(b[this.currentSort]))
            return -1 * modifier;
          if (Number(a[this.currentSort]) > Number(b[this.currentSort]))
            return 1 * modifier;
        }
        if (this.currentSortDirection === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  },
  methods: {
    formatDate(date) {
      let options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      return new Date(date).toLocaleString("en-GB", options);
    },
    sort(s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDirection =
          this.currentSortDirection === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    showModal(row) {
      this.planet = this.getPlanetArray.find(pl => pl.url === row.homeworld);
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  props: {
    peopleData: {
      type: Array,
      required: true
    },
    tableHeaders: {
      type: Array,
      default: () => [
        {
          key: "name",
          title: "Name"
        },
        {
          key: "height",
          title: "Height"
        },
        {
          key: "mass",
          title: "Mass"
        },
        {
          key: "created",
          title: "Created"
        },
        {
          key: "edited",
          title: "Edited"
        },
        {
          key: "originPlanet",
          title: "Planet Name"
        }
      ]
    }
  }
};
</script>

<style></style>
