<template>
  <div id="nav" class="content">
    <router-link to="/home1">Home1</router-link> |
    <router-link to="/about1">About1</router-link>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/experience">Experience</router-link> |
    <router-link to="/portfolio">Portfolio</router-link> |
    <router-link to="/whatido">WhatIDo</router-link> -->

    <router-view v-slot="{ Component, route }">
      <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script></script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
