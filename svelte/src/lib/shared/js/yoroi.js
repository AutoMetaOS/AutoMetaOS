export const date = ( date = new Date() ) => {
    return new Date( date ).toLocaleDateString( "en-GB", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    } );
};