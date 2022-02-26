<script lang="ts">
	import ContactCard from './ContractCard.svelte';
	let name = 'Mathieu';
	let job = '';
	let description = '';
	let picurl = '';
	let age = 20;

	function incremetAge() {
		age++;
	}
</script>

<h1>Hello {name}, my age is {age}</h1>
<button on:click="{incremetAge}">Change age</button>
<p for="name">Name:</p>
<input id="name" type="text" bind:value="{name}" />
<p for="job">Job:</p>
<input id="job" type="text" bind:value="{job}" />
<p for="desc">Desc:</p>
<input id="desc" type="text" bind:value="{description}"/>
<p for="pic">Pic:</p>
<input id="pic" type="text" bind:value="{picurl}" />
<ContactCard name={name} job={job} description={description} picurl={picurl}/>

<style>
	h1{
		color: purple;
	}
</style>