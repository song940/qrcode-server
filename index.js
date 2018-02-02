const http = require('http');
const kelp = require('kelp');
const body = require('kelp-body');
const qr   = require('qr-image');

const app = kelp();

app.use(body);
app.use((req, res) => {
  const { text = '' } = req.query;
  res.setHeader('Content-Type', 'image/png');
  qr.image(text, { type: 'png' }).pipe(res);
});

http.createServer(app).listen(9000);