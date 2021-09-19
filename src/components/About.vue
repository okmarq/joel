<template>
  <main class="w-full pt-20 px-2 sm:pl-32 sm:pr-20">
    <div class="flex mt-6">
      <div class="w-5/12 border-4 border-tertiary rounded-l-lg hidden lg:block">
        <img
          class="block max-w-full h-auto mx-auto rounded-l"
          src="../assets/images/tilt-head.jpg"
        />
      </div>
      <div
        class="
          bg-pattern-4
          w-full
          bg-primary
          rounded-l-lg
          lg:rounded-l-none
          rounded-r-lg
          px-2
          md:px-8
          py-6
          text-justify
          space-y-2
          mb-4
          md:mb-0
        "
      >
        <h2
          class="
            font-serif
            text-secondary text-lg
            sm:text-2xl
            md:text-4xl
            leading-none
          "
        >
          Creating meaningful solutions with Tech
        </h2>
        <img
          class="
            block
            lg:hidden
            max-w-full
            h-auto
            w-20
            sm:w-28
            mr-2
            rounded-l
            float-left
            border-tertiary
          "
          src="../assets/images/tilt-head.jpg"
        />
        <div class="font-serif text-xs lg:text-lg space-y-2 md:space-y-4">
          <p class="">
            Joel Okoromi enjoys learning and gathering knowledge that builds on
            his passion for problem-solving in technology. Just as he joined
            RootHub, the nickname "Laravel" was given to him by the CEO.
          </p>

          <p class="">
            He is originally from Edo State, born in Lagos but raised in Uyo,
            Nigeria. He started his programming career in 2016 and then decided
            to earn a degree in Computer Science in 2020 at the University of
            the People in Pasadena, California. This decision would give him the
            knowledge he wouldn't otherwise gain should he continue as a
            self-taught programmer.
          </p>

          <p class="">
            Joel is a team player who understands agile development and firmly
            adheres to recommended software and programming paradigms. He has
            time, organizational and managerial skills to produce high quality
            work on time.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "About",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-pattern-4 {
  background-image: url("../assets/images/patterns/celtic-knot.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
