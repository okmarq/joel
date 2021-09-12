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
      sm:px-10
      md:px-20
      z-10
      shadow-md
    "
  >
    <a class="font-cursive text-xl sm:text-3xl md:text-5xl flex gap-2" href="#">
      <img src="https://img.icons8.com/wired/50/ffffff/informatics.png" />
      <span class="">Lari-Lara</span>
    </a>

    <div class="font-cursiveTwo block lg:hidden">
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
