

export default function streamToSSE(res, stream) {

    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-control': 'no-cache'
    });

    stream
        .on('data', data => res.write(`data: ${JSON.stringify(data)}\n\n`))
        .on('error', data => res.end('error: ' + data))
        .on('end', data => res.end())

}


