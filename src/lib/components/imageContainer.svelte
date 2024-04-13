<script lang="ts">
    export let images: string[];
    export let namespace: string;
    export let alt: string;
    export let caption: string | undefined = undefined;
</script>

<div class="max-w-full w-full flex flex-col gap-1 my-10">
    <div class="w-full flex gap-4">
        {#each images as imageName (imageName)}
            <div class="flex-1 flex items-end">
                <img
                    src={`/images/${namespace}/${imageName}.webp`}
                    alt={alt.replaceAll('%s', imageName)}
                    class="w-full h-auto"
                />
            </div>
        {/each}
    </div>
    {#if caption}
        <p class="text-center text-sm text-muted-foreground mt-2">{caption}</p>
    {/if}
</div>