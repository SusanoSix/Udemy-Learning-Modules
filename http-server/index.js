const http = require('http');

const PORT = 3000;

const server = http.createServer();

const homies = [
  {
    id: 0,
    name: 'Omega',
 },
  {
    id: 1,
    name: 'Susano',
 },
 {
  id: 2,
  name: 'Sirako',
}
]

server.on('request',(req, res) => {
  const items = req.url.split('/');
  // /homies/2 => ['', 'homies', '2']
  // /homies/
if (req.method === 'POST' && items[1] === 'homies') {
  req.on('data', (data) => {
    const homie = data.toString();
    console.log('Request:', homie);
    homies.push(JSON.parse(homie));
  });
  req.pipe(res);
} else if (req.method === 'GET' && items[1] === 'homies') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if(items.length === 3) {
      const homieIndex = Number(items[2]);
      res.end(JSON.stringify(homies[homieIndex]));
    } else {
      res.end(JSON.stringify(homies));
    }
    } else if (req.method === 'GET' && items [1] === 'messages') {
       res.setHeader('Content-Type', 'text/html');
       res.write('<html>');
       res.write('<body>'); 
       res.write('<ul>');
       res.write('<li>Hello, Susano!</li>');
       res.write('<li>What are your thoughts on astronomy?</li>');
       res.write('</body>');
       res.write('</html>');
       res.end();
     } else {
         res.statusCode = 404;
         res.end();
     }
    });


server.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}...`);  
}); //127.0.0.1 => localhost   