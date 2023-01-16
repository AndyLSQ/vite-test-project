import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useMonsterStore = defineStore('monsters', function () {
   // monsters list
   const list = reactive([{ name: 'one' }, { name: 'two' }]);

   // add a monster
   function add(monster) {
      list.push(monster);
   }

   return {
      list: list,
      add: add,
   };
});