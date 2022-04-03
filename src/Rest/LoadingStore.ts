import { writable } from "svelte/store";

const loading = writable<string[]>([]);

export default {
    ...loading,
    addLoading: (name: string) => loading.update(load => [...load, name]),
    remove: (name: string) => loading.update(load => load.filter(l => l !== name))
}