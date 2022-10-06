
let APIROOT_URL = 'http://localhost:3000/';
let MONGODB_URL = 'mongodb+srv://thai:thai123@cluster0.l5pwkhm.mongodb.net/MyAnime';

let mongoConnection = {
    https: false,
    appname: 'myapp.',
    port: process.env.PORT || 3000,
    url: APIROOT_URL,
    authenticationkey: 'mmyapp',
    paths:{
        public: '/public',
        tmp: '/tmp',
        docs: '/docs',
        tag: '/tag'
    },
    mongodb: {
        uri: MONGODB_URL,
        username: ''
    }
}

export default mongoConnection;