<template>
  <div class="">
    <!-- Hamburger -->
    <button
      @click="toggleSidebarVisibility"
      :class="{
        'left-52': sidebarState.isMaximized,
        'left-14': sidebarState.isMinimized,
        'left-0': sidebarState.isNone,
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
        z-10
        transition
        transform
        duration-500
        ease-in-out
        -translate-x-2
      "
    >
      <img
        class="animate-pulse"
        src="https://img.icons8.com/wired/28/000066/menu.png"
      />
    </button>

    <!-- Sidebar -->
    <div
      :class="{
        'w-14': !isExpanded,
        'w-52': isExpanded,
        'hidden sm:flex': !isVisible,
      }"
      class="
        h-screen
        fixed
        z-20
        top-0
        left-0
        bg-tertiary
        flex flex-col
        justify-between
        pt-24
        transition
        duration-500
      "
    >
      <nav
        :class="{ 'px-4 items-start': isExpanded, 'items-center': !isExpanded }"
        class="flex flex-col space-y-8"
      >
        <button @click="toggleSidebarSize" class="mb-6">
          <img v-if="!isExpanded" :src="frontArrow" />
          <img v-else :src="backArrow" />
        </button>
        <router-link :class="{ 'flex gap-4 items-center': isExpanded }" to="/">
          <img src="https://img.icons8.com/wired/28/000066/home-page.png" />
          <span :class="{ hidden: !isExpanded }" class="">Home</span>
        </router-link>
        <router-link
          :class="{ 'flex gap-4 items-center': isExpanded }"
          to="/whatido"
        >
          <img src="https://img.icons8.com/wired/28/000066/wrench.png" />
          <span :class="{ hidden: !isExpanded }" class="">What I Do</span>
        </router-link>
        <router-link
          :class="{ 'flex gap-4 items-center': isExpanded }"
          to="/experience"
        >
          <img
            src="https://img.icons8.com/wired/28/000066/development-skill.png"
          />
          <span :class="{ hidden: !isExpanded }" class="">Experience</span>
        </router-link>
        <router-link
          :class="{ 'flex gap-4 items-center': isExpanded }"
          to="/about"
        >
          <img src="https://img.icons8.com/wired/28/000066/about-us-male.png" />
          <span :class="{ hidden: !isExpanded }" class="">About</span>
        </router-link>
        <router-link
          :class="{ 'flex gap-4 items-center': isExpanded }"
          to="/portfolio"
        >
          <img src="https://img.icons8.com/wired/28/000066/resume.png" />
          <span :class="{ hidden: !isExpanded }" class="">Portfolio</span>
        </router-link>
        <router-link
          :class="{ 'flex gap-4 items-center': isExpanded }"
          to="/contact"
        >
          <img src="https://img.icons8.com/wired/28/000066/email.png" />
          <span :class="{ hidden: !isExpanded }" class="">Contact</span>
        </router-link>
      </nav>
      <div
        :class="{
          'pl-4 items-center': isExpanded,
          'items-center justify-center': !isExpanded,
        }"
        class="h-14 bg-secondary flex gap-4"
      >
        <img src="https://img.icons8.com/wired/24/000066/copyright.png" />
        <div :class="{ hidden: !isExpanded }" class="">
          <p><small>&copy; 2021 Copyright</small></p>
          <p>
            <small>Developer:<b> Joel Julius</b></small>
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
      isVisible: false,
      sidebarState: {
        isNone: true,
        isMinimized: false,
        isMaximized: false,
      },
      frontArrow: "https://img.icons8.com/wired/28/000066/forward--v2.png",
      backArrow: "https://img.icons8.com/wired/28/000066/back.png",
    };
  },
  methods: {
    toggleSidebarSize() {
      this.isExpanded = !this.isExpanded;
      this.setSidebarState();
    },
    toggleSidebarVisibility() {
      this.isVisible = !this.isVisible;
      this.setSidebarState();
    },
    setSidebarState() {
      if (!this.isVisible) {
        this.sidebarState.isNone = true;
        this.sidebarState.isMinimized = false;
        this.sidebarState.isMaximized = false;
      } else if (this.isVisible && !this.isExpanded) {
        this.sidebarState.isNone = false;
        this.sidebarState.isMinimized = true;
        this.sidebarState.isMaximized = false;
      } else if (this.isVisible && this.isExpanded) {
        this.sidebarState.isNone = false;
        this.sidebarState.isMinimized = false;
        this.sidebarState.isMaximized = true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
