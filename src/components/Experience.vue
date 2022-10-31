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
          text-xs
          sm:text-sm
          md:text-base
          lg:text-lg
          font-serif
        "
      >
        <button
          @click="switchExpEdu"
          v-if="!expEduSwitch"
          class="
            bg-secondary-main
            p-2
            rounded-l-lg
            flex
            items-center
            justify-between
            gap-2
            font-bold
          "
        >
          <img
            src="https://img.icons8.com/wired/20/ffffff/development-skill.png"
          />
          Experience
        </button>
        <button
          @click="switchExpEdu"
          v-else
          class="
            bg-secondary-main
            p-2
            rounded-r-lg
            flex
            items-center
            justify-between
            gap-2
            font-bold
          "
        >
          <img
            src="https://img.icons8.com/wired/20/ffffff/graduation-cap.png"
          />
          Education
        </button>
      </div>

      <div
        :class="{ hidden: !expEduSwitch }"
        class="space-y-4 sm:space-y-4 md:space-y-6 lg:space-y-8"
      >
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
              lg:gap-0
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
            I guide trainees through the process of developing functional
            applications with HTML,
            <span :class="{ hidden: !isTruncated1 }" id="dots" class="lg:hidden"
              >... </span
            ><button
              @click="readMore('text1')"
              :class="{ hidden: !isTruncated1 }"
              class="text-blue-500 lg:hidden"
            >
              read more</button
            ><span :class="{ hidden: isTruncated1 }" class="lg:inline">
              CSS, PHP, MySQL, and Laravel. Enabling them to acquire a robust
              understanding of<span
                :class="{ hidden: !isTruncated1 }"
                id="dots"
                class=""
                >... </span
              ><button
                @click="readMore('text1')"
                :class="{ hidden: !isTruncated1 }"
                class="text-blue-500"
              >
                read more</button
              ><span :class="{ hidden: isTruncated1 }" class="">
                software development. as well as gain the required skills to
                work on software development projects.
              </span></span
            ><button
              @click="readMore('text1')"
              :class="{ hidden: isTruncated1 }"
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
              lg:gap-0
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
              Full Stack Developer, <br class="hidden sm:inline" />self Employed
            </p>
          </div>
          <p class="w-full text-justify text-xs sm:text-sm lg:text-base">
            As a full-stack developer, I am involved in every aspect of project
            development to
            <span :class="{ hidden: !isTruncated2 }" id="dots" class="lg:hidden"
              >... </span
            ><button
              @click="readMore('text2')"
              :class="{ hidden: !isTruncated2 }"
              class="text-blue-500 lg:hidden"
            >
              read more</button
            ><span :class="{ hidden: isTruncated2 }" class="lg:inline">
              gain more understanding to ensure I deliver fully functional
              products. With a strong<span
                :class="{ hidden: !isTruncated2 }"
                id="dots"
                class=""
                >... </span
              ><button
                @click="readMore('text2')"
                :class="{ hidden: !isTruncated2 }"
                class="text-blue-500"
              >
                read more</button
              ><span :class="{ hidden: isTruncated2 }" class="">
                background in graphics, I can convert visual designs to code.
                while interpreting clients' specifications into manageable code.
              </span></span
            ><button
              @click="readMore('text2')"
              :class="{ hidden: isTruncated2 }"
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
              lg:gap-0
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
              Supervisor, <br class="hidden sm:inline" />Jomars General Services
            </p>
          </div>
          <p class="w-full text-justify text-xs sm:text-sm lg:text-base">
            Distribution and delivery of company’s products to end
            distributors/wholesalers and
            <span :class="{ hidden: !isTruncated3 }" id="dots" class="lg:hidden"
              >... </span
            ><button
              @click="readMore('text3')"
              :class="{ hidden: !isTruncated3 }"
              class="text-blue-500 lg:hidden"
            >
              read more</button
            ><span :class="{ hidden: isTruncated3 }" class="lg:inline">
              retailers, auditing of inventory brought in or taken out, weekly
              staff<span :class="{ hidden: !isTruncated3 }" id="dots" class=""
                >... </span
              ><button
                @click="readMore('text3')"
                :class="{ hidden: !isTruncated3 }"
                class="text-blue-500"
              >
                read more</button
              ><span :class="{ hidden: isTruncated3 }" class="">
                attendance sheets and posting of income received to the
                company's account.
              </span></span
            ><button
              @click="readMore('text3')"
              :class="{ hidden: isTruncated3 }"
              class="text-blue-500"
            >
              read less
            </button>
          </p>
        </div>
      </div>

      <div
        :class="{ hidden: expEduSwitch }"
        class="space-y-4 sm:space-y-4 md:space-y-6 lg:space-y-8"
      >
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
          Education
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
              lg:gap-0
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
              University of the People, <br class="hidden sm:inline" />BSc.
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
              lg:gap-0
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
              Free Code Camp, <br class="hidden sm:inline" />Responsive Web
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
          class="
            bg-secondary-main
            p-2
            rounded-lg
            font-serif
            text-xs
            sm:text-sm
            lg:text-lg
            flex
            items-center
            justify-between
            gap-2
          "
          href="#"
          ><img
            src="https://img.icons8.com/wired/20/000066/download.png"
          />Download Resume</a
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
      isTruncated1: true,
      isTruncated2: true,
      isTruncated3: true,
      isTruncatedText1: "text1",
      isTruncatedText2: "text2",
      isTruncatedText3: "text3",
      expEduSwitch: true,
    };
  },
  methods: {
    readMore(id) {
      if (id == this.isTruncatedText1) {
        this.isTruncated1 = !this.isTruncated1;
        this.isTruncated2 = true;
        this.isTruncated3 = true;
      }
      if (id == this.isTruncatedText2) {
        this.isTruncated1 = true;
        this.isTruncated2 = !this.isTruncated2;
        this.isTruncated3 = true;
      }
      if (id == this.isTruncatedText3) {
        this.isTruncated1 = true;
        this.isTruncated2 = true;
        this.isTruncated3 = !this.isTruncated3;
      }
    },
    switchExpEdu() {
      this.expEduSwitch = !this.expEduSwitch;
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
