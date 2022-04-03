<script lang="ts">
  import Header from "./UI/Header.svelte";
  import AddMeetupItem from "./Meetups/Items/AddMeetupItem.svelte";
  import MeetupGrid from "./Meetups/Grid/MeetupGrid.svelte";
  import meetupsStore from "./Meetups/MeetupStore";
  import Page from "./Page";
  import MeetupDetail from "./Meetups/Items/MeetupDetail.svelte";
  import LoadingIndicator from "./UI/LoadingIndicator.svelte";
  import { onMount } from "svelte";
  import { getMeetups } from "./Rest/Http";

  let showAddMeetup: boolean = false;
  let openPage = Page.GRID;
  let detailId: number | null = null;
  let editId: number | null = null;

  onMount(() => {
    getMeetups();
  });

  const openAddMeetup = (id: number | null) => {
    editId = id;
    showAddMeetup = true;
  };

  const closeAddMeetup = () => {
    showAddMeetup = false;
    editId = null;
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

<LoadingIndicator />
<Header />
<div class="panel">
  {#if openPage === Page.GRID}
    {#if showAddMeetup}
      <AddMeetupItem on:cancel={closeAddMeetup} id={editId} />
    {/if}
    <MeetupGrid
      meetups={$meetupsStore}
      on:openDetail={openMeetupDetail}
      on:newMeetup={() => openAddMeetup(null)}
      on:edit={(e) => openAddMeetup(e.detail)}
    />
  {:else if openPage === Page.DETAIL}
    <MeetupDetail id={detailId} on:close={closeMeetupDetail} />
  {/if}
</div>

<style>
  .panel {
    margin-top: 5rem;
  }
</style>
