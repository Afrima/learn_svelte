import { writable } from "svelte/store";
import type MeetUp from "./MeetUp.type";

const meetupStore = writable<MeetUp[]>([
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
]);

export default {
    ...meetupStore,
    addMeetup: (meetup: MeetUp) => meetupStore.update(meetups => [meetup, ...meetups]),
    updateMeetup: (meetup: MeetUp) =>
        meetupStore.update(meetups => {
            const meetupIndex = meetups.findIndex(meetup => meetup.id === meetup.id);
            if (meetupIndex >= 0) {
                const meetupsCopy = [...meetups.map(meetup => ({ ...meetup }))];
                meetupsCopy[meetupIndex] = meetup;
                return meetupsCopy;
            }
            return meetups;
        }),
    toggleFav: (idx: number) =>
        meetupStore.update(meetups => {
            const toggleMeetupIndex = meetups.findIndex(meetup => meetup.id === idx);
            if (toggleMeetupIndex >= 0) {
                const meetupToChange = { ...meetups[toggleMeetupIndex], isFavorite: !meetups[toggleMeetupIndex].isFavorite };
                const meetupsCopy = [...meetups.map(meetup => ({ ...meetup }))];
                meetupsCopy[toggleMeetupIndex] = meetupToChange;
                return meetupsCopy;
            }
            return meetups;
        }),
};
