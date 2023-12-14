<script>
	import { goto } from '$app/navigation';
</script>

<button on:click={() => goto('/')}>Go Back</button>

<style>
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
