<template>
  <header
    class="
      fixed
      top-0
      w-screen
      h-20
      bg-primary
      flex
      items-center
      justify-between
      px-2
      sm:px-14
      z-20
      shadow-md
    "
  >
    <a class="flex items-center gap-2" href="#">
      <!-- <img src="https://img.icons8.com/wired/50/ffffff/informatics.png" /> -->
      <span class="font-serif text-2xl sm:text-3xl md:text-5xl">Lari-Lara</span>
    </a>

    <div class="block lg:hidden">
      <a href="#">+234 (0) 810-725-0441</a> / <a href="#">okmarq@gmail.com</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
