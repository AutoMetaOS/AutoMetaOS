import { writable, get } from 'svelte/store';
import { getneb } from "./nebulaAPI";

export const subscriptions = writable( [] );

export const nebula = async () => {
    let videos = await getneb();
    subscriptions.set( videos )
    return 0;
}