<template>
  <footer class="relative bg-gray-900 pt-8 pb-6 text-white">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px; transform: translateZ(0px);"
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
          class="text-gray-900 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">
            SWAPPER - The Star Wars API consumer
          </h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-400">
            With Swapper you get your favourite characters from the Star Wars
            movies in this simple list. You can see details for the home world
            and some basic information about them! Check it out!
          </h5>
          <div class="mt-6">
            <button
              class="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none p-2 mr-2"
              type="button"
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
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                ></path>
              </svg>
            </button>
            <button
              class="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none p-2"
              type="button"
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 mt-8 md:px-4 ml-auto">
              <span
                class="block uppercase text-white text-sm font-semibold mb-2"
                >Useful Links</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    href="#"
                    >About Us</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    href="#"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    href="#"
                    >API</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    href="#"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-white" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-white font-semibold py-1">
            Copyright © {{ date }}
            <span class="logo text-base m-0 p-0">Swapper</span>.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>
