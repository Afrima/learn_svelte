<script lang="ts">
  import MeetupItem from "../items/MeetupItem.svelte";
  import type MeetUp from "../MeetUp.type";
  import Filter from "./Filter.svelte";
  import { FilterType } from "./FilterType";

  export let meetups: MeetUp[];

  let filter: FilterType = FilterType.ALL;
  const selectFilter = (e: CustomEvent<FilterType>) => (filter = e.detail);

  $:filteredMeetups = filter === FilterType.FAVORITES ? meetups.filter(meetup => meetup.isFavorite) : meetups;
  
</script>

<section class="filter">
  <Filter selectedFilter={filter} on:select={selectFilter} />
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
  }

  @media (min-width: 768px) {
    .meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
