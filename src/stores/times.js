module.exports = store

function store(state, emitter) {
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
                state.times.push(state.newTime); //push new time into times list
                state.newTime = { //reset it's state
                    name: '',
                    time: ''
                }
                state.modalOpen = false; //close the modal
                emitter.emit(state.events.RENDER);
            }
        })

        //lets fetch all of the results from the api
        fetchTimes().then(json => {
            state.times = json;
            emitter.emit(state.events.RENDER);
        })
    })

    function fetchTimes() {
        let url = 'https://localhost:7000/api/time';
        return fetch(url).then(res => {
            return res.json();
        })
    }
}
