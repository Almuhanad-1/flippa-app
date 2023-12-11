<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ results, page } = data);

	async function showMoreHandler() {
		console.log(page, 'page');
		const newResults = await fetch(`/api/getResults?page=${page + 1}`).then((res) => {
			page = page + 1;
			return res.json();
		});
		results = [...results, ...newResults];
	}
</script>

<section>
	<ul>
		{#each results as result}
			<li>
				<a href={`/${result.id}`}>
					<h3>{result.basic_info.name}</h3>
					<p>{result.title}</p>
					<p>{result.price.toLocaleString()}$</p>
				</a>
			</li>
		{/each}
	</ul>
	<div class="showmore-container">
		<button on:click={showMoreHandler}>Show more</button>
	</div>
</section>

<style>
	ul {
		list-style: none;
		padding: 0;
	}

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
