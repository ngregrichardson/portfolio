<script lang="ts">
	import languages from '$src/configs/languages.json';
	import frameworks from '$src/configs/frameworks.json';
	import services from '$src/configs/services.json';
	import tools from '$src/configs/tools.json';
	import Chance from "chance";
	import Skill from './skill.svelte';

	let innerWidth = 0;

	const chance = new Chance();

	const shuffledSkills = chance.shuffle([...languages, ...frameworks, ...services, ...tools]);

	$: skills = shuffledSkills.reduce((acc, skill) => {
		if(acc.length === 0 || acc[acc.length - 1].length === (innerWidth < 1280 ? 8 : 16)) {
			acc.push([]);
		}

		acc[acc.length - 1].push(skill);

		return acc;
	}, [] as { name: string; imageUrl: string; color: string; href: string; invert?: boolean; }[][]);

	const rowClasses = "flex align-center whitespace-nowrap justify-around min-w-full flex-shrink animate-slide gap-2 md:gap-4 overflow-visible group-hover/skills:[animation-play-state:paused]";
</script>

<svelte:window bind:innerWidth />

<div class="w-full overflow-x-hidden flex flex-col xs:py-4 xs:gap-4 md:gap-10 md:p-10">
	{#each skills as row, i}
		<div class="w-full relative flex gap-4 overflow-visible group/skills">
			<div class={rowClasses} class:reverse={i % 2 === 0}>
				{#each row as skill (skill.name)}
					<Skill {...skill} />
				{/each}
			</div>
			<div class={rowClasses} class:reverse={i % 2 === 0}>
				{#each row as skill (skill.name)}
					<Skill {...skill} />
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.reverse {
		animation-direction: reverse;
	}

	.paused {
		animation-play-state: paused;
	}
</style>