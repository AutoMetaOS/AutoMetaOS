const fs = require( 'fs' );

const getDeps = pkg => {
    const obj = JSON.parse( pkg );
    return [ ...Object.keys( obj.dependencies ), ...Object.keys( obj.devDependencies ) ]
};

const serverPkg = fs.readFileSync( './server/package.json', 'utf-8' );
const clientPkg = fs.readFileSync( './client/package.json', 'utf-8' );

const allPkgs = [ serverPkg, clientPkg ].map( getDeps );

console.log( allPkgs );