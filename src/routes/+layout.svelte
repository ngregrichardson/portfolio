<script>
	import { MoveUpRight } from 'lucide-svelte';
	import '../app.css';
	import Container from '$src/lib/components/container.svelte';

	const links = [
		{
			name: 'GitHub',
			url: 'https://github.com/ngregrichardson'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/ngregrichardson'
		}
	];
</script>

<div class="w-full">
	<Container>
		<header class="flex justify-between items-end xs:items-center gap-3">
			<h1 class="text-2xl font-bold">🌊hi, i'm noah</h1>
			<div class="flex items-center gap-5">
				{#each links as link}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-end hover:underline"
					>
						<MoveUpRight size="20px" />{link.name}
					</a>
				{/each}
			</div>
		</header>
	</Container>
	<slot />
	<Container>
		<footer class="flex justify-between items-end xs:items-center gap-3">
			<a href={'/'} class="flex items-end hover:underline">Back to Top</a>
			<div class="flex items-center gap-5">
				{#each links as link}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-end hover:underline"
					>
						<MoveUpRight size="20px" />{link.name}
					</a>
				{/each}
			</div>
		</footer>
	</Container>
</div>
