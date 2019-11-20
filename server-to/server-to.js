import http from 'http';
import express from 'express';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'myheader');
    next();
});

// Define routes
app.get('/', (req, res) => {
    res.send('ok');
});

// Start HTTP server
app.set('port', process.env.PORT || 3001);
const server = http.createServer(app);
server.listen(app.get('port'));
