module.exports = store;

function store(state, emitter) {
    state.modalOpen = false;

    emitter.on(state.events.DOMCONTENTLOADED, (e) => {

        emitter.on('modal:open', () => {
            console.log('open modal!');
            state.modalOpen = true;
            emitter.emit(state.events.RENDER);
        });
    })
}
