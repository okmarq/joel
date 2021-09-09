<template>
  <div
    class="absolute left-0 w-14 h-full pt-20 z-10 sidebar flex hidden sm:flex"
  >
    <!-- sidebar iconic -->
    <div class="relative w-14 h-full sec-col">
      <nav class="flex flex-col items-center font-subtitle text-xl space-y-4">
        <span class="front-arrow mb-3 cursor-pointer">F</span>
        <a class="" href="/index.php">H</a>
        <a class="" href="/whatido.php">W</a>
        <a class="" href="/experience.php">E</a>
        <a class="" href="/about.php">A</a>
        <a class="" href="/portfolio.php">P</a>
        <a class="" href="/contact.php">C</a>
      </nav>

      <div
        class="
          ter-col
          h-12
          absolute
          bottom-0
          w-full
          flex
          justify-center
          items-center
        "
      >
        <a class="" href="#">&copy;</a>
      </div>
    </div>

    <!-- sidebar full -->
    <div class="relative w-full h-full sec-col show hidden">
      <nav class="flex flex-col font-subtitle text-xl space-y-4">
        <span class="back-arrow mb-3 cursor-pointer">B</span>
        <a class="" href="/index.php">Home</a>
        <a class="" href="/whatido.php">What I do</a>
        <a class="" href="/experience.php">Experience</a>
        <a class="" href="/about.php">About me</a>
        <a class="" href="/portfolio.php">Portfolio</a>
        <a class="" href="/contact.php">Contact</a>
      </nav>

      <div class="ter-col-100 h-12 absolute bottom-0 w-full pl-2">
        <p><small>&copy; 2021 Copyright</small></p>
        <p class="font-subtitle">
          <small>Developer:</small> <b>Joel Julius</b>
        </p>
      </div>
    </div>
  </div>

  <div class="font-subtitle absolute top-20 left-2 sm:hidden hamburger">
    <button class="sec-text text-xl">H</button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
