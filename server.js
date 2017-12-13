const Express = require('express');
const Router = Express.Router;
const bodyParser = require('body-parser');
const serve = require('serve-static');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const app = Express();

//set up the db
let adapter = new FileSync('./db/db.json');
let db = new low(adapter);

//set some defaults
db.defaults({
    times: []
}).write();

//create a new router
let router = Router();

app.use('/', serve('./src/dist/'));
app.use(router);
app.use(bodyParser.json());

app.listen(7000, () => {
    console.log(`App started and listening on port 7000`);
});
