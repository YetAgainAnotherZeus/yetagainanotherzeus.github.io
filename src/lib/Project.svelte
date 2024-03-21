<script lang="ts">
	export let title: string;
	export let website: string;
	export let date: string;
</script>

<a
	href={website}
	target="_blank"
	rel="noopener noreferrer"
	class="flex hover:text-neutral-300 items-center group"
>
	{title} <span class="text-neutral-600 group-hover:text-neutral-500 px-2"> -&nbsp; {date}</span>
</a>
