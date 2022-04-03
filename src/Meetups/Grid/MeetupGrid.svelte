<script lang="ts">
  import MeetupItem from "../items/MeetupItem.svelte";
  import type MeetUp from "../MeetUp.type";
  import Filter from "./Filter.svelte";
  import Button from "../../UI/Button.svelte";
  import { FilterType } from "./FilterType";
  import { createEventDispatcher } from "svelte";

  export let meetups: MeetUp[];

  let filter: FilterType = FilterType.ALL;
  const selectFilter = (e: CustomEvent<FilterType>) => (filter = e.detail);

  $: filteredMeetups =
    filter === FilterType.FAVORITES
      ? meetups.filter((meetup) => meetup.isFavorite)
      : meetups;

  const dispatch = createEventDispatcher<{ newMeetup: undefined }>();
</script>

<section class="filter">
  <Filter selectedFilter={filter} on:select={selectFilter} />
  <Button on:click={() => dispatch("newMeetup")}>New Meetup</Button>
</section>

<section class="meetups">
  {#each filteredMeetups as meetup (meetup.id)}
    <MeetupItem {...meetup} on:openDetail on:edit />
  {/each}
</section>

<style>
  .meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  .filter {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    .meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
