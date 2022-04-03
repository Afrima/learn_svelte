import loadingStore from "./LoadingStore";
import MeetupStore from "../Meetups/MeetupStore";
import type MeetupDto from "./MeetupDto";


export const getMeetups = async () => {
    try {
        loadingStore.addLoading("get-meetups");
        const response = await fetch('http://192.168.1.36:1337/parse/classes/meetups',
            {
                headers: { "X-Parse-Application-Id": "myappID" },
            }
        );
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const meetups: { results: MeetupDto[] } = await response.json();
        MeetupStore.set(meetups.results.map(meetup => ({
            id: meetup.objectId,
            address: meetup.address,
            contactEmail: meetup.contactEmail,
            subtitle: meetup.subtitle,
            imageUrl: meetup.imageUrl,
            description: meetup.description,
            title: meetup.title,
            isFavorite: meetup.isFavorite
        })))
        console.log({ meetups, response });
    } catch (e) {
        console.error(e);
    } finally {
        loadingStore.remove("get-meetups");
    }

};