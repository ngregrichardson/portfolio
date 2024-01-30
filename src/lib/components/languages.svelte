<script lang="ts">
	import languages from '$src/configs/languages.json';
	import frameworks from '$src/configs/frameworks.json';
	import services from '$src/configs/services.json';
	import tools from '$src/configs/tools.json';

	import Language from './language.svelte';

	console.log(languages);
</script>

<div class="w-full relative flex flex-row whitespace-nowrap group justify-around">
	{#each languages as language (language.name)}
		<Language {...language} />
	{/each}
</div>
