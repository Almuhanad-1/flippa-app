<script lang="ts">
	import type { PageData } from './$types';
	import GoBackBtn from '$lib/components/GoBackBtn.svelte';
	export let data: PageData;

	$: ({ listing } = data);
</script>

<GoBackBtn />

<section>
	{#if listing}
		<h1>{listing.title}</h1>
		<p>{listing.price.toLocaleString()}$</p>
		<p>{listing.summary}</p>
		<a href={listing.listing_url} target="_blank">FIND IT IN FLIPPA</a>
	{/if}
</section>

<style>
	a {
		padding-bottom: 2px;
		border-bottom: 2px solid #eee;
	}

	a:hover {
		color: #ddd;
		border-bottom: 2px solid #ddd;
	}
</style>
