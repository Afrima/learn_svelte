<script lang="ts">
    import loadingStore from "../Rest/LoadingStore";
</script>

{#if $loadingStore.length > 0}
    <div class="loading" />
{/if}

<style>
    .loading {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 500;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
