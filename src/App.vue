<template>
  <html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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
    },

    computed: {
      authUser() {
        return this.$store.getters['auth/userData'];
      }
    },

    watch: {

      authUser() {
        if(this.authUser){
          window.Echo.private('App.User.' + this.authUser.id)
                  .listen('AuthUserVisitProfile', ({authUser}) => {
                    if(this.authUser.id !== authUser.id){
                      this.$toasted.show('У вас новый гость: ', {
                        icon: 'face',
                        action : {
                          text: authUser.name,
                          onClick: () =>  this.$router.replace({ name: 'profileById', params: { id: authUser.id }})
                        }
                      }).goAway(3500);
                    }
                  });
        }
      }
    }

  }
</script>

<style>
  img{ max-width:100%;}

  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>
