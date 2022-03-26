<script lang="ts">
  import MeetupItem from "./MeetupItem.svelte";
  import type MeetUp from "./MeetUp.type";

  export let meetups: MeetUp[];
</script>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<section id="meetups">
    {#each meetups as meetup (meetup.id)}
        <MeetupItem
                id={meetup.id}
                title={meetup.title}
                subtitle={meetup.subtitle}
                description={meetup.description}
                imageUrl={meetup.imageUrl}
                contactEmail={meetup.contactEmail}
                address={meetup.address}/>
    {/each}
</section>
