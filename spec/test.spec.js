'use strict';

import test from 'tape';

import getIntervalStram from 'node-interval-stream';

import streamToSSE from '../src';

function getResponseMock() {

    let mock = {
        lines: [],
        headers: {},
        status: null,
        writeHead: (newStatus, newHeaders) => {
            mock.status = newStatus;
            Object.assign(mock.headers, newHeaders);
        },
        write: data => {
            mock.lines.push(data);
        },
        end: () => {}
    }

    return mock;
}


test("should produce correct response", (t) => {

    let response = getResponseMock();

    let stream = getIntervalStram({
        count: 5,
        delay: 100
    });

    streamToSSE(response, stream);

    stream.on('end', () => {
        t.equal(response.lines.length, 5, 'has 5 entries');
        t.equal(response.headers['Content-Type'], 'text/event-stream', 'has text/event-stream Content-type header');
        t.equal(response.headers['Cache-control'], 'no-cache', 'has no-cache Cache-control header');
        t.end();
    });

});

