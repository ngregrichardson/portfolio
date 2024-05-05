<script lang="ts">
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
</script>

<div class="flex items-center gap-5">
    {#each links as link}
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-end hover:underline"
            aria-label="{link.name}, opens in new tab"
            data-umami-event="Viewed {link.name}"
        >
            <MoveUpRight size="20px" role="presentation" />{link.name}
        </a>
    {/each}
</div>