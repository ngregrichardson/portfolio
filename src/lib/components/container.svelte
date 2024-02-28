<script lang="ts">
	export let title: string | undefined = undefined;
	export let id: string | undefined = undefined;
	
	let classNames = "flex flex-col gap-3";
	export { classNames as class };
</script>

<section class="max-w-3xl m-auto p-5 w-full">
	{#if title || id}
		<h2 id={id || ""}>{title || ""}</h2>
	{/if}
	<div class={classNames}>
		<slot />
	</div>
</section>

<style lang="postcss">
	h2 {
		@apply text-3xl font-bold mb-5;
	}
</style>