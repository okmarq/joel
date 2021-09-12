<template>
  <div
    class="absolute left-0 w-14 h-full pt-20 z-10 sidebar flex hidden sm:flex"
  >
    <!-- sidebar iconic -->
    <div class="relative w-14 h-full bg-secondary">
      <nav class="flex flex-col items-center font-cursiveTwo text-xl space-y-4">
        <span class="front-arrow mb-3 cursor-pointer">
          <img src="https://img.icons8.com/wired/28/000066/forward--v2.png" />
        </span>
        <a class="" href="/index.php">
          <img src="https://img.icons8.com/wired/30/000066/home-page.png" />
        </a>
        <a class="" href="/whatido.php">
          <img src="https://img.icons8.com/wired/30/000066/wrench.png" />
        </a>
        <a class="" href="/experience.php">
          <img
            src="https://img.icons8.com/wired/30/000066/development-skill.png"
          />
        </a>
        <a class="" href="/about.php">
          <img src="https://img.icons8.com/wired/30/000066/about-us-male.png" />
        </a>
        <a class="" href="/portfolio.php">
          <img src="https://img.icons8.com/wired/30/000066/resume.png" />
        </a>
        <a class="" href="/contact.php">
          <img src="https://img.icons8.com/wired/30/000066/email.png" />
        </a>
      </nav>

      <div
        class="
          bg-tertiary
          h-12
          absolute
          bottom-0
          w-full
          flex
          justify-center
          items-center
        "
      >
        <a class="" href="#">
          <img src="https://img.icons8.com/wired/30/000066/copyright.png" />
        </a>
      </div>
    </div>

    <!-- sidebar full -->
    <div class="relative w-full h-full sec-col show hidden">
      <nav class="flex flex-col font-cursiveTwo text-xl space-y-4">
        <span class="back-arrow mb-3 cursor-pointer">
          <img src="https://img.icons8.com/wired/28/000066/back.png" />
        </span>
        <router-link to="/">Home</router-link>
        <router-link to="/whatido">What I Do</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
      </nav>

      <div class="bg-tertiary h-12 absolute bottom-0 w-full pl-2">
        <p><small>&copy; 2021 Copyright</small></p>
        <p class="font-cursiveTwo">
          <small>Developer:</small> <b>Joel Julius</b>
        </p>
      </div>
    </div>
  </div>

  <div class="font-cursiveTwo absolute top-20 left-2 sm:hidden hamburger">
    <button class="sec-text text-xl">
      <img src="https://img.icons8.com/wired/32/000066/menu.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
