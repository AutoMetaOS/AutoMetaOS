"use strict";

export const serverURL = 'https://ronin.host:1872';

export class Riquest {
    #base;
    #type;
    #config;
    constructor ( base_url, type, config ) {
        this.#base = base_url;
        this.#type = type.toLowerCase() || 'JSON';
        this.#config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: config?.identity?.toLowerCase() === 'anonymous' ? 'no-referrer' : 'strict-origin-when-cross-origin'
        };
    }

    change_type = ( type ) => this.#type = type?.toLowerCase() || 'JSON';
    // JSON & TXT PROCESSOR
    async response_processor ( response ) {
        if ( this.#type === 'json' ) return await response.json();
        return await response.text();
    }
    // CONFIG BODY PROCESSOR
    data_processor ( data ) {
        let temp;
        if ( typeof data === 'object' ) temp = JSON.stringify( data );
        if ( typeof data === 'string' ) temp = data;
        this.#config.body = temp;
    }
    handleError = ( e ) => console.warn( e );
    // MAIN
    async requester ( endpoint ) {
        let response = await ( fetch( this.#base + endpoint, this.#config ).catch( this.handleError ) );
        console.log( response );
        if ( response && !response.ok ) return `An ${ response.status } has occured on: ${ this.#config.method }`;
        if ( !response ) return 'Request Failed';
        const processed = await this.response_processor( response );
        if ( this.#config.body ) delete this.#config.body;
        return processed
    }

    // ENDPOINT OPTION TYPES
    async get ( endpoint ) {
        this.#config.method = 'GET';
        if ( this.#config.body ) delete this.#config.body;
        return await this.requester( endpoint );
    }
    async post ( endpoint, data ) {
        this.#config.method = 'POST';
        if ( data ) this.data_processor( data );
        return await this.requester( endpoint );
    }
    async delete ( endpoint, data ) {
        this.#config.method = 'DELETE';
        if ( data ) this.data_processor( data );
        return await this.requester( endpoint );
    }
    async put ( endpoint, data ) {
        this.#config.method = 'PUT';
        if ( data ) this.data_processor( data );
        return await this.requester( endpoint );
    }
    async patch ( endpoint, data ) {
        this.#config.method = 'PATCH';
        if ( data ) this.data_processor( data );
        return await this.requester( endpoint );
    }

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