'use strict';


const PROTOCOL = 'http://';

const SERVER_IP = 'domain.com';

const PORT = 3000;

function getFullUrl(path=''){
    return `${PROTOCOL}${SERVER_IP}:${PORT}/${path}`
}

