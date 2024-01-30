<script lang="ts">
	export let name: string;
	export let imageUrl: string;
</script>

<div
	class="grayscale hover:grayscale-0 transition-all w-10 h-10 md:w-24 md:h-24 cursor-pointer"
	role="tooltip"
>
	<img src={imageUrl} alt={name} class="w-full h-full object-contain rounded transition-all" />
</div>
