<script lang="ts">
	export let name: string;
	export let imageUrl: string;
	export let color: string;
	export let href: string;
	export let invert: boolean = false;
</script>

<div class="w-14 h-14 md:w-24 md:h-24 cursor-pointer relative group/skill overflow-visible">
	<div class="absolute scale-200 opacity-0 group-hover/skill:opacity-100 top-0 bottom-0 left-1/2 -translate-x-1/2 aspect-square to-transparent transition-all radial-gradient overflow-visible" style="--radial-color:{invert ? "hsl(var(--foreground))" : color};" />
	<a
		class="grayscale hover:grayscale-0 transition-all overflow-visible"
		title={name}
		href={href}
		target="_blank"
	>
		<img src={imageUrl} alt={name} class="overflow-visible group-hover/skill:animate-wiggle w-full h-full object-contain rounded transition-all {invert ? "dark:invert contrast-50 hover:contrast-100" : ""}" />
	</a>
</div>

<style>
	.radial-gradient {
		background-image: radial-gradient(var(--radial-color) 0%, transparent 75%);
	}
</style>
