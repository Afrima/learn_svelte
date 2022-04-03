<script lang="ts">
  import Header from "./UI/Header.svelte";
  import AddMeetupItem from "./Meetups/AddMeetupItem.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Button from "./UI/Button.svelte";
  import meetupsStore from "./Meetups/MeetupStore";
  import Page from "./Page";
  import MeetupDetail from "./Meetups/MeetupDetail.svelte";

  let showAddMeetup: boolean = false;
  let openPage = Page.GRID;
  let detailId: number | null = null;
  const openAddMeetup = () => {
    showAddMeetup = true;
  };
  const closeAddMeetup = () => {
    showAddMeetup = false;
  };

  const openMeetupDetail = (id: CustomEvent<number>) => {
    detailId = id.detail;
    openPage = Page.DETAIL;
  };

  const closeMeetupDetail = () => {
    openPage = Page.GRID;
    detailId = null;
  };
</script>

<Header />
<div class="panel">
  {#if openPage === Page.GRID}
    <div class="meetup-controls">
      <Button on:click={openAddMeetup}>New Meetup</Button>
    </div>
    {#if showAddMeetup}
      <AddMeetupItem on:cancel={closeAddMeetup} />
    {/if}
    <MeetupGrid meetups={$meetupsStore} on:openDetail={openMeetupDetail} />
  {:else if openPage === Page.DETAIL}
    <MeetupDetail id={detailId} on:close={closeMeetupDetail} />
  {/if}
</div>

<style>
  .panel {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>
