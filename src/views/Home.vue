<template>
  <div id="home">
    <img class="logo" :src="logoURL" alt="logo" />

    <h1>{{title}}</h1>
  </div>
</template>

<script>
import image from '../assets/logo.jpeg'
export default {
  data() {
    return {
      title: '👋Hello world🌎',
      logoURL: image,
    }
  }
}
</script>