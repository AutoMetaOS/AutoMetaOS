// RAW
// curl -X POST https://campnet.bits-goa.ac.in:8090/login.xml -H "Content-Type: application/x-www-form-urlencoded" -d "mode=191&username=USERNAME&password=PASSWORD&a=1647504884506&producttype=0"

import fs from "fs";
import chalk from 'chalk';
import fetch from "node-fetch";
import parser from 'xml2json';

const creds = JSON.parse( fs.readFileSync( "./ids.json", "utf-8" ) );
const state = {
    current_id: 0
};

const fetcher = ( { id, pass } ) => fetch( "https://campnet.bits-goa.ac.in:8090/login.xml", {
    body: `mode=191&username=${ id }&password=${ pass }&a=${ +new Date() }&producttype=0`,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST"
} ).then( d => d.text() )

const now = () => creds[ state.current_id ];

const responseChecker = ( raw ) => {
    let json = {};
    try {
        json = JSON.parse( parser.toJson( raw ) );
    } catch ( error ) {
        console.log( chalk.red( 'Bad Response' ), raw );
    }

    const requestresponse = json?.requestresponse;

    if ( requestresponse?.status == 'LIVE' ) {
        return 200;
    } else {
        if ( requestresponse?.message.includes( 'exceeded' ) ) console.log( 'Limit Exceeded' );
        else console.log( 'WRONG CREDS' )
        return 6969;
    }
    return 420;
}

const requester = async () => fetcher( now() ).then( r => {
    const response = responseChecker( r );
    if ( state.current_id >= creds.length ) return false;
    if ( response === 200 ) {
        console.log( 'Connected to', now().name );
        return true
    } else {
        state.current_id++;
        console.log( chalk.blue( 'TESTING ID: ' + now().name ) );
        requester();
    }
} );

requester();