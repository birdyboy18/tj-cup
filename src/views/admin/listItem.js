let html = require('choo/html')

module.exports = view

function view(emit, time, idx) {
    let pos = idx + 1;

    return html`
        <div id="${time.id}" class="time-item flex justify-around bg-white mv2 bb bw1 pa3">
            <div class="postion">${pos}</div>
            <div class="name">
                ${time.name}
            </div>
            <div class="time">
                ${time.time}
            </div>
            <div id="${time.id}" class="admin-remove pa1 ml1 bg-red" onclick="${removeTime}">
                <img src="/assets/close.svg" alt="Remove" />
            </div>
        </div>
    `

    function removeTime(e) {
        emit('time:remove', { id: this.id })
    }
}
