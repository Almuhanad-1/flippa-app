<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ results } = data);
</script>

<section>
	<ul>
		{#each results as result}
			<li>
				<a href={`/${result.id}`}>
					<h3>{result.title}</h3>
					<p>{result.price.toLocaleString()}$</p>
				</a>
			</li>
		{/each}
	</ul>
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
</style>
