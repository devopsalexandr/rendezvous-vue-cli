<template>
  <html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  </head>

  <body>

  <nav-bar />

  <div class="container">
    <router-view/>
  </div>
  </body>

  </html>

</template>

<script>
  import NavBar from "./views/NavBar";

  export default {
    components: {
      'NavBar' : NavBar
    }
  }
</script>

<style>
</style>
