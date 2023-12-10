<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	export let data: PageData;

	$: ({ post } = data);
</script>

<button on:click={() => goto('/')}>Go Back</button>

<section>
	{#if post}
		<h1>{post.title}</h1>
		<p>{post.price.toLocaleString()}$</p>
		<p>{post.summary}</p>

		<a href={post.listing_url} target="_blank">FIND IT IN FLIPPA</a>
	{/if}
</section>

<style>
	a {
		padding-bottom: 2px;
		border-bottom: 2px solid #eee;
	}
</style>
