import loadingStore from "./LoadingStore";
import MeetupStore from "../Meetups/MeetupStore";
import type MeetUp from "../Meetups/MeetUp.type";
import type MeetUpDto from "./MeetUpDto.type";


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
    const meetups: { results: MeetUp[] } = await response.json();
    MeetupStore.set(meetups.results.map(meetup => ({
      objectId: meetup.objectId,
      address: meetup.address,
      contactEmail: meetup.contactEmail,
      subtitle: meetup.subtitle,
      imageUrl: meetup.imageUrl,
      description: meetup.description,
      title: meetup.title,
      isFavorite: meetup.isFavorite
    })))
  } catch (e) {
    console.error(e);
  } finally {
    loadingStore.remove("get-meetups");
  }
};

export const getMeetup = async (id: string, isNew: boolean) => {
  try {
    loadingStore.addLoading("get-meetup-" + id);
    const response = await fetch('http://192.168.1.36:1337/parse/classes/meetups/' + encodeURI(id),
      {
        headers: { "X-Parse-Application-Id": "myappID" },
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const meetup: MeetUpDto = (await response.json());
    if (isNew) {
      MeetupStore.addMeetup({
        objectId: meetup.objectId,
        address: meetup.address,
        contactEmail: meetup.contactEmail,
        subtitle: meetup.subtitle,
        imageUrl: meetup.imageUrl,
        description: meetup.description,
        title: meetup.title,
        isFavorite: meetup.isFavorite
      })
    } else {
      MeetupStore.updateMeetup({
        objectId: meetup.objectId,
        address: meetup.address,
        contactEmail: meetup.contactEmail,
        subtitle: meetup.subtitle,
        imageUrl: meetup.imageUrl,
        description: meetup.description,
        title: meetup.title,
        isFavorite: meetup.isFavorite
      });
    }

  } catch (e) {
    console.error(e);
  } finally {
    loadingStore.remove("get-meetup-" + id);
  }
};

export const saveMeetup = async (meetup: {
  readonly address: string;
  readonly contactEmail: string;
  readonly subtitle: string;
  readonly imageUrl: string;
  readonly description: string;
  readonly title: string;
  readonly isFavorite: boolean;
}) => {
  try {
    loadingStore.addLoading("save-meetup");
    const response = await fetch('http://192.168.1.36:1337/parse/classes/meetups',
      {
        method: 'POST',
        headers: { "X-Parse-Application-Id": "myappID", "Content-Type": "application/json" },
        body: JSON.stringify(meetup)
      }
    );
    if (response.status !== 201) {
      throw new Error(response.statusText);
    }
    const res: {
      objectId: string;
      createdAt: string;
    } = await response.json();
    await getMeetup(res.objectId, true);
  } catch (e) {
    console.error(e);
  } finally {
    loadingStore.remove("save-meetup");
  }
};

export const updateMeetup = async (meetup: {
  readonly objectId: string
  readonly address: string;
  readonly contactEmail: string;
  readonly subtitle: string;
  readonly imageUrl: string;
  readonly description: string;
  readonly title: string;
  readonly isFavorite: boolean;
}) => {
  try {
    loadingStore.addLoading("update-meetup-" + meetup.objectId);
    const response = await fetch('http://192.168.1.36:1337/parse/classes/meetups/' + encodeURI(meetup.objectId),
      {
        method: 'PUT',
        headers: { "X-Parse-Application-Id": "myappID", "Content-Type": "application/json" },
        body: JSON.stringify(meetup)
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    await getMeetup(meetup.objectId, false);
  } catch (e) {
    console.error(e);
  } finally {
    loadingStore.remove("update-meetup-" + meetup.objectId);
  }
};

export const deleteMeetup = async (id: string) => {
  try {
    loadingStore.addLoading("del-meetup-" + id);
    const response = await fetch('http://192.168.1.36:1337/parse/classes/meetups/' + encodeURI(id),
      {
        method: 'DELETE',
        headers: { "X-Parse-Application-Id": "myappID" },
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    MeetupStore.deleteMeetup(id);
  } catch (e) {
    console.error(e);
  } finally {
    loadingStore.remove("del-meetup-" + id);
  }
};
