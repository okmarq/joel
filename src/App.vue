<template>
  <div class="content">
    <router-link to="/home1">Home1</router-link> |
    <router-link to="/about1">About1</router-link>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/experience">Experience</router-link> |
    <router-link to="/portfolio">Portfolio</router-link> |
    <router-link to="/whatido">WhatIDo</router-link> route-->

    <h1 class="animate__animated animate__bounce">An animated element</h1>
    
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script></script>

<style>
.content {
  width: 100%;
  min-height: 100vh;
}

.page {
  position: absolute;
  top: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 1em;
}

a:hover,
a.router-link-active {
  border-bottom: 2px solid #3498db;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
