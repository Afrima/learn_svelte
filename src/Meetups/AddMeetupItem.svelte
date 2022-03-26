<script lang="ts">
  import TextInput from '../UI/TextInput.svelte';
  import type MeetUp from "./MeetUp.type";
  import Button from '../UI/Button.svelte';

  let address: string = '';
  let contactEmail: string = '';
  let subtitle: string = '';
  let imageUrl: string = '';
  let description: string = '';
  let title: string = '';
  export let onSubmit: (meetup: MeetUp) => void;


  const addMeetup = () => {
    onSubmit({
      id: Math.random(),
      title,
      subtitle,
      imageUrl,
      description,
      contactEmail,
      address
    });
    address = '';
    contactEmail = '';
    subtitle = '';
    imageUrl = '';
    description = '';
    title = '';
  }
</script>
<style>
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<form on:submit|preventDefault={addMeetup}>
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
    <Button type="submit" caption="Submit"/>
</form>
