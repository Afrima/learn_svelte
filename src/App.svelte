<script lang="ts">
  import Header from "./UI/Header.svelte";
  import type MeetUp from "./Meetups/MeetUp.type";
  import AddMeetupItem from './Meetups/AddMeetupItem.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import Button from './UI/Button.svelte';
  import meetupsStore from './Meetups/MeetupStore';

  let showAddMeetup: boolean = false;

  const addMeetup = (meetup: CustomEvent<MeetUp>) => {
    meetupsStore.addMeetup(meetup.detail);
  }

  const toggleFavorite = (e: CustomEvent<number>) => {
    meetupsStore.toggleFav(e.detail);
  }

  const openAddMeetup = () => {
    showAddMeetup = true;
  }
  const closeAddMeetup = () => {
    showAddMeetup = false;
  }

</script>
<style>
  .panel {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>
<Header/>
<div class="panel">
    <div class="meetup-controls">
        <Button on:click={openAddMeetup}>New Meetup</Button>
    </div>
    {#if showAddMeetup}
        <AddMeetupItem on:addMeetup={addMeetup} on:cancel={closeAddMeetup}/>
    {/if}
    <MeetupGrid meetups={$meetupsStore} on:toggleFavorite={toggleFavorite}/>
</div>
