import { writable } from "svelte/store";
import type MeetUp from "./MeetUp.type";

const meetupStore = writable<MeetUp[]>([]);

export default {
    ...meetupStore,
    set: (meetups: MeetUp[]) => meetupStore.set(meetups),
    addMeetup: (meetup: MeetUp) => meetupStore.update(meetups => [meetup, ...meetups]),
    updateMeetup: (meetup: MeetUp) =>
        meetupStore.update(meetups => {
            const meetupIndex = meetups.findIndex(meet => meet.objectId === meetup.objectId);
            if (meetupIndex >= 0) {
                const meetupsCopy = [...meetups];
                meetupsCopy[meetupIndex] = { ...meetupsCopy[meetupIndex], ...meetup };
                return meetupsCopy;
            }
            return meetups;
        }),
    deleteMeetup: (id: string) => meetupStore.update(meetups => meetups.filter(meetup => meetup.objectId !== id))
};
