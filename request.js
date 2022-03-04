const REQUEST_TIMEOUT = 500;  //this cancels the operation after 500 milisecs

function encrypt(data) {        //a function that encrypts data
    return 'encrypted data';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {          //module.exports = is commonJS
    REQUEST_TIMEOUT,
    send, 
};

