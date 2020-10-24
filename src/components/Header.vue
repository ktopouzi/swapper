<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link class="logo" to="/">Swapper</router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-white"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none"
        v-bind:class="{ hidden: !showMenu, block: showMenu }"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-gray-300 text-white px-3 py-2 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/"
            >
              About
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-gray-300 text-white px-3 py-2 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/"
            >
              Blog
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-gray-300 text-white px-3 py-2 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
