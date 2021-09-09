<template>
  <div class="w-full">
    <div class="bg-pattern-5">
      <main class="h-screen flex">
        <div class="pt-24 px-2 sm:pl-32 sm:pr-20 items-center justify-center">
          <!-- <div class="">
		  			<div class="">
		  				<h2 class="font-lob">Project Name</h2>
		  				<p>Project type</p>
		  			</div>
		  			<div class="">
		  				<img src="">
		  			</div>
			  	</div> -->
          <!-- Slider main container -->
          <div class="swiper-container swiper4">
            <!-- Parallax background element -->
            <div
              class="parallax-bg rounded-full"
              style="
                background-image: url(/assets/images/portfolio/portfolio.png);
              "
              data-swiper-parallax="-23%"
            ></div>
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper pri-text">
              <!-- Slides -->
              <div class="swiper-slide">
                <div class="">
                  <h2
                    class="font-title text-8xl"
                    data-swiper-parallax="-100"
                    data-swiper-parallax-opacity="0.1"
                  >
                    Project name 1
                  </h2>
                  <p
                    class="font-subtitle text-4xl"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-duration="600"
                    data-swiper-parallax-opacity="0.2"
                    data-swiper-parallax-scale="0.18"
                  >
                    Project type 1
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="">
                  <h2
                    class="font-title text-8xl"
                    data-swiper-parallax="-100"
                    data-swiper-parallax-opacity="0.1"
                  >
                    Project name 2
                  </h2>
                  <p
                    class="font-subtitle text-4xl"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-duration="600"
                    data-swiper-parallax-opacity="0.2"
                    data-swiper-parallax-scale="0.18"
                  >
                    Project type 2
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="">
                  <h2
                    class="font-title text-8xl"
                    data-swiper-parallax="-100"
                    data-swiper-parallax-opacity="0.1"
                  >
                    Project name 3
                  </h2>
                  <p
                    class="font-subtitle text-4xl"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-duration="600"
                    data-swiper-parallax-opacity="0.2"
                    data-swiper-parallax-scale="0.18"
                  >
                    Project type 3
                  </p>
                </div>
              </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
