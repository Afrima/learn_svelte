<script lang="ts">
  import TextInput from "../../UI/TextInput.svelte";
  import meetupStore from "../MeetupStore";
  import Button from "../../UI/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import Modal from "../../UI/Modal.svelte";
  import { deleteMeetup, saveMeetup, updateMeetup } from "../../Rest/Http";

  export let objectId: string | null;

  let address: string = "";
  let contactEmail: string = "";
  let subtitle: string = "";
  let imageUrl: string = "";
  let description: string = "";
  let title: string = "";
  let isFavorite: boolean = false;
  const dispatch = createEventDispatcher<{ cancel: undefined }>();

  if (objectId !== null) {
    const meetups = $meetupStore;
    const meetupFound = meetups.find((i) => i.objectId === objectId);
    if (meetupFound !== undefined) {
      address = meetupFound.address;
      contactEmail = meetupFound.contactEmail;
      subtitle = meetupFound.subtitle;
      imageUrl = meetupFound.imageUrl;
      description = meetupFound.description;
      title = meetupFound.title;
      isFavorite = meetupFound.isFavorite;
    }
  }

  const delMeetup = (id: string) => {
    deleteMeetup(id);
    cancel();
  };

  const addMeetup = () => {
    if (objectId === null) {
      saveMeetup({
        title,
        subtitle,
        imageUrl,
        description,
        contactEmail,
        address,
        isFavorite: false,
      });
    } else {
      updateMeetup({
        objectId,
        title,
        subtitle,
        imageUrl,
        description,
        contactEmail,
        address,
        isFavorite,
      });
    }
    cancel();
  };

  const cancel = () => {
    dispatch("cancel");
  };
</script>

<Modal title="Add Meetup" on:cancel>
  <form id="add-meetup" on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      name="Title"
      type="text"
      value={title}
      inputType="input"
      on:inputChange={(e) => {
        title = e.detail;
      }}
      required
    />
    <TextInput
      id="sub-title"
      name="Sub-Title"
      type="text"
      value={subtitle}
      inputType="input"
      on:inputChange={(e) => {
        subtitle = e.detail;
      }}
      required
    />
    <TextInput
      id="address"
      name="Address"
      type="text"
      value={address}
      inputType="input"
      on:inputChange={(e) => {
        address = e.detail;
      }}
      required
    />
    <TextInput
      id="img-url"
      name="Image url"
      type="url"
      value={imageUrl}
      inputType="input"
      on:inputChange={(e) => {
        imageUrl = e.detail;
      }}
      required
    />
    <TextInput
      id="e-mail"
      name="E-Mail"
      type="email"
      value={contactEmail}
      inputType="input"
      on:inputChange={(e) => {
        contactEmail = e.detail;
      }}
      required
    />
    <TextInput
      id="description"
      name="Description"
      value={description}
      inputType="textarea"
      rows={3}
      on:inputChange={(e) => {
        description = e.detail;
      }}
      required
    />
  </form>
  <div slot="footer">
    {#if objectId !== null}
      <Button type="button" on:click={() => delMeetup(objectId)}>Delete</Button>
    {/if}
    <Button mode="outline" type="button" on:click={cancel}>Cancel</Button>
    <Button form="add-meetup" type="submit">Submit</Button>
  </div>
</Modal>

<style>
  form {
    width: 100%;
  }
</style>
