<script lang="ts">
	import { goto } from '$app/navigation';

	let searchTerm = '';
	let suggestions: string | any[] = [];

	const handleSearch = () => {
		if (searchTerm.trim().length < 3) return;
		console.log(encodeURIComponent(searchTerm), 'searchTerm');
		goto(`/search?search=${encodeURIComponent(searchTerm)}`);
	};

	let timeoutId: string | number | NodeJS.Timeout | undefined;

	const autoCompeleteHandler = () => {
		if (searchTerm.trim().length < 3) return;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fetch('/api/autoCompelete?search=' + searchTerm)
				.then((res) => res.json())
				.then((data) => {
					console.log(data, 'data');
					suggestions = data;
				});
		}, 200);
	};
</script>

<div>
	<form autocomplete="off" on:submit|preventDefault={handleSearch}>
		<input bind:value={searchTerm} on:input={autoCompeleteHandler} placeholder="Search..." />
		<button type="submit">Search</button>
	</form>

	{#if suggestions.length > 0}
		<ul>
			{#each suggestions as suggestion}
				<li>
					<a href={`/search?search=${encodeURIComponent(suggestion.title)}`}>{suggestion.title}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	div {
		position: relative;
	}

	form {
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 16px;
		font-size: 1.2rem;
	}

	input {
		padding: 16px;
		border: none;
		border-radius: 4px;
		background-color: #efefef; /* Dark background color */
		color: #333; /* Text color */
		flex: 1;
		font-size: inherit;
	}

	button {
		padding: 8px 12px;
		border: none;
		border-radius: 4px;
		background-color: #555; /* Green button color */
		color: #efefef; /* Text color */
		cursor: pointer;
		font-size: inherit;
	}
	button:hover {
		background-color: #454545;
	}

	ul {
		display: none;
	}

	div:focus-within ul {
		display: block;
	}

	ul {
		list-style: none;
		position: absolute;
		top: 120%;
		left: 0;
		right: 0;
		background-color: #fff;
		border-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin: 0;
		padding: 0;
		z-index: 10;
	}

	li {
		padding: 16px 24px;
	}

	li:not(:last-child) {
		border-bottom: #ccc 1px solid;
	}

	li:hover {
		background-color: #efefef;
		/* font-weight: 600; */
	}

	a {
		text-decoration: none;
		color: #333;
	}
</style>
