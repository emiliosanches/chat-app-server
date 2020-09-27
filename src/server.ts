import path from 'path';
import http from 'http';
import express from 'express';
import socketio from 'socket.io';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import connect from 'connect-sqlite3';
import cors from 'cors';

import { Socket } from './useCases/ChatSocket';
import {session as sessionData} from './credentials.json';
import router from './routes';

const SQLiteStore = connect(session);
const app = express();
const port = process.env.PORT || 25565;

app.use(cookieParser(sessionData.secret));

app.use(cors({
    credentials: true,
    origin: true
}));

app.use(express.json());

app.use(session({
    secret: sessionData.secret,
    store: new SQLiteStore({
        dir: path.resolve(__dirname, '..', 'database'),
        db: 'database.sqlite',
        table: 'TBSessions',
        concurrentDB: false
    })
}));

app.use(router);

const server = http.createServer(app);

const io = new Socket(server)

server.listen(port, () => console.log(`Listening on *:${port}`));
