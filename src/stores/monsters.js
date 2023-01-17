import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useMonsterStore = defineStore('monsters', function () {
   // monsters list
   const list = reactive([
      {
         id: 'asdfsad2343',
         name: 'Munchy',
         slug: 'munchy',
         age: 13,
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
