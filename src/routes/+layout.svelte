<script lang="ts">
	import '../app.css';
	import Container from '$src/lib/components/container.svelte';
	import Skills from '$src/lib/components/skills.svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import SocialLinks from '$src/lib/components/socialLinks.svelte';
	import { init, trackEvent } from '@aptabase/web';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';

	const handleScrollToTop: MouseEventHandler<HTMLAnchorElement> = (event) => {
		event.preventDefault();

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		if(env.PUBLIC_APTABASE_APP_KEY) {
			init(env.PUBLIC_APTABASE_APP_KEY, {
				host: 'https://stats.iamnoah.dev'
			});

			trackEvent('Viewed', {
				path: '/'
			});
		}
	});
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
	<a href="#main" class="absolute left-3 top-3 w-0 h-0 overflow-hidden focus:visible focus:w-fit focus:h-fit focus:p-1">Skip navigation</a>
	<Container>
		<header class="flex flex-col xs:flex-row justify-between items-center gap-3">
			<h1 id="brand" class="text-2xl font-bold">🌊hi, i'm noah</h1>
			<SocialLinks />
		</header>
	</Container>
	<slot />
	<Container>
		<footer class="flex flex-col xs:flex-row justify-between items-center gap-3">
			<a href={'/'} class="flex items-end hover:underline" on:click={handleScrollToTop}>Back to Top</a>
			<SocialLinks />
		</footer>
	</Container>
	<Skills />
</div>
