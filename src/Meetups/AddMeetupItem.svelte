<script lang="ts">
  import TextInput from '../UI/TextInput.svelte';
  import type MeetUp from "./MeetUp.type";

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
            on:input={e => title = e.target.value}
            required
    />
    <TextInput
            id="sub-title"
            name="Sub-Title"
            type="text"
            value={subtitle}
            inputType="input"
            on:input={e => subtitle = e.target.value}
            required
    />
    <TextInput
            id="address"
            name="Address"
            type="text"
            value={address}
            inputType="input"
            on:input={e => address = e.target.value}
            required
    />
    <TextInput
            id="img-url"
            name="Image url"
            type="url"
            value={imageUrl}
            inputType="input"
            on:input={e => imageUrl = e.target.value}
            required
    />
    <TextInput
            id="e-mail"
            name="E-Mail"
            type="email"
            value={contactEmail}
            inputType="input"
            on:input={e => contactEmail = e.target.value}
            required
    />
    <TextInput
            id="description"
            name="Description"
            type="email"
            value={description}
            inputType="textarea"
            on:input={e => description = e.target.value}
            required
    />
    <button type="submit">Submit</button>
</form>
