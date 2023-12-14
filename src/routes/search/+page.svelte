<script lang="ts">
	import GoBackBtn from '$lib/components/GoBackBtn.svelte';
	import ListingCard from '$lib/components/ListingCard.svelte';
	import ListingCardContainer from '$lib/components/ListingCardContainer.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ listings } = data);
	console.log(listings);
</script>

<GoBackBtn />

<section>
	<ListingCardContainer>
		{#each listings as listing}
			<ListingCard {listing} />
		{/each}
	</ListingCardContainer>
</section>
