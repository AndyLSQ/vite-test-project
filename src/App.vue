<script setup>
   import { RouterLink, RouterView, useRoute } from 'vue-router';
   import { useInterfaceStore } from '@/stores/interface';

   const ui = useInterfaceStore();
   const route = useRoute();

   // watch: {
   //    $route(){
   //       // do something
   //    };
   // }
</script>

<template>
   <header v-bind:class="`${route.name} ${ui.menuClass}`">
      <!-- <pre>
         <code>
           'ROUTE NAME:' {{route.name}}
         </code>
      </pre> -->
      <div class="wrapper">
         <button @click="ui.toggleMenu()" class="menu-toggle">Toggle menu</button>
         <!-- {{ ui.menuClass }} -->
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
      flex-wrap: wrap;
   }

   .site-menu a {
      padding: 1em;
   }

   .router-link-active {
      border-bottom: 3px solid red;
   }

   @media (min-width: 500px) {
      .menu-toggle {
         display: none;
      }
   }

   @media (max-width: 500px) {
      .site-menu {
         display: none;
      }

      .menu-open .site-menu {
         display: flex;
         flex-direction: column;
         position: fixed;
         top: 10;
         left: 0;
         width: 100%;
         /*         height: 75%;*/
         background-color: var(--paper);
         border: 3px solid purple;
      }

      .menu-closed .site-menu {
         display: none;
      }
   }
</style>
