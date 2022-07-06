<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      

      <v-toolbar-title>
        <router-link to="/" style="color:white; text-decoration: none;">Curso Alfa Web</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      user@user2.com
      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
    .text-white{
        color: #ffffff;
    }
</style>
