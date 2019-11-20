import http from 'http';
import path from 'path';
import express from 'express';

const app = express();

// Setup express
const __dirname = path.join(path.resolve(path.dirname('')), 'server-from');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Define routes
app.get('/', (_, res) => res.render('index'));

// Start HTTP server
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);
server.listen(app.get('port'));
