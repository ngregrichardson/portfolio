<script lang="ts">
	import HandDrawnArrow from '$lib/icons/handDrawnArrow.svelte';
	import { DateTime } from 'luxon';
	import Container from '$src/lib/components/container.svelte';
	import Languages from '$src/lib/components/languages.svelte';

	const hobbyStartDate = DateTime.fromObject({
		day: 26,
		month: 9,
		year: 2016
	});

	const professionalStartDate = DateTime.fromObject({
		day: 3,
		month: 11,
		year: 2019
	});

	let hobbyDiff = DateTime.now().diff(hobbyStartDate).toMillis();

	let professionalDiff = DateTime.now().diff(professionalStartDate);

	$: professionalYears = Math.round(professionalDiff.as('years'));

	$: isAlmostNext = professionalDiff.as('years') < professionalYears;

	setInterval(() => {
		hobbyDiff = DateTime.now().diff(hobbyStartDate).toMillis();
	}, 1);

	setInterval(() => {
		professionalDiff = DateTime.now().diff(professionalStartDate);
	}, 1000);
</script>

<main class="my-10 flex flex-col gap-10">
	<Container>
		<section class="grid grid-cols-3 gap-5">
			<img
				src="./portrait.webp"
				alt="Me, Noah, standing against a wall trying to look cool"
				class="grayscale hover:transition-all hover:grayscale-0 row-start-2 row-end-2 md:row-start-1 md:row-end-1 col-start-1 col-end-4 sm:col-start-2 sm:col-end-2 md:col-start-1"
			/>
			<div class="flex items-center col-start-1 col-end-4 md:col-start-2 md:col-end-4">
				<p>
					I have been programming as a hobby for
					<strong title="Since {hobbyStartDate.toFormat('DDD')}">
						{hobbyDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} milliseconds
					</strong>
					and building professional software for
					<strong title="Since {professionalStartDate.toFormat('DDD')}">
						{isAlmostNext ? 'almost' : ''}
						{professionalYears} years</strong
					>.
				</p>
			</div>
		</section>
	</Container>
	<Container>
		<section class="flex flex-col gap-3">
			<p>
				I began to program when I joined my high school's robotics team in my sophomore year. Using
				Java, I spent the next few years as the software team's lead helping, mentoring, and
				teaching incoming members.
			</p>
			<div class="mt-10 relative">
				<img
					src="./robotics.webp"
					alt="My team and me standing around one of our robots"
					class="grayscale hover:transition-all hover:grayscale-0 row-start-2 row-end-2 md:row-start-1 md:row-end-1 col-start-1 col-end-4 sm:col-start-2 sm:col-end-2 md:col-start-1"
				/>
				<div class="absolute top-[-50px] left-[38%] z-10 flex items-start">
					<HandDrawnArrow class="fill-accent scale-x-flip -rotate-[30deg] w-[80px] md:w-[100px]" />
					<span class="text-accent font-handlee text-2xl md:text-3xl">that's me!</span>
				</div>
			</div>
		</section>
	</Container>
	<Container>
		<section class="flex flex-col gap-3">
			<p>
				Towards the end of high school, I learned how to build websites, then quickly began making
				web apps with React. At first they were focused on robotics, but then I built more and more
				for fun. Since then,
			</p>
		</section>
	</Container>
	<Container>
		<Languages />
	</Container>
</main>

<style lang="postcss">
	p {
		@apply text-lg;
	}
	strong {
		@apply cursor-help text-2xl;
	}
	img {
		@apply rounded-sm;
	}
</style>
