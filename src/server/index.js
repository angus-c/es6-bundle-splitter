import express from 'express';
import 'source-map-support/register';

const server = express();
server.use('/', (req, res) => res.send(req.url.slice(1)));
server.listen(3000, function () { console.log('listening on port 3000...'); });
