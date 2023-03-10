import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useMonsterStore = defineStore('monsters', function () {
   // monsters list
   const list = reactive([
      {
         id: 'asdfsad2343',
         name: 'Munchy',
         age: 13,
         slug: 'munchy',
      },
   ]);

   // add a monster
   function add(monster) {
      list.push(monster);
   }

   return {
      list: list,
      add: add,
   };
});
