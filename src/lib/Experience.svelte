<script lang="ts">
	export let title: string;
	export let website: string;
	export let date: string;
	export let location: string;
</script>

<a href={website} class="block items-center mb-1 hover:text-neutral-300 group">
	<div class="flex">
		<h3>{title}</h3>
		<span class="text-neutral-600 group-hover:text-neutral-500 px-2">-&nbsp; {date}</span>
	</div>
	<p class="text-sm text-neutral-600 group-hover:text-neutral-500">{location}</p>
</a>
