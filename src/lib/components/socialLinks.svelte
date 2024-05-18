<script lang="ts">
	import { trackEvent } from '@aptabase/web';
	import { MoveUpRight } from 'lucide-svelte';

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

	const handleViewed = (name: string) => {
		trackEvent(`view ${name.toLowerCase()}`);
	}
</script>

<div class="flex items-center gap-5">
    {#each links as link}
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-end hover:underline"
            aria-label="{link.name}, opens in new tab"
			on:click={() => handleViewed(link.name)}
        >
            <MoveUpRight size="20px" role="presentation" />{link.name}
        </a>
    {/each}
</div>