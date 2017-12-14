module.exports = store

function store(state, emitter) {
    const url = 'api/time';
    state.times = []

    state.newTime = {
        name: '',
        time: ''
    }

    emitter.on(state.events.DOMCONTENTLOADED, () => {
        emitter.on('newTime:update', ({ key, value }) => {
            state.newTime[key] = value;
        })

        emitter.on('time:add', () => {
            if (state.newTime.name !== '' && state.newTime.time !== '') {
                // state.times.push(state.newTime); //push new time into times list
                // state.newTime = { //reset it's state
                //     name: '',
                //     time: ''
                // }
                addTime(state.newTime).then(json => {
                    console.log(json);
                    state.modalOpen = false; //close the modal
                    emitter.emit('time:fetch');
                    emitter.emit(state.events.RENDER);
                }).catch(err => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        })

        emitter.on('time:fetch', () => {
            fetchTimes().then(json => {
                state.times = json.slice(0,10);
                emitter.emit(state.events.RENDER);
            })
        })

        //lets fetch all of the results from the api
        fetchTimes().then(json => {
            state.times = json.slice(0,10);
            emitter.emit(state.events.RENDER);
        })
    })

    function fetchTimes() {
        return fetch(url).then(res => {
            return res.json();
        })
    }

    function addTime(time) {
        let body = {
            time: time.time,
            name: time.name
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return fetch(url, {
            method: 'post',
            headers: headers,
            body: JSON.stringify(body)
        }).then(res => {
            return res.json(body);
        })
    }
}
