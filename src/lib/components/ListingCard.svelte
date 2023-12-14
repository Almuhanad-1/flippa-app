<script lang="ts">
	import type { Listing } from '$lib/types';
	export let listing: Listing;
</script>

<li>
	<a href={`/${listing.id}`}>
		<h3>{listing.basic_info.name}</h3>
		<p>{listing.title}</p>
		<p>{listing.price.toLocaleString()}$</p>
	</a>
</li>

<style>
	li {
		margin-bottom: 1rem;
		background-color: #555;
		border-radius: 0.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		color: #eee;
		display: flex;
		flex-direction: column;
	}

	a {
		text-decoration: none;
		font-size: 1.2rem;
	}

	li:hover {
		transform: scale(1.01);
	}

	h3 {
		margin: 0 0 0.5rem;
		font-weight: 500;
	}
</style>
