<template>
  <div class="w-full h-screen img-3">
    <main class="pt-20 px-2 sm:pl-20 sm:pr-6 lg:pl-28 lg:pr-16">
      <div
        class="
          absolute
          top-20
          right-2
          sm:right-4
          md:right-6
          lg:right-20
          mt-1
          md:mt-2
          flex
          divide-x-4
          text-xs
          sm:text-sm
          md:text-base
          lg:text-lg
        "
      >
        <button
          class="bg-secondary p-2 rounded-l-lg font-serif pri-text font-bold"
        >
          Experience
        </button>
        <button class="bg-secondary p-2 rounded-r-lg font-serif">
          Education
        </button>
      </div>

      <div class="space-y-4 sm:space-y-4 md:space-y-6 lg:space-y-8">
        <h2
          class="
            font-serif
            pri-text
            text-xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            mb-8
          "
        >
          Experience
        </h2>

        <div class="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <div
            class="
              flex
              md:flex-row
              justify-between
              sm:justify-start
              gap-4
              md:gap-8
              lg:gap-
              sm:w-4/12
              md:w-8/12
              font-serif
              text-sm
              sm:text-base
              lg:text-xl
              font-semibold
            "
          >
            <p class="lg:flex-1">2020 - Present</p>
            <p class="lg:flex-1">
              Instructor, <br class="hidden sm:inline" />The Roothub
            </p>
          </div>
          <p class="w-full text-justify text-xs sm:text-sm lg:text-base">
            I guide trainees through the process of developing functional<span
              :class="{ hidden: !isTruncated }"
              id="dots"
              class="lg:hidden"
              >... </span
            ><button
              @click="readMore"
              :class="{ hidden: !isTruncated }"
              class="text-blue-500 lg:hidden"
            >
              read more</button
            ><span :class="{ hidden: isTruncated }" class="lg:inline">
              applications with HTML, CSS, PHP, MySQL, and Laravel. Enabling
              them to acquire a robust understanding of<span
                :class="{ hidden: !isTruncated }"
                id="dots"
                class=""
                >... </span
              ><button
                @click="readMore"
                :class="{ hidden: !isTruncated }"
                class="text-blue-500"
              >
                read more</button
              ><span :class="{ hidden: isTruncated }" class="">
                software development. as well as gain the required skills to
                work on software development projects.
              </span></span
            ><button
              @click="readMore"
              :class="{ hidden: isTruncated }"
              class="text-blue-500"
            >
              read less
            </button>
          </p>
        </div>
        <hr />
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <div
            class="
              flex
              md:flex-row
              justify-between
              sm:justify-start
              gap-4
              md:gap-8
              lg:gap-
              sm:w-4/12
              md:w-8/12
              font-serif
              text-sm
              sm:text-base
              lg:text-xl
              font-semibold
            "
          >
            <p class="lg:flex-1">2018 - Present</p>
            <p class="lg:flex-1">
              Full Stack Developer,<br class="hidden sm:inline" />self Employed
            </p>
          </div>
          <p class="w-full text-justify text-xs sm:text-sm lg:text-base">
            As a full-stack developer, I am involved in every aspect of project
            development to gain<span id="dots">...</span
            ><span class="hidden">
              more understanding to ensure I deliver fully functional products.
              With a strong background in graphics, I can convert visual designs
              to code. while interpreting clients' specifications into
              manageable code.</span
            >
          </p>
        </div>
        <hr />
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <div
            class="
              flex
              md:flex-row
              justify-between
              sm:justify-start
              gap-4
              md:gap-8
              lg:gap-
              sm:w-4/12
              md:w-8/12
              font-serif
              text-sm
              sm:text-base
              lg:text-xl
              font-semibold
            "
          >
            <p class="lg:flex-1">2013 - 2015</p>
            <p class="lg:flex-1">
              Supervisor,<br class="hidden sm:inline" />Jomars General Services
            </p>
          </div>
          <p class="w-full text-justify text-xs sm:text-sm lg:text-base">
            Distribution and delivery of company’s products to end
            distributors/wholesalers and<span id="dots">...</span
            ><span class="hidden">
              retailers, auditing of inventory brought in or taken out, weekly
              staff attendance sheets and posting of income received to the
              company's account.</span
            >
          </p>
        </div>
      </div>

      <div class="space-y-8 hidden">
        <h2 class="font-serif pri-text text-5xl">Education</h2>
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <div
            class="
              flex
              md:flex-row
              justify-between
              sm:justify-start
              gap-4
              md:gap-8
              lg:gap-
              sm:w-4/12
              md:w-8/12
              font-serif
              text-sm
              sm:text-base
              lg:text-xl
              font-semibold
            "
          >
            <p class="lg:flex-1">2020 - 2024</p>
            <p class="lg:flex-1">
              University of the People,<br class="hidden sm:inline" />BSc.
              Computer Science
            </p>
          </div>
          <p class="w-full text-justify text-xs sm:text-sm lg:text-base">
            Giving myself an added advantage to an already existing knowledge
            base on computer science and programming.
          </p>
        </div>
        <hr />
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <div
            class="
              flex
              md:flex-row
              justify-between
              sm:justify-start
              gap-4
              md:gap-8
              lg:gap-
              sm:w-4/12
              md:w-8/12
              font-serif
              text-sm
              sm:text-base
              lg:text-xl
              font-semibold
            "
          >
            <p class="lg:flex-1">2016 - 2017</p>
            <p class="lg:flex-1">
              Free Code Camp,<br class="hidden sm:inline" />Responsive Web
              Design
            </p>
          </div>
          <p class="w-full text-justify text-xs sm:text-sm lg:text-base">
            Full Stack Web Development Certification, Computer Software
            Engineering.
          </p>
        </div>
      </div>

      <div class="absolute bottom-4">
        <a
          class="bg-secondary p-2 rounded-lg font-serif text-sm lg:text-lg"
          href="#"
          >Download Resume</a
        >
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data: function () {
    return {
      isTruncated: true,
    };
  },
  methods: {
    readMore() {
      this.isTruncated = !this.isTruncated;
      console.log(this.isTruncated);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-3 {
  position: relative;
}
.img-3::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("../assets/images/patterns/dots.png"),
    url("../assets/images/lari-back.jpg");
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: soft-light;
  z-index: -1;
}
</style>
