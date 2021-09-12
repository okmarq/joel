<template>
  <div
    :class="{
      '-translate-x-12': sideBarState.none,
      '-translate-x-2': sideBarState.minimized,
      'translate-x-32': sideBarState.maximized,
    }"
    class="
      absolute
      top-20
      left-10
      w-12
      h-14
      bg-secondary
      sm:hidden
      flex
      items-center
      justify-center
      rounded-r-full
      transition
      duration-700
      ease-in-out
      transform
    "
  >
    <button @click="showSidebar" class="z-10">
      <img
        class="animate-pulse"
        src="https://img.icons8.com/wired/28/000066/menu.png"
      />
    </button>
  </div>

  <div :class="{ hidden: !hamburger }" class="sm:flex">
    <div class="sidebar absolute left-0 w-auto h-full pt-20 flex">
      <!-- sidebar iconic -->
      <div class="relative w-14 h-full bg-secondary pt-4 z-10">
        <nav
          class="flex flex-col items-center font-cursiveTwo text-xl space-y-8"
        >
          <button @click="sideBar" class="arrow mb-8">
            <img v-if="isExpanded" :src="backArrow" />
            <img v-else :src="frontArrow" />
          </button>
          <a class="" href="/index.php">
            <img src="https://img.icons8.com/wired/28/000066/home-page.png" />
          </a>
          <a class="" href="/whatido.php">
            <img src="https://img.icons8.com/wired/28/000066/wrench.png" />
          </a>
          <a class="" href="/experience.php">
            <img
              src="https://img.icons8.com/wired/28/000066/development-skill.png"
            />
          </a>
          <a class="" href="/about.php">
            <img
              src="https://img.icons8.com/wired/28/000066/about-us-male.png"
            />
          </a>
          <a class="" href="/portfolio.php">
            <img src="https://img.icons8.com/wired/28/000066/resume.png" />
          </a>
          <a class="" href="/contact.php">
            <img src="https://img.icons8.com/wired/28/000066/email.png" />
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
            <img src="https://img.icons8.com/wired/24/000066/copyright.png" />
          </a>
        </div>
      </div>

      <!-- sidebar full -->
      <div
        :class="{
          'translate-x-0 ease-out': isExpanded,
          '-translate-x-48 ease-in': !isExpanded,
        }"
        class="
          bg-secondary
          pt-4
          relative
          w-36
          h-full
          transform
          transition
          duration-1000
        "
      >
        <nav class="flex flex-col font-cursiveTwo text-xl space-y-8">
          <button class="back-arrow mb-8 invisible">collapse</button>
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
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data: function () {
    return {
      isExpanded: false,
      hamburger: false,
      sideBarState: {
        none: true,
        minimized: false,
        maximized: false,
      },
      arrow: "https://img.icons8.com/wired/28/000066/forward--v2.png",
      frontArrow: "https://img.icons8.com/wired/28/000066/forward--v2.png",
      backArrow: "https://img.icons8.com/wired/28/000066/back.png",
      variants: [
        {
          frontArrow: "https://img.icons8.com/wired/28/000066/forward--v2.png",
        },
        {
          backArrow: "https://img.icons8.com/wired/28/000066/back.png",
        },
      ],
    };
  },
  methods: {
    sideBar() {
      this.isExpanded = !this.isExpanded;
      this.hamburgerSideBarState();
    },
    showSidebar() {
      this.hamburger = !this.hamburger;
      this.hamburgerSideBarState();
    },
    hamburgerSideBarState() {
      if (this.hamburger && this.isExpanded) {
        this.sideBarState.none = false;
        this.sideBarState.minimized = false;
        this.sideBarState.maximized = true;
      }
      if (this.hamburger && !this.isExpanded) {
        this.sideBarState.none = false;
        this.sideBarState.minimized = true;
        this.sideBarState.maximized = false;
      }
      if (!this.hamburger && this.isExpanded) {
        this.sideBarState.none = true;
        this.sideBarState.minimized = false;
        this.sideBarState.maximized = false;
      }
      if (!this.hamburger && !this.isExpanded) {
        this.sideBarState.none = true;
        this.sideBarState.minimized = false;
        this.sideBarState.maximized = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
