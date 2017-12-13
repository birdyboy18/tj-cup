var html = require('choo/html');

module.exports = view;

function view(state, emit) {
    console.log(state);

    return html`
    <div class="overlay ${ (state.modalOpen) ? 'isActive' : ''}">
    </div>
    `
}
