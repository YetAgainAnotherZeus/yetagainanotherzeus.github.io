<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';

	let { children }: { children: Snippet } = $props();
</script>

{@render children?.()}

<style>
	:global(body) {
		font-family: system-ui, sans-serif;
	}
</style>
