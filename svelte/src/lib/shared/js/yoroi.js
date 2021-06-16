const serverURL = 'http://localhost:1872/';

export const repoSecurity = async () => {
    const req = await fetch( serverURL + "security/git" );
    const json = await req.json();
    return json;
};

export const smc = async () => {
    const req = await fetch( serverURL + 'sys/smc' );
    const json = await req.json();
    return json;
};

export const net = async () => {
    const req = await fetch( serverURL + 'sys/net' );
    const text = await req.text();
    return text;
};

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