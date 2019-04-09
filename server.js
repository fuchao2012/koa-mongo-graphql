const Koa = require('koa');
const KoaMount = require('koa-mount');
const KoaGraphql = require('koa-graphql');
const schema = require('./graphql/schema')
const initDB = require('./database');
const app = new Koa();

initDB();

app.listen(9123);

app.use(KoaMount('/graphql', KoaGraphql({
    schema: schema,
    graphiql: true
})))

app.on('error', err=>log.error('server error', err));