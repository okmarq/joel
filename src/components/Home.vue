<template>
  <div class="w-full img-1">
    <div class="bg-pattern-1">
      <main class="h-screen">
        <div class="pt-20 sm:pt-24 px-2 sm:px-16">
          <div class="pri-text">
            <p class="text-lg font-semibold">Hi there, I'm</p>
            <p class="font-title font-bold text-6xl lg:text-7xl leading-tight">
              Joel<br />Okoromi
            </p>
            <p class="font-subtitle text-3xl lg:text-5xl mb-4 ter-text">
              Fullstack Developer.
            </p>

            <div
              class="
                w-4/6
                text-sm
                md:text-base
                font-semibold
                text-justify
                hidden
                sm:block
              "
            >
              <p class="mb-2">
                Computer Scientist, Developer, and Instructor. A curious person
                with a knack for innovation and challenges. I’m detail-oriented
                with self-learning capabilities.
              </p>

              <p class="mb-4">
                I develop applications resulting in awesome User Experience and
                elegant User Interface design. I implement functionalities using
                required technologies to provide efficiency and reusability.
              </p>
            </div>
          </div>

          <div class="m-4 ml-10 gap-10 hidden lg:flex">
            <div
              class="
                p-2
                sec-col
                rounded
                shadow
                leading-tight
                flex
                justify-around
                items-center
                w-40
              "
            >
              <img class="w-8" src="/assets/images/logo/roothub-logo.png" />
              <span class="">Instructor,<br />The RootHub</span>
            </div>

            <div
              class="
                p-2
                sec-col
                rounded
                shadow
                leading-tight
                flex
                justify-around
                items-center
                w-40
              "
            >
              Developer,<br />Freelancer
            </div>
          </div>

          <div class="ml-10 text-xl pri-text font-semibold font-subtitle">
            <a href="#">My journey as a developer</a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
