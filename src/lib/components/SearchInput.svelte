<script lang="ts">
	import { goto } from '$app/navigation';

	let searchTerm = '';

	const handleSearch = () => {
		if (searchTerm.trim() !== '') {
			console.log(encodeURIComponent(searchTerm), 'searchTerm');
			goto(`/search?search=${encodeURIComponent(searchTerm)}`);
		}
	};
</script>

<form>
	<input bind:value={searchTerm} placeholder="Search..." />
	<button type="button" on:click={handleSearch}>Search</button>
</form>

<style>
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
		color: #fff; /* Text color */
		cursor: pointer;
		font-size: inherit;
	}
	button:hover {
		background-color: #454545;
	}
</style>
