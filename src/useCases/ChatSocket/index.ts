import { Server } from 'http';
import { Server as HttpsServer } from 'https';
import socketio from 'socket.io';

export interface IMessage {
    content: string;
    author: string;
}

export class Socket {
    private connectedSockets: Array<{ id: string, name: string }> = [];

    constructor(server: Server | HttpsServer) {
        const io = socketio(server);

        io.on('connection', socket => {
            socket.emit('connected');
            console.log('A user connected with id: ' + socket.id);
            socket.on('register', ({ username }) => {
                console.log('The user with id ' + socket.id + ' is using username: ' + username);
                this.connectedSockets.push({ id: socket.id, name: username });

                socket.on('message', (data: IMessage) => {
                    io.sockets.emit('message', data);
                });
            });

            socket.on('disconnect', socket => {
                console.log(this.connectedSockets)
                const index = this.connectedSockets.findIndex(value => value.id === socket.id);
                if (index < 0) return;
                console.log('User with id ' + socket.id + ' and username ' + this.connectedSockets[index].name + ' disconnected');
                this.connectedSockets.splice(index, 1);
            });
        });
    } 
}

