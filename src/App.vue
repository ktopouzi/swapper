<template>
  <div id="app" class="antialiased">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

body {
  box-sizing: border-box;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

.logo {
  @apply text-sw-yellow font-bold italic  py-2 px-4 uppercase;
  font-family: "Changa One", cursive;
  font-size: 2em;
}
</style>
