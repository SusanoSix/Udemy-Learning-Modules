const { send } = require('./request');             //import { send } from'./request'; is ECMAScript
const { read } = require('./response');            //const { read } = require('./response'); is commonJS
const { REQUEST_TIMEOUT } = require('./request'); 
    
    function makeRequest(url, data) {
        send(url, data);
        return read();
    }

    const responseData = makeRequest('https://google.com', 'hello');
    console.log(responseData);

    console.log(require.cache);

    

    