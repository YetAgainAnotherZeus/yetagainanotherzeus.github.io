<script lang="ts">
	import { selectedSkillsStore } from '$lib/SelectedSkills';
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		website: string;
		children?: Snippet;
	}

	let { title, website, children }: Props = $props();

	let selectedSkills: string[] = $state([]);

	$effect(() => {
		selectedSkillsStore.subscribe((value) => {
			selectedSkills = value;
		});
	});
</script>

<!-- class={selectedSkills.includes(title)
		? 'rounded-lg outline outline-1 outline-red-600 drop-shadow-[0_0px_8px_rgba(236,72,153,0.4)]'
		: ''} -->

<a
	href={website}
	target="_blank"
	rel="noopener noreferrer"
	{title}
	class={selectedSkills.includes(title)
		? 'rounded-lg rainbow-outline transition-all duration-500'
		: ''}
>
	{@render children?.()}
</a>

<style>
	/* Define the rainbow animation for both outline and drop shadow */
	@keyframes rainbowEffect {
		0% {
			outline-color: rgba(255, 0, 0, 0.7);
			box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
		}
		14.28% {
			outline-color: rgba(255, 165, 0, 0.7);
			box-shadow: 0 0 20px rgba(255, 165, 0, 0.7);
		}
		28.57% {
			outline-color: rgba(255, 255, 0, 0.7);
			box-shadow: 0 0 20px rgba(255, 255, 0, 0.7);
		}
		42.85% {
			outline-color: rgba(0, 255, 0, 0.7);
			box-shadow: 0 0 20px rgba(0, 255, 0, 0.7);
		}
		57.14% {
			outline-color: rgba(0, 0, 255, 0.7);
			box-shadow: 0 0 20px rgba(0, 0, 255, 0.7);
		}
		71.42% {
			outline-color: rgba(75, 0, 130, 0.7);
			box-shadow: 0 0 20px rgba(75, 0, 130, 0.7);
		}
		85.71% {
			outline-color: rgba(238, 130, 238, 0.7);
			box-shadow: 0 0 20px rgba(238, 130, 238, 0.7);
		}
		100% {
			outline-color: rgba(255, 0, 0, 0.7);
			box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
		}
	}

	/* Rainbow outline and drop shadow class */
	.rainbow-outline {
		outline: 2px solid red; /* Start with red outline */
		animation: rainbowEffect 15s infinite; /* Animate both outline and drop shadow */
		transition:
			outline-color 0.5s ease-in-out,
			box-shadow 0.5s ease-in-out;
	}
</style>
