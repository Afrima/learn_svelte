<script lang="ts">
	import ContactCard from './ContractCard.svelte';
	let name = 'Mathieu';
	let age = 20;

	function incremetAge() {
		age++;
	}
</script>

<h1>Hello {name}, my age is {age}</h1>
<button on:click="{incremetAge}">Change age</button>
<input type="text" bind:value="{name}" />
<ContactCard name={name}/>

<style>
	h1{
		color: purple;
	}
</style>