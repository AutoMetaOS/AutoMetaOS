import { writable } from 'svelte/store';

export const subscriptions = writable( [] );

export const nebula = async () => {
    const response = await fetch( serverURL + 'nebula/videos' );
    const videos = await response.json();
    subscriptions.set( videos )
    return 0;
}