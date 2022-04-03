<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { FilterType } from "./FilterType";

  export let selectedFilter: FilterType;
  const dispatch = createEventDispatcher<{ select: FilterType }>();
</script>

<div>
  <button
    type="button"
    class:active={selectedFilter === FilterType.ALL}
    on:click={() => {
      dispatch("select", FilterType.ALL);
    }}
  >
    All
  </button>
  <button
    type="button"
    class:active={selectedFilter === FilterType.FAVORITES}
    on:click={() => {
      dispatch("select", FilterType.FAVORITES);
    }}
  >
    Favorites
  </button>
</div>

<style>
  div {
    font-size: 0px;
  }

  button {
    background: #aaaaaa;
    font: inherit;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #aaaaaa;
    padding: 0.5rem 1rem;
  }

  button:focus {
    outline: none;
  }

  button:first-of-type {
    border-radius: 5px 0 0 5px;
  }

  button:last-of-type {
    border-radius: 0 5px 5px 0;
  }

  button:hover,
  button:active,
  .active {
    background: #cf0056;
    border-color: #cf0056;
    color: white;
  }
</style>
