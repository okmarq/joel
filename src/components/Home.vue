<template>
  <div class="w-full img-1">
    <div class="bg-pattern-1">
      <main class="pt-24 sm:pt-24 px-6 sm:px-20">
        <div class="text-primary w-4/6">
          <div class="text-center">
            <p class="text-lg font-medium">Hi there, I'm</p>
            <p class="text-7xl sm:text-8xl">Joel</p>
            <p
              class="
                text-xl
                sm:text-3xl
                lg:text-5xl
                mb-4
                text-tertiary
                font-serif
              "
            >
              Fullstack Developer
            </p>
          </div>
          <div class="text-justify">
            <p class="mb-4 font-serif sm:font-sans hidden sm:block">
              Computer Scientist, Developer, and Instructor. A curious person
              with a knack for innovation and challenges. I’m detail-oriented
              with self-learning capabilities.
            </p>

            <p class="mb-4 font-serif sm:font-sans">
              I develop applications with awesome Ui/Ux design. Implementing
              functionalities using required technologies that provide
              efficiency and reusability.
            </p>
          </div>
        </div>
        <!-- lg:flex -->
        <div class="m-4 ml-10 gap-10 hidden">
          <div
            class="
              p-2
              bg-secondary
              rounded
              shadow-md
              leading-tight
              flex
              justify-around
              items-center
              w-40
            "
          >
            <img class="w-8" src="../assets/images/logo/roothub-logo.png" />
            <span>Instructor,<br />The RootHub</span>
          </div>

          <div
            class="
              p-2
              bg-secondary
              rounded
              shadow-md
              leading-tight
              flex
              justify-around
              items-center
              w-40
            "
          >
            <img src="https://img.icons8.com/wired/48/000066/gears.png" />
            <span>Developer,<br />Freelancer</span>
          </div>
        </div>

        <div
          class="
            absolute
            bottom-8
            sm:ml-10
            md:ml-6
            text-sm
            sm:text-xl
            text-primary
            font-bold font-serif
            flex
            items-center
            gap-1
            sm:gap-2
          "
        >
          <img src="https://img.icons8.com/wired/28/660000/trekking.png" />
          <span
            >My journey
            <span class="hidden sm:inline">as a developer</span></span
          >
          <img src="https://img.icons8.com/wired/28/ff0000/youtube-play.png" />
        </div>
      </main>
    </div>
  </div>

  <!-- social icons -->
  <div class="hidden">
    <img
      class="absolute"
      src="https://img.icons8.com/wired/24/171515/github.png"
    />
    <img
      class="absolute"
      src="https://img.icons8.com/wired/24/0077b5/linkedin.png"
    />
    <img
      class="absolute"
      src="https://img.icons8.com/wired/24/4267B2/facebook.png"
    />
    <img
      class="absolute"
      src="https://img.icons8.com/wired/24/8a3ab9/instagram-new.png"
    />
    <img
      class="absolute"
      src="https://img.icons8.com/wired/24/00ACEE/twitter.png"
    />
    <img
      class="absolute"
      src="https://img.icons8.com/wired/24/4FCE5D/whatsapp.png"
    />
    <img
      class="absolute"
      src="https://img.icons8.com/wired/24/BB001B/gmail.png"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-1 {
  background-image: url("../assets/images/laravel.png");
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}

.bg-pattern-1 {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgba(234, 192, 160, 0.5);
  z-index: -2;
}
.bg-pattern-1::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("../assets/images/patterns/celtic-knot.png");
  background-size: 25%;
  opacity: 0.3;
  z-index: -1;
}
</style>
