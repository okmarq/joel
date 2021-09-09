<template>
  <div class="w-full img-4">
    <div class="bg-pattern-6">
      <main class="h-screen">
        <div class="pt-24 px-2 sm:pl-32 sm:pr-20">
          <div class="flex">
            <div class="lg:w-2/5 space-y-20">
              <div class="">
                <h2 class="font-title text-5xl hidden lg:block">Contact</h2>
              </div>

              <div class="lg:relative">
                <p class="font-subtitle text-2xl hidden lg:block">
                  Connect with me
                </p>
                <div
                  class="
                    flex flex-col
                    lg:flex-row
                    absolute
                    right-2
                    sm:right-4
                    lg:top-8 lg:left-0
                  "
                >
                  <span class="">Gh</span>
                  <span class="">Ln</span>
                  <span class="">In</span>
                  <span class="">Fb</span>
                  <span class="">Tw</span>
                  <span class="">Wh</span>
                </div>
              </div>

              <div class="space-y-14 hidden lg:block">
                <p>
                  <span class="font-subtitle text-lg">Email:</span>
                  <br />okmarq@gmail.com
                </p>
                <p>
                  <span class="font-subtitle text-lg">Phone:</span> <br />+234
                  (0) 810-725-0441
                </p>
              </div>
            </div>

            <div class="w-full space-y-4 sm:space-y-14 block">
              <div class="">
                <h3
                  class="
                    font-subtitle
                    text-2xl
                    md:text-4xl
                    font-semibold
                    italic
                  "
                >
                  Want to know more about me, build something awesome or
                  collaborate?
                </h3>
              </div>
              <div class="">
                <p class="sec-text font-subtitle text-2xl">Send me a message</p>
                <form class="flex flex-col gap-4 sm:gap-0" action="">
                  <div class="flex flex-col sm:flex-row gap-4">
                    <input
                      class="
                        flex-1
                        placeholder-white
                        bg-gray-300 bg-opacity-20
                        p-3
                        border-none
                        focus:outline-none focus:ring-0
                        rounded-t-lg
                        sm:rounded-tr-none
                      "
                      type="text"
                      name=""
                      placeholder="Your name (required)"
                      required
                    />

                    <input
                      class="
                        flex-1
                        placeholder-white
                        bg-gray-300 bg-opacity-20
                        p-3
                        border-none
                        focus:outline-none focus:ring-0
                        rounded-none
                        sm:rounded-tr-lg
                      "
                      type="email"
                      name=""
                      placeholder="Your email (required)"
                      required
                    />
                  </div>
                  <div class="flex">
                    <textarea
                      class="
                        flex-1
                        placeholder-white
                        bg-gray-300 bg-opacity-20
                        p-3
                        border-none
                        w-full
                        h-32
                        focus:outline-none focus:ring-0
                      "
                      name=""
                      placeholder="Your message (required)"
                      required
                    ></textarea>
                  </div>
                  <div class="">
                    <button
                      class="
                        text-col-2
                        p-3
                        rounded-b-lg
                        sec-col
                        font-subtitle
                        text-lg
                        w-full
                      "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
