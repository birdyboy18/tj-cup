module.exports = store;

function store(state, emitter) {
    state.modalOpen = false;

    emitter.on(state.events.DOMCONTENTLOADED, (e) => {

        emitter.on('modal:open', () => {
            state.modalOpen = true;
            emitter.emit(state.events.RENDER);
        });

        emitter.on('modal:close', () => {
            state.modalOpen = false;
            emitter.emit(state.events.RENDER);
        })
    })
}
