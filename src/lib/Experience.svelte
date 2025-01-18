<script lang="ts">
	import { selectedSkillsStore } from './SelectedSkills';


	interface Props {
		title: string;
		website: string;
		startDate: Date;
		endDate?: Date | null;
		location: string;
		skills?: string[];
	}

	let {
		title,
		website,
		startDate,
		endDate = null,
		location,
		skills = []
	}: Props = $props();

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
</script>

<a
	onmouseenter={() => selectedSkillsStore.set(skills)}
	onmouseleave={() => selectedSkillsStore.set([])}
	href={website}
	class="block w-fit items-center mb-1 hover:bg-neutral-800 py-1 px-2 rounded group"
	target="_blank"
	rel="noopener noreferrer"
>
	<div class="flex flex-wrap">
		<h3 class="group-hover:text-neutral-300">{title}</h3>
		<span class="text-neutral-500 group-hover:text-neutral-400 px-2"
			>-&nbsp; {months[startDate.getMonth()]}
			{startDate.getFullYear()} - {endDate
				? months[endDate.getMonth()] + ' ' + endDate.getFullYear()
				: 'Present'}</span
		>
	</div>
	<p class="text-sm text-neutral-500 group-hover:text-neutral-400">{location}</p>
</a>
