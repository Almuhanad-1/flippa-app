<script lang="ts">
	import ListingCard from '$lib/components/ListingCard.svelte';
	import ListingCardContainer from '$lib/components/ListingCardContainer.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ listings, page } = data);

	async function showMoreHandler() {
		console.log(page, 'page');
		const newListings = await fetch(`/api/getResults?page=${page + 1}`).then((res) => {
			page = page + 1;
			return res.json();
		});
		listings = [...listings, ...newListings];
	}
</script>

<SearchInput />

<section>
	<ListingCardContainer>
		{#each listings as listing}
			<ListingCard {listing} />
		{/each}
	</ListingCardContainer>
	<div class="showmore-container">
		<button on:click={showMoreHandler}>Show more</button>
	</div>
</section>

<style>
	button {
		background-color: #eee;
		border: none;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.showmore-container {
		display: flex;
		justify-content: center;
	}
</style>
