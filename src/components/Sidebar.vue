<template>
  <div
    :class="{
      'translate-x-0': sideBarState.none,
      'translate-x-0': sideBarState.minimized,
      'translate-x-0': sideBarState.maximized,
    }"
    class="relative transition transform duration-700 ease-in-out z-10"
  >
    <button
      @click="showSidebar"
      :class="{
        '-translate-x-2': sideBarState.none,
        'translate-x-10': sideBarState.minimized,
        'translate-x-44': sideBarState.maximized,
      }"
      class="
        absolute
        top-20
        w-12
        h-14
        bg-secondary
        sm:hidden
        flex
        items-center
        justify-center
        rounded-r-full
        z-20
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
          '-translate-x-52 sm:translate-x-0': sideBarState.none,
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
            z-20
            pt-20
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
              space-y-4
              sm:space-y-8
            "
          >
            <button @click="sideBar" class="mb-4 sm:mb-6 z-40">
              <img v-if="isExpanded" :src="backArrow" />
              <img v-else :src="frontArrow" />
            </button>
            <router-link to="/">
              <img src="https://img.icons8.com/wired/28/000066/home-page.png" />
            </router-link>
            <router-link to="/whatido">
              <img src="https://img.icons8.com/wired/28/000066/wrench.png" />
            </router-link>
            <router-link to="/experience">
              <img
                src="https://img.icons8.com/wired/28/000066/development-skill.png"
              />
            </router-link>
            <router-link to="/about">
              <img
                src="https://img.icons8.com/wired/28/000066/about-us-male.png"
              />
            </router-link>
            <router-link to="/portfolio">
              <img src="https://img.icons8.com/wired/28/000066/resume.png" />
            </router-link>
            <router-link to="/contact">
              <img src="https://img.icons8.com/wired/28/000066/email.png" />
            </router-link>
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
            pt-20
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
              justify-center
              space-y-4
              sm:space-y-8
              font-serif
              text-xl
            "
          >
            <span class="mb-4 sm:mb-6 invisible">collapse</span>
            <router-link to="/">Home</router-link>
            <router-link to="/whatido">What I Do</router-link>
            <router-link to="/experience">Experience</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/portfolio">Portfolio</router-link>
            <router-link to="/contact">Contact</router-link>
          </nav>

          <div class="w-full h-14 bg-tertiary font-serif">
            <p><small>&copy; 2021 Copyright</small></p>
            <p class=""><small>Developer:</small><b> Joel Julius</b></p>
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
