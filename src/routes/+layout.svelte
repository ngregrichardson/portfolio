<script lang="ts">
	import { MoveUpRight } from 'lucide-svelte';
	import '../app.css';
	import Container from '$src/lib/components/container.svelte';
	import Skills from '$src/lib/components/skills.svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	const links = [
		{
			name: "Resume",
			url: "https://rxresu.me/ngregrichardson/resume"
		},
		{
			name: 'GitHub',
			url: 'https://github.com/ngregrichardson'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/ngregrichardson'
		}
	];

	const handleScrollToTop: MouseEventHandler<HTMLAnchorElement> = (event) => {
		event.preventDefault();

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<svelte:head>
	<title>hi, i'm noah | full-stack software developer</title>
	<meta name="title" content="hi, i'm noah | full-stack software developer">
	<meta name="description" content="i love working with new technologies and attempting projects outside my comfort zone. my software focuses on reliability and accessibility">
	<meta name="keywords" content="software, developer, typescript, react, javascript, rust, hire, reliable, performant, accessible, noah, richardson, masters, bachelors, computer science">
	<meta name="robots" content="index, follow">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="language" content="English">
	<meta name="revisit-after" content="7 days">

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://iamnoah.dev/" />
	<meta property="og:title" content="hi, i'm noah | full-stack software developer" />
	<meta property="og:description" content="i love working with new technologies and attempting projects outside my comfort zone. my software focuses on reliability and accessibility" />

	<meta property="twitter:url" content="https://iamnoah.dev/" />
	<meta property="twitter:title" content="hi, i'm noah | full-stack software developer" />
	<meta property="twitter:description" content="i love working with new technologies and attempting projects outside my comfort zone. my software focuses on reliability and accessibility" />
</svelte:head>

<div class="w-full">
	<Container>
		<header class="flex flex-col xs:flex-row justify-between items-center gap-3">
			<h1 id="brand" class="text-2xl font-bold">🌊hi, i'm noah</h1>
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
		<footer class="flex flex-col xs:flex-row justify-between items-center gap-3">
			<a href={'/'} class="flex items-end hover:underline" on:click={handleScrollToTop}>Back to Top</a>
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
	<Skills />
</div>
