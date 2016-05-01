if (!process.env.APP_SECRET) {
  throw new Error('You need to set the APP_SECRET environment variable');
}

const PORT = process.env.PORT || 3000;
const app = require(__dirname + '/server/_server.js');

app.listen(PORT, 'mongodb://localhost/slug_rabbit_dev_app', () => {
  console.log('server up on ' + PORT);
});
