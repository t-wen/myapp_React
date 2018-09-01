const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

// $ GET /package.json
app.use(serve('.'));

console.log(__dirname);

app.listen(3000);

console.log('listening on port 3000');