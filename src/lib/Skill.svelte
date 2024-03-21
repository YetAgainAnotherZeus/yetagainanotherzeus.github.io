<script lang="ts">
	export let title: string;
	export let website: string;
</script>

<a href={website} target="_blank" rel="noopener noreferrer" {title} class="">
	<slot />
</a>
