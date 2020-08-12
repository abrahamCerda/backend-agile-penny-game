/* Load enviroment (.env) variables*/
require('dotenv').config();

/* Init Express App and create httpServer*/
const app = require('./app');
const port = process.env.PORT || 3000;
app.set('port', port);
const httpServer = require('http').createServer(app);

/* Configure and implement web socket*/
const webSocketImplementation = require('./controllers/websocket.controller')(httpServer);

/* Init server listening*/
httpServer.listen(port, ()=> {
    console.log(`App listening on http://localhost:${port}`);
});
