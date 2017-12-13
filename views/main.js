var html = require('choo/html')
var listItem = require('./listItem');
var overlay = require('./overlay');
var TITLE = 'TJ Cup'

module.exports = view

function view (state, emit) {
    if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

    return html`
    <body class="sans-serif">
        <div class="container pv4">
            <div class="flex flex-column justify-center items-center pa2">
                <img class="logo" src="assets/tj-cup-logo.png" alt="TJ Cup Logo" />
                <h1 class="f2 normal">Lap Times Leaderboard</h1>
                <div class="time-list">
                    ${state.times.map(listItem)}
                </div>
            </div>
        </div>
        <div class="add-time-btn pa2 pr3 bg-white flex items-center justify-between" onclick="${openModal}"><img class="icon pa1 mr2" src="assets/clock.svg" alt="Clock Icon" /> Add Time</div>
        ${overlay(state, emit)}
    </body>
    `

    function openModal(e) {
        emit('modal:open')
    }
}
