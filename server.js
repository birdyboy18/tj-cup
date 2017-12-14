const Express = require('express');
const Router = Express.Router;
const bodyParser = require('body-parser');
const serve = require('serve-static');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortId = require('shortid');
const moment = require('moment');
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

router.get('/time', (req, res, next) => {
    let raw = db.get('times').value();
    let results = raw.sort((a, b) => {
        let timeA = moment(a.time, 'm.ss.SSS');
        let timeB = moment(b.time, 'm.ss.SSS');
        if (timeA.isBefore(timeB)) {
            return -1;
        } else if (timeA.isSame(timeB)) {
            return 0;
        } else {
            return 1;
        }
    }).slice(0,10);
    res.json(results);
});

router.post('/time', (req, res, next) => {
    let { name, time } = req.body;
    if (typeof name === undefined && typeof time === undefined) {
        res.status(400).json({
            message: 'Need to provide both a name and time'
        });
    } else {
        if (time !== '' && name !== "") {
            let id = shortId.generate();
            db.get('times').push({
                id,
                time,
                name
            }).write();
            res.status(200).json({
                message: 'succesfully added time',
                entry: {
                    id,
                    name,
                    time
                }
            });
        } else {
            res.status(400).json({
                message: "You need to provide actual values for name and time"
            })
        }
    }
});

app.use(bodyParser.json());
app.use('/', serve('./src/dist/'));
app.use('/api', router);

app.listen(7000, () => {
    console.log(`App started and listening on port 7000`);
});
