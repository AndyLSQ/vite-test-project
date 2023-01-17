<script setup>
   import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
   <header>
      <div class="wrapper">
         <nav class="site-menu">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <RouterLink to="/monsters">Monsters</RouterLink>
         </nav>
      </div>
   </header>
   <main class="outlet">
      <RouterView />
   </main>

   <footer>Footer</footer>
</template>

<style scoped>
   .site-menu {
      display: flex;
      flex-direction: row;
   }

   .site-menu a {
      padding: 1em;
   }

   .router-link-active {
      border-bottom: 3px solid red;
   }
</style>
