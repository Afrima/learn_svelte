<script lang="ts">
  import Button from '../UI/Button.svelte';
  import {beforeUpdate, createEventDispatcher} from "svelte";

  export let id: number;
  export let address: string;
  export let contactEmail: string;
  export let subtitle: string;
  export let imageUrl: string;
  export let description: string;
  export let title: string;
  export let isFavorite: boolean;

  const dispatch = createEventDispatcher<{ toggleFavorite: number }>();

  beforeUpdate(() => {
    console.log(new Date().toLocaleTimeString() + ' render item', id);
  })
</script>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1.isFavorite {
    background: #01a129;
    color: white;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  div {
    text-align: right;
  }
</style>

<article id={id.toString()}>
    <header>
        <h1 class:isFavorite>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>{address}</h3>
    </header>
    <div class="image">
        <img src={imageUrl} alt="meet-place"/>
    </div>
    <div class="content">
        <p>{description}</p>
    </div>
    <footer>
        <Button href="mailto:{contactEmail}" caption={contactEmail}/>
        <Button type="button" caption="Show Details"/>
        <Button
                type="button"
                mode="outline"
                caption={isFavorite? 'un-favorite': 'favorite'}
                on:click={()=> dispatch('toggleFavorite', id)}
        />
    </footer>
</article>
