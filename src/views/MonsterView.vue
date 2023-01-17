<script setup>
	import { useRoute } from 'vue-router';
	import { useMonsterStore } from '@/stores/monsters';

	const route = useRoute();
	const monsters = useMonsterStore();

	const monster = monsters.list.find(function (record) {
		return record.slug == route.params.slug;
	});
</script>

<template>
	<!-- {{ route.params.slug }} -->
	<h1 class="loud-voice">{{ monster.name }}</h1>
</template>
