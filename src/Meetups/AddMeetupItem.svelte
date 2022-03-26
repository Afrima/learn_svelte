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
      id: Math.random().toString(),
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
<form on:submit|preventDefault={addMeetup}>
    <TextInput
            id="title"
            name="Title"
            type="text"
            value={title}
            on:input={e => title = e.target.value}
            required
    />
    <TextInput
            id="sub-title"
            name="Sub-Title"
            type="text"
            value={subtitle}
            on:input={e => subtitle = e.target.value}
            required
    />
    <TextInput
            id="address"
            name="Address"
            type="text"
            value={address}
            on:input={e => address = e.target.value}
            required
    />
    <TextInput
            id="img-url"
            name="Image url"
            type="url"
            value={imageUrl}
            on:input={e => imageUrl = e.target.value}
            required
    />
    <TextInput
            id="e-mail"
            name="E-Mail"
            type="email"
            value={contactEmail}
            on:input={e => contactEmail = e.target.value}
            required
    />
    <div class="form-control">
        <label for="desc">Description</label>
        <textarea rows="3" id="desc" bind:value={description} required></textarea>
    </div>
    <button type="submit">Submit</button>
</form>
