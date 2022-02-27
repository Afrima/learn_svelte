<script lang="ts">
	import ContactCard from './ContractCard.svelte';
	type card = {
		readonly name: string;
		readonly job: string;
		readonly description: string;
		readonly picUrl: string;
	}

	let name = 'Mathieu';
	let job = '';
	let description = '';
	let picurl = '';
	let cards: card[] = [];
	const addCard = () => {
		cards = [...cards,{
			name: name,
			job: job,
			description: description,
			picUrl: picurl
		}];
		name = '';
		job = '';
		description = '';
		picurl = '';
	}

	const remove = (index:number) => {
		cards = [...cards.slice(0, index), ...cards.slice(index+1, cards.length)]
	}
</script>


<p for="name">Name:</p>
<input id="name" type="text" bind:value="{name}" />
<p for="job">Job:</p>
<input id="job" type="text" bind:value="{job}" />
<p for="desc">Desc:</p>
<input id="desc" type="text" bind:value="{description}"/>
<p for="pic">Pic:</p>
<input id="pic" type="text" bind:value="{picurl}" />
<button on:click="{addCard}">Add Card</button>
{#each cards as card, i (card.name)}
<ContactCard name={card.name} job={card.job} description={card.description} picurl={card.picUrl}/>
<button on:click="{()=>remove(i)}">Remove Card</button>
{/each}


<style>
	h1{
		color: purple;
	}
</style>