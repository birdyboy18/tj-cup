let html = require('choo/html')

module.exports = view

function view(time, idx) {
    let pos = idx + 1;

    return html`
        <div class="time-item flex justify-around bg-white mv2 bb bw1 pa3">
            <div class="postion">${pos}</div>
            <div class="name">${time.name}</div>
            <div class="time">${time.time}</div>
        </div>
    `
}
