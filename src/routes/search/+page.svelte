<script lang="ts">
	import { goto } from '$app/navigation';
	import ListingCard from '$lib/components/ListingCard.svelte';
	import ListingCardContainer from '$lib/components/ListingCardContainer.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ listings } = data);
	console.log(listings);
</script>

<button on:click={() => goto('/')}>Go Back</button>

<section>
	<ListingCardContainer>
		{#each listings as listing}
			<ListingCard {listing} />
		{/each}
	</ListingCardContainer>
</section>
