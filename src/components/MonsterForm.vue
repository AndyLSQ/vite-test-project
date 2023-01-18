<script setup>
	import { ref, reactive, onMounted } from 'vue';
	import { useMonsterStore } from '@/stores/monsters'; //no .js extension used here
	import { v4 as uuidv4 } from 'uuid';
	import slug from 'slug';

	const monsters = useMonsterStore();

	//use record constant to allow creating any number of monsters as distinct new objects
	//TODO: something to create ID, something to make slug into kabob case
	function save() {
		const record = {
			age: monster.age,
			id: uuidv4(),
			name: monster.name,
			slug: slug(monster.name),
		};
		monsters.add(record);
		clear();
		focusInput();
	}

	const monster = reactive({
		age: '',
		id: '',
		name: '',
		slug: '',
	});

	function clear() {
		monster.name = '';
		monster.age = '';
	}

	const nameInput = ref(null);

	function focusInput() {
		console.log('FOCUS: ', nameInput);
		nameInput.focus();
	}
</script>

<template>
	<form @submit.prevent="save()">
		<div class="field">
			<label for="n">Monster Name</label>
			<input ref="nameInput" type="text" id="n" v-model="monster.name" />
		</div>

		<div class="field">
			<label for="a">Age</label>
			<input type="number" id="a" v-model="monster.age" />
		</div>

		<button type="submit">Submit</button>
	</form>

	<div>
		<ul>
			<li v-for="monster in monsters.list">
				<RouterLink :to="`/monster/${monster.slug}`">
					{{ monster.name }}
				</RouterLink>
			</li>
		</ul>
	</div>
</template>
