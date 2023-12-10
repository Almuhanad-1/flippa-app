<main>
	<slot />
</main>

<style>
	:global(body) {
		background-color: #333;
		color: #fff;
		font-family: sans-serif;
		margin: 0;
		padding: 0;
	}

	:global(a) {
		color: #fff;
		text-decoration: none;
	}

	main {
		margin: 0 auto;
		max-width: 960px;
		padding: 1rem;
	}

	:global(button) {
		cursor: pointer;
	}

	@media (min-width: 768px) {
		main {
			padding: 2rem;
		}
	}

	@media (min-width: 1024px) {
		main {
			padding: 3rem;
		}
	}

	@media (min-width: 1280px) {
		main {
			padding: 4rem;
		}
	}

	@media (min-width: 1536px) {
		main {
			padding: 5rem;
		}
	}
</style>
