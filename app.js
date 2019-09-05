const koa = require("koa");
const staticSystem = require("koa-static");
const path = require("path");
const app = new koa();

app.use(staticSystem(path.join(__dirname, "./static")));

app.listen(3030, ()=>{
    console.log("server is running at port: 3030");
});