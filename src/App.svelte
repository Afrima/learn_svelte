<script lang="ts">
  import Header from "./UI/Header.svelte";
  import MeetupItem from "./Meetups/MeetupItem.svelte";
  import type MeetUp from "./Meetups/MeetUp.type";

  let number: number = 0;

  let meetups: Set<MeetUp> = new Set([
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup, we will have some experts that teach you how to code!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "code@test.com"
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go for some swimming",
      description: "We will simply swim some rounds!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "swim@test.com"
    }
  ]);
  const updateNumber = () => {
    number += 1;
    meetups = new Set([{...Array.from(meetups)[0], subtitle: number + ''}, Array.from(meetups)[1]]);
  }
</script>
<style>
  .meet-ups {
    margin-top: 5rem;
  }
</style>
<Header/>
<section class="meet-ups">
    {number}
    <button on:click={updateNumber}>test</button>
    {#each Array.from(meetups) as meetup, id}
        <MeetupItem {...meetup}/>
    {/each}
</section>
