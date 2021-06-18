"use strict";

class Riquest {
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
            referrerPolicy: ( config === null || config === void 0 ? void 0 : config.identity.toLowerCase() ) === 'anonymous' ? 'no-referrer' : 'strict-origin-when-cross-origin',
            body: ''
        };
    }

    // JSON & TXT PROCESSOR
    async response_processor ( response ) {
        if ( this.#type === 'json' ) return await response.json();
        return await response.text();
    }

    // CONFIG BODY PROCESSOR
    async data_processor ( data ) {
        let temp;
        if ( typeof data === 'object' ) temp = JSON.stringify( data );
        if ( typeof data === 'string' ) temp = data;
        this.#config.body = temp;
    }

    // MAIN
    async requester ( endpoint ) {
        let response = await ( fetch( this.#base + endpoint, this.#config ).catch( this.handleError ) );
        if ( !response.ok ) {
            const message = `An ${ response.status } has occured on: ${ this.#config.method }`;
            return message
        }
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
        this.#config.method = 'DELETE';
        if ( data ) this.data_processor( data );
        return await this.requester( endpoint );
    }

    async patch ( endpoint, data ) {
        this.#config.method = 'DELETE';
        if ( data ) this.data_processor( data );
        return await this.requester( endpoint );
    }

};


const request = new Riquest( 'https://jsonplaceholder.typicode.com', 'JSON' );
const response_POST = request.post( '/posts/1', { name: "paul rudd", movies: [ "I Love You Man", "Role Models" ] } ).then( console.log );
const response_GET = request.get( '/posts/2' ).then( console.log );
const response_DELETE = request.delete( '/posts/3' ).then( console.log );