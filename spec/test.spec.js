'use strict';

var test = require('tape');

test("should work", (t) => {
	t.equal(1, 1, '1 should equal 1');
	t.end();
});

/*
 - it should create a valid SSE
 - it should emit SSE on stream events

 */
