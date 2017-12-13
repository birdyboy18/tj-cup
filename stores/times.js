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
        },
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
        },
        {
            name: "Dave Rose",
            time: "1.03.443"
        },
        {
            name: "Mark Dalzel",
            time: "1.04.634"
        }
    ]

    emitter.on('DOMContentLoaded', () => {

    });
}
