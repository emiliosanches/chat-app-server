type session = (options: import('express-session').SessionOptions | undefined) => import('express').RequestHandler;

type Store = import('express-session').Store;

type connectionConfig = {
    table?: string,
    db?: string,
    dir?: string,
    concurrentDB?: boolean
}

declare module 'connect-sqlite3' {
    class SQLiteConnection extends Store {
        constructor(config: connectionConfig);

        regenerate: (req: express.Request, fn: (err?: any) => any) => void;
        load: (sid: string, fn: (err: any, session?: Express.SessionData | null) => any) => void;
        createSession: (req: express.Request, sess: Express.SessionData) => void;

        get: (sid: string, callback: (err: any, session?: Express.SessionData | null) => void) => void;
        set: (sid: string, session: Express.SessionData, callback?: (err?: any) => void) => void;
        destroy: (sid: string, callback?: (err?: any) => void) => void;
        all: (callback: (err: any, obj?: { [sid: string]: Express.SessionData; } | null) => void) => void;
        length: (callback: (err: any, length?: number | null) => void) => void;
        clear: (callback?: (err?: any) => void) => void;
        touch: (sid: string, session: Express.SessionData, callback?: (err?: any) => void) => void;
    }

    function Connection(sess: session): typeof SQLiteConnection {

    }
    
    export = Connection;
}