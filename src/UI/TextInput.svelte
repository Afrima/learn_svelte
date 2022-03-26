<script lang="ts">
    export let id: string;
    export let type: 'url' | 'email' | 'text' | 'number';
    export let required: boolean | undefined;
    export let name: string;
    export let value: string;
</script>

<div class="form-control">
    <label for={id}>{name}</label>
    <input type={type} id={id} value={value} on:input {required}/>
</div>
