<template>
	<form>
		<h2>{{ sectionTitle }}</h2>

		<input-field>
			<label for="a">Quote</label>
			<input id="a" type="text" v-model="data.quote" required />
		</input-field>

		<input-field>
			<label for="b">Author</label>
			<input id="b" type="text" v-model="data.author" required />
		</input-field>

		<button @click.prevent="submit">Submit</button>
	</form>

	<output>
		{{ data.output }}
	</output>
</template>

<script setup>
	import { ref, reactive, computed } from 'vue';

	const sectionTitle = '3. Quotes and Authors'; // not reactive

	const data = reactive({
		quote: 'I cannot tell a lie',
		author: 'George Washington',
		output: '',
	});

	const submit = computed(function () {
		data.output = `${data.author} coined the phrase "${data.quote}".`;
	});
</script>

<style>
	body {
		min-height: 100vh;
		display: grid;
		place-items: center;
		font-size: 1.4rem;
		padding: 20px;
	}
	form {
		display: grid;
		gap: 20px;
	}
	input-field {
		display: grid;
	}
	label {
		font-size: 1.1rem;
	}
	span {
		color: green;
	}
</style>
