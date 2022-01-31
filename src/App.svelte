<script lang="ts">
	let name = 'Mathieu';
	let age = 20;

	function incremetAge() {
		age++;
	}
</script>

<main>
	<h1>Hello {name}, my age is {age}</h1>
	<button on:click="{incremetAge}">Change age</button>
	<input type="text" bind:value="{name}" />
</main>

<style>
	h1{
		color: purple;
	}
</style>