module.exports = store

function store(state, emitter) {
    state.times = [
        {
            name: "Dave Rose",
            time: "1.03.443"
        },
        {
            name: "Mark Dalzel",
            time: "1.04.634"
        },
        {
            name: "Jack Ford",
            time: "1.06.275"
        },
        {
            name: "Paul Bird",
            time: "1.08.623"
        }
    ]

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
    })
}
