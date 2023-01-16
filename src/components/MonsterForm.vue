<script setup>
	import { ref, reactive } from 'vue';
	import { useMonsterStore } from '@/stores/monsters'; //no .js extension used here

	const monsters = useMonsterStore();

	const monster = reactive({
		name: 'Crunchy',
		age: 13,
	});
</script>

<template>
	<form>
		<div class="field">
			<label for="n">Monster Name</label>
			<input type="text" id="n" v-model="monster.name" />
		</div>

		<div class="field">
			<label for="a">Age</label>
			<input type="number" id="a" v-model="monster.age" />
		</div>

		<button @click="store.addMonster(monster)" type="submit">Submit</button>
	</form>

	<div>
		<ul>
			<li v-for="monster in monsters.list">
				<div>{{ monster.name }}</div>
			</li>
		</ul>
	</div>
</template>
