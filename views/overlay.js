var html = require('choo/html');

module.exports = view;

function view(state, emit) {
    return html`
    <div class="overlay ${ (state.modalOpen) ? 'isActive' : ''}">
        <div class="close-icon pa2" onclick="${closeModal}"><img src="assets/close.svg" alt="Close Icon" /></div>
    </div>
    `

    function closeModal(e) {
        emit('modal:close');
    }
}
