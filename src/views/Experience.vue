<template>
  <div class="w-full img-3">
    <div class="bg-pattern-3">
      <main class="h-screen">
        <div class="pt-20 px-2 sm:pl-20 sm:pr-6 lg:pl-28 lg:pr-16">
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
              class="sec-col p-2 rounded-l-lg font-subtitle pri-text font-bold"
            >
              Experience
            </button>
            <button class="sec-col p-2 rounded-r-lg font-subtitle">
              Education
            </button>
          </div>

          <div class="space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8">
            <h2
              class="
                font-title
                pri-text
                text-xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              "
            >
              Experience
            </h2>
            <div class="flex">
              <div class="flex flex-col md:flex-row w-5/12 sm:w-4/12 md:w-9/12">
                <p
                  class="
                    flex-1
                    font-subtitle
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                  "
                >
                  2020 - Present
                </p>
                <p
                  class="
                    flex-1
                    font-subtitle
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                  "
                >
                  Instructor,<br />The Roothub
                </p>
              </div>
              <p class="w-full text-justify text-xs sm:text-sm lg:text-base">
                I guide trainees through the process of developing functional
                applications with HTML, CSS, PHP, MySQL, and Laravel. Enabling
                them to acquire a robust understanding of software development.
                as well as gain the required skills to work on software
                development projects.
              </p>
            </div>
            <hr />
            <div class="flex">
              <div class="flex flex-col md:flex-row w-5/12 sm:w-4/12 md:w-9/12">
                <p
                  class="
                    flex-1
                    font-subtitle
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                  "
                >
                  2018 - Present
                </p>
                <p
                  class="
                    flex-1
                    font-subtitle
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                  "
                >
                  Full Stack Developer,<br />self Employed
                </p>
              </div>
              <p class="w-full text-justify text-xs sm:text-sm lg:text-base">
                As a full-stack developer, I am involved in every aspect of
                project development to gain more understanding to ensure I
                deliver fully functional products. with a strong background in
                graphics, I can convert visual designs to code. while
                interpreting clients' specifications into manageable code.
              </p>
            </div>
            <hr />
            <div class="flex">
              <div class="flex flex-col md:flex-row w-5/12 sm:w-4/12 md:w-9/12">
                <p
                  class="
                    flex-1
                    font-subtitle
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                  "
                >
                  2013 - 2015
                </p>
                <p
                  class="
                    flex-1
                    font-subtitle
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                  "
                >
                  Supervisor,<br />Jomars General Services
                </p>
              </div>
              <p class="w-full text-justify text-xs sm:text-sm lg:text-base">
                Distribution and delivery of company’s products to end
                distributors/wholesalers and retailers, auditing of inventory
                brought in or taken out, weekly staff attendance sheets and
                posting of income received to the company's account.
              </p>
            </div>
          </div>

          <div class="space-y-8 hidden">
            <h2 class="font-title pri-text text-5xl">Education</h2>
            <div class="flex">
              <div class="flex flex-col md:flex-row w-5/12 sm:w-4/12 md:w-9/12">
                <p
                  class="
                    flex-1
                    font-subtitle
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                  "
                >
                  2020 - 2024
                </p>
                <p
                  class="
                    flex-1
                    font-subtitle
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                  "
                >
                  University of the People,<br />BSc. Computer Science
                </p>
              </div>
              <p class="w-full text-justify text-xs sm:text-sm lg:text-base">
                Giving myself an added advantage to an already existing
                knowledge base on computer science and programming.
              </p>
            </div>
            <hr />
            <div class="flex">
              <div class="flex flex-col md:flex-row w-5/12 sm:w-4/12 md:w-9/12">
                <p
                  class="
                    flex-1
                    font-subtitle
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                  "
                >
                  2016 - 2017
                </p>
                <p
                  class="
                    flex-1
                    font-subtitle
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                  "
                >
                  Free Code Camp,<br />Responsive Web Design
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
              class="sec-col p-2 rounded-lg font-subtitle text-sm lg:text-lg"
              href="#"
              >Download Resume</a
            >
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
