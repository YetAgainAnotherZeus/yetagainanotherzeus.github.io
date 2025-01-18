<script lang="ts">
	import { selectedSkillsStore } from './SelectedSkills';


	interface Props {
		title: string;
		website: string;
		date: string;
		skills?: string[];
	}

	let {
		title,
		website,
		date,
		skills = []
	}: Props = $props();
</script>

<a
	onmouseenter={() => selectedSkillsStore.set(skills)}
	onmouseleave={() => selectedSkillsStore.set([])}
	href={website}
	target="_blank"
	rel="noopener noreferrer"
	class="flex flex-wrap items-start w-fit hover:text-neutral-300 hover:bg-neutral-800 py-1 px-2 rounded group"
>
	{title} <span class="text-neutral-600 group-hover:text-neutral-500 px-2"> -&nbsp; {date}</span>
</a>
