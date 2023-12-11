<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	export let data: PageData;

	$: ({ listing } = data);
</script>

<button on:click={() => goto('/')}>Go Back</button>

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
</style>
