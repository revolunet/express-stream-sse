'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = streamToSSE;
function streamToSSE(res, stream) {

    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-control': 'no-cache'
    });

    stream.on('data', function (data) {
        return res.write('data: ' + JSON.stringify(data) + '\n\n');
    }).on('error', function (data) {
        return res.end('error: ' + data);
    }).on('end', function (data) {
        return res.end();
    });
}