<script setup>
   import { RouterLink, RouterView, useRoute } from 'vue-router';
   import { useInterfaceStore } from '@/stores/interface';

   const ui = useInterfaceStore();
   const route = useRoute();
</script>

<template>
   <header v-bind:class="`${route.name} ${ui.menuClass}`">
      <pre>
         <code>
            {{route.name}}
         </code>
      </pre>
      <div class="wrapper">
         {{ ui.menuClass }}
         <nav class="site-menu">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <RouterLink to="/monsters">Monsters</RouterLink>
         </nav>

         <button @click="ui.toggleMenu()">Toggle menu</button>
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
      flex-wrap: wrap;
   }

   .site-menu a {
      padding: 1em;
   }

   .router-link-active {
      border-bottom: 3px solid red;
   }
</style>
