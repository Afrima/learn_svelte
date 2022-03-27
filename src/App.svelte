<script lang="ts">
  import Header from "./UI/Header.svelte";
  import type MeetUp from "./Meetups/MeetUp.type";
  import AddMeetupItem from './Meetups/AddMeetupItem.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';

  let meetups: MeetUp[] = [
    {
      id: 1,
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup, we will have some experts that teach you how to code!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "code@test.com",
      isFavorite: false
    },
    {
      id: 2,
      title: "Swim Together",
      subtitle: "Let's go for some swimming",
      description: "We will simply swim some rounds!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "swim@test.com",
      isFavorite: false
    }
  ];

  const addMeetup = (meetup: MeetUp) => {
    meetups = [
      meetup,
      ...meetups
    ];
  }

  const toggleFavorite = (e: CustomEvent<number>) => {
    const toggleMeetupIndex = meetups.findIndex(meetup => meetup.id === e.detail);
    if (toggleMeetupIndex >= 0) {
      const meetupToChange = {...meetups[toggleMeetupIndex], isFavorite: !meetups[toggleMeetupIndex].isFavorite};
      const meetupsCopy = [...meetups.map(meetup => ({...meetup}))];
      meetupsCopy[toggleMeetupIndex] = meetupToChange;
      meetups = meetupsCopy;
    }
  }

</script>
<style>
  .panel {
    margin-top: 5rem;
  }
</style>
<Header/>
<div class="panel">
    <AddMeetupItem onSubmit={addMeetup}/>
    <MeetupGrid meetups={meetups} on:toggleFavorite={toggleFavorite}/>
</div>
