<template>
  <div class="relative">
    <button
      @click="showSidebar"
      :class="{
        '-translate-x-3': sideBarState.none,
        'translate-x-8': sideBarState.minimized,
        'translate-x-44': sideBarState.maximized,
      }"
      class="
        absolute
        top-16
        w-12
        h-14
        bg-secondary
        sm:hidden
        flex
        items-center
        justify-center
        rounded-r-full
        z-10
        transition
        transform
        duration-700
        ease-in-out
      "
    >
      <img
        class="animate-pulse"
        src="https://img.icons8.com/wired/28/000066/menu.png"
      />
    </button>

    <div class="relative sm:flex">
      <div
        :class="{
          '-translate-x-52': sideBarState.none,
          'translate-x-0': sideBarState.minimized,
          'translate-x-0': sideBarState.maximized,
        }"
        class="
          absolute
          left-0
          h-screen
          flex
          transition
          transform
          duration-700
          ease-in-out
        "
      >
        <!-- sidebar iconic -->
        <div
          :class="{ 'translate-x-0': !isExpanded }"
          class="
            w-14
            bg-secondary
            flex flex-col
            z-10
            transition
            transform
            duration-700
            ease-in-out
          "
        >
          <nav
            class="
              w-full
              h-full
              flex flex-col
              items-center
              justify-center
              space-y-8
            "
          >
            <button @click="sideBar" class="mb-8 z-30">
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

          <div class="w-full h-14 bg-tertiary flex items-center justify-center">
            <img src="https://img.icons8.com/wired/24/000066/copyright.png" />
          </div>
        </div>

        <!-- sidebar full -->
        <div
          :class="{ '-translate-x-52': !isExpanded }"
          class="
            w-36
            bg-secondary
            flex flex-col
            transition
            transform
            duration-700
            ease-in-out
          "
        >
          <nav
            class="
              w-full
              h-full
              flex flex-col
              justify-center
              space-y-8
              font-cursiveTwo
              text-xl
            "
          >
            <span class="mb-8">collapse</span>
            <router-link to="/">Home</router-link>
            <router-link to="/whatido">What I Do</router-link>
            <router-link to="/experience">Experience</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/portfolio">Portfolio</router-link>
          </nav>

          <div class="w-full h-14 bg-tertiary flex items-center justify-center">
            <p><small>&copy; 2021 Copyright</small></p>
            <p class="font-cursiveTwo">
              <small>Developer:</small> <b>Joel Julius</b>
            </p>
          </div>
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
      hamburgerState: {
        shown: false,
        hidden: true,
      },
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
