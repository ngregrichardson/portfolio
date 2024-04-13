<script lang="ts">
	import { enhance } from '$app/forms';
	import { env } from '$env/dynamic/public';
	import HandDrawnArrow from '$lib/icons/handDrawnArrow.svelte';
	import Container from '$src/lib/components/container.svelte';
	import { Loader2 } from 'lucide-svelte';
	import { DateTime } from 'luxon';
	import { Turnstile } from 'svelte-turnstile';
	import type { ActionData } from './$types';

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

	const vendorImages = [
		"status",
		"menu",
		"sales"
	];

	const userImages = [
		"search",
		"menu"
	];

	const zikiImages = [
		"menu",
		"order"
	];

	export let form: ActionData;

	let isSubmittingForm = false;
</script>

<main id="main" class="my-10 flex flex-col gap-10">
	<Container class="grid grid-cols-3 gap-5">
		<img
			src="./portrait.webp"
			alt="Me, Noah, standing against a wall trying to look cool"
			class="grayscale hover:transition-all hover:grayscale-0 row-start-2 row-end-2 md:row-start-1 md:row-end-1 col-start-1 col-end-4 sm:col-start-2 sm:col-end-2 md:col-start-1"
		/>
		<div class="flex items-center col-start-1 col-end-4 md:col-start-2 md:col-end-4">
			<div>
				I have been programming as a hobby for
				<h6 class="standout" title="Since {hobbyStartDate.toFormat('DDD')}">
					{hobbyDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} milliseconds
				</h6>
				and building professional software for
				<h6 class="standout" title="Since {professionalStartDate.toFormat('DDD')}">
					{isAlmostNext ? 'almost' : ''}
					{professionalYears} years</h6>.
				</div>
		</div>
	</Container>
	<Container title="what i do">
		<p>
			I love working with new technologies and attempting projects outside my comfort zone. While I mainly focus on full-stack web and mobile experiences, I've developed games in 72 hours in Unity, built a multitude of custom Discord bots, and contibuted to open source projects like <a href="https://orm.drizzle.team/" target="_blank">Drizzle ORM</a>. I love finding new projects (even in my spare time!) to use as an excuse to learn something new.
		</p>
		<p>
			Through my schooling, my professional experience, and my personal projects, I've spent thousands of hours across dozens of different languages, frameworks, tools, and services, and I'm always trying out the latest and greatest technologies.
		</p>
	</Container>
	<Container title="how i started">
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
				<HandDrawnArrow class="fill-accent scale-x-flip  -rotate-[30deg] w-[80px] md:w-[100px]" role="presentation" />
				<h3 class="text-accent font-handlee text-2xl md:text-3xl">that's me!</h3>
			</div>
		</div>
		<p>
			Towards the end of high school, I learned how to build websites, then quickly began making
			web apps with React. At first they were focused on robotics, like a multi-stream competition-watching site <a href="https://github.com/ngregrichardson/TeamTracker" target="_blank">TeamTracker</a>, but they expanded to virtually everything, like an automatic video censoring site <a href="https://github.com/ngregrichardson/bleep">Bleep</a>.
		</p>
	</Container>
	<Container title="my educational experience" class="grid grid-cols-3 gap-5">
		<p class="flex items-center col-start-1 col-end-4 md:col-start-2 md:col-end-4">
			Out of high school, I persued my Bachelor's in Computer Science at Drexel University in Philadelphia, PA. I decided on a 5 year program with three 6-month work experiences (co-ops) to gain professional experience before graduation.
		</p>
		<img
			src="/images/philly.webp"
			alt="My workspace on Drexel's campus"
			class="grayscale hover:transition-all hover:grayscale-0 row-start-2 row-end-2 md:row-start-1 md:row-end-1 col-start-1 col-end-4 sm:col-start-2 sm:col-end-2 md:col-start-1"
		/>
		<p  class="flex items-center col-start-1 col-end-4 md:col-end-4">Midway through my five year program, I decided to switch to a 4+1 program to earn my Bachelors and Masters in Computer Science in just five years. By skipping my third co-op, I was able to take graduate-level courses alongside my undergraduate courses to earn my Masters in just one year. I graduated with my Bachelors in Computer Science with concentrations in Artificial Intelligence and Software Engineering in June 2023, and my Masters in Computer Science will be awarded in June 2024.</p>
	</Container>
	<Container title="my professional experience">
		<p>
			Three months into my freshman year at Drexel, I joined a local startup TruckBux as a Full Stack Developer. TruckBux was developing a platform for food trucks to accept online orders for pickup and delivery. During my first year I rebuilt the vendor app in React Native to overhaul the UI, functionality, and improve maintainability and performance. This included changes to the Java Spring backend to support the new features and improve the user experience.
		</p>
		<div class="max-w-full w-full flex gap-4 space-between">
			{#each vendorImages as imageName (imageName)}
				<img
					src={`/images/vendor/${imageName}.webp`}
					alt={`A screenshot of the TruckBux vendor app showing the ${imageName} screen`}
					class="flex-1 rounded-sm h-auto w-1/3"
				/>
			{/each}
		</div>
		<p>
			When my first co-op started, I assumed the role of Lead Developer at the company. I kept my existing responsibilities while also leading the development team of other employees and Drexel co-ops. During this time, I rebuilt the admin panel in React and overhauled the user app in React Native as well. The changes to the user app also included a major overhaul of the backend to support Firebase authentication, improve logging and error reporting, and upgrade the UI from a legacy design. I developed over 90% of the code in the new app in under 3 months, pushing a stable production build in the first quarter of 2021.
		</p>
		<div class="max-w-full w-full flex gap-4 space-between">
			{#each userImages as imageName (imageName)}
				<img
					src={`/images/user/${imageName}.webp`}
					alt={`A screenshot of the TruckBux user app showing the ${imageName} screen`}
					class="flex-1 rounded-sm h-auto w-1/2"
				/>
			{/each}
		</div>
	</Container>
	<Container>
		<p>
			After another few months at TruckBux, I was given the opportunity to work as a Software Engineer at <a href="https://sig.com/" target="_blank">Susquehanna International Group</a> (SIG) for my second Drexel co-op. I was placed on a team that gave me my own project to work on. I was responsible for the full stack development of a centralized logging system that could collect logs from any system and funnel them into a single web interface for triage and analysis. Starting mostly from scratch, I built the system with JQuery, .NET, and MS SQL Server. 
		</p>
		<p>
			By the end of my six months at SIG, an MVP was in production and was used by multiple other projects the team maintained. I decided to continue part-time at SIG for another six months, where I helped mentor the next co-op, continued work on the logging platform, and developed detailed documentation to migrate my team from Perforce to Git.
		</p>
	</Container>
	<Container>
		<p>
			Since my time at SIG, I have done freelance work for multiple companies and individuals, most recently developing the NestJS backend for <a href="https://ziki.kitchen" target="_blank">ZIKI&copy;</a>, a Greek/Mexican fusion mobile kitchen chain in Austin, Texas. Built from scratch, this backend integrates with Toast, Stripe, Google Maps, and DoorDash to to provide fast and reliable mobile ordering for pickup and delivery.
		</p>
		<div class="max-w-full w-full flex gap-4 space-between">
			{#each zikiImages as imageName (imageName)}
				<img
					src={`/images/ziki/${imageName}.webp`}
					alt={`A screenshot of the ZIKI user app showing the ${imageName} screen`}
					class="flex-1 rounded-sm h-auto w-1/2"
				/>
			{/each}
		</div>
		<p>While building the backend, the main focus was on security and reliability. To ensure high availability, I developed automated Docker deployments with GitHub actions that will automatically start updated containers, wait for them to become healthy, then take down the old containers. This allows deployment (or a failed deployment) without any disruption since Traefik helps load balance the requests between the containers. To improve the maintainability of the system, I also deployed logging and monitoring infrastructure to handle debugging and status updates. You can see some of the infrastructure <a href="https://status.ziki.kitchen/" target="_blank">here</a>.</p>
	</Container>
	<Container title="my resume">
		<p>
			If you're interested in a condensed version of my experience, you can <a href="https://rxresu.me/ngregrichardson/resume" target="_blank">view</a> or <a href="https://storage.rxresu.me/clp9g27awg9xw9hunkwl3h72e/resumes/clp9kzsbw09lpm3d22qwq2vtt.pdf" target="_blank">download</a> my resume.
		</p>
	</Container>
	<Container title="get in touch">
		{#if form?.message}
			<h3 class="text-3xl mt-6 font-bold text-accent text-center">{form?.message}</h3>
		{:else}
			<p>
				if you're interested in the work i've done, the work i'm doing, or the work i could do for you, please get in touch! i'm always looking for new opportunities and challenges.
			</p>
			<form method="POST" class="flex flex-col gap-4 mt-6" use:enhance={() => {
				isSubmittingForm = true;
				return async ({ update }) => {
					isSubmittingForm = false;
					update();
				}
			}} action="?/contact">
				<div class="flex flex-col sm:flex-row gap-4">
					<label>
						<span>Name <span class="required">*</span></span>
						<input type="text" name="name" aria-required="true" aria-label="name" class={form?.errors?.name ? '!border-2 !border-destructive' : ""} value={form?.errors?.name?.value || ''} />
						{#if form?.errors?.name}
							<p class="error">{form?.errors?.name?.message}</p>
						{/if}
					</label>
					<label>
						<span>Email <span class="required">*</span></span>
						<input type="email" name="email" aria-required="true" aria-label="email" class={form?.errors?.email ? '!border-2 !border-destructive' : ""} value={form?.errors?.email?.value || ''} />
						{#if form?.errors?.email}
							<p class="error">{form?.errors?.email?.message}</p>
						{/if}
					</label>
				</div>
				<label>
					<span>Message <span class="required">*</span></span>
					<textarea name="message" aria-required="true" aria-label="message" class={form?.errors?.message ? '!border-2 !border-destructive' : ""} value={form?.errors?.message?.value || ''} />
					{#if form?.errors?.message}
						<p class="error">{form?.errors?.message?.message}</p>
					{/if}
				</label>
				<div class="flex flex-col gap-4 items-end w-full">
					<Turnstile siteKey={env.PUBLIC_TURNSTILE_SITE_KEY || ""} appearance="interaction-only" />
					{#if form?.errors?.['cf-turnstile-response']}
						<p class="error">{form?.errors?.['cf-turnstile-response']?.message}</p>
					{/if}
					<button type="submit" class="bg-accent text-background p-2 rounded-md w-fit px-8 py-2">
						{#if isSubmittingForm}
							<Loader2 class="animate-spin" />
						{:else}
							Send
						{/if}
					</button>
				</div>
			</form>
		{/if}
	</Container>
</main>

<style lang="postcss">
	p {
		@apply text-lg;
	}
	.standout {
		@apply inline font-bold cursor-help text-2xl;
	}
	img {
		@apply rounded-sm;
	}

	a {
		@apply underline underline-offset-2 text-accent;
	}
	
    label {
		@apply flex flex-col gap-1 flex-1;
	}

	input, textarea {
		@apply p-2 border border-border rounded-md bg-muted text-muted-foreground;
	}

    .error {
        @apply text-destructive text-right text-sm;
    }

    .required {
        @apply text-destructive;
    }
</style>
