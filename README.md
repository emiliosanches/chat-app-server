# chat-app-server

## About
Developed by [Emilio Sanches](https://www.github.com/emiliosanches).  
I developed this system with the only purpose of learning. Feel free to clone this repository and use it as you want.  

## Features
1. Sign up and sign in system using sessions.  
2. At this time, there is only one chat room. The `Global Chat`

## Future features  
1. Change password/Forgot password.
2. Friends request and private messages to your friends.  
3. Change nickname.  
And much more (as many as I have ideas) :)

## Setup for developing 
1. Clone the repo using `git clone https://github.com/emiliosanches/chat-app-server.git`
2. Run `yarn install` or `npm install` to install dependencies.
3. Add a file named `credentials.json` in the root directory of this repo using the below format:
```json
{
    "session": {
        "secret": "YOUR_EXPRESS_SESSION_SECRET_HERE"
    }
}
```
4. Clone the [web app repo](https://github.com/emiliosanches/chat-app-web/) using `git clone https://github.com/emiliosanches/chat-app-web.git`
5. Now, you can run `yarn dev` or `npm run dev` to start a development server using `ts-node-dev`. Or run `tsc` to generate a production version (using javascript) and run `yarn start` or `npm start` to start this production version.

### Please star this repo and contribute to development :)

### [Connect with me through LinkedIn](https://www.linkedin.com/in/emiliosanches)