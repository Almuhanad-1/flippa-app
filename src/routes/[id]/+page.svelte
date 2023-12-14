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

	a:hover {
		color: #ddd;
		border-bottom: 2px solid #ddd;
	}

	button {
		background-color: #eee;
		border: none;
		border-radius: 0.5rem;
		padding: 0.3rem 0.5rem;
		font-size: 0.9rem;
		cursor: pointer;
	}
	button:hover {
		background-color: #ddd;
	}
</style>
