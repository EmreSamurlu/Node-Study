const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


router.get('/', (ctx, next) => {
    ctx.body = '<h1>Index Page</h1>';
    next();
});
router.get('/about', (ctx, next) => {
    ctx.body = '<h1>About Page</h1>';
    next();
});
router.get('/contact', (ctx, next) => {
    ctx.body = '<h1>Contact Page</h1>';
    next();
});


app
.use(router.routes())
.use(router.allowedMethods());


const port = 3000;


app.listen(port, () => {
    console.log(`Server Started at port: ${port}`);
});