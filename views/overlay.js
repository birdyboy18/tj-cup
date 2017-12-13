var html = require('choo/html');

module.exports = view;

function view(state, emit) {
    return html`
    <div class="overlay flex justify-center items-center flex-column ${ (state.modalOpen) ? 'isActive' : ''}">
        <div class="close-icon pa2" onclick="${closeModal}"><img src="assets/close.svg" alt="Close Icon" /></div>
        <div class="modal-content flex flex-column">
            <h2 class="f2 normal self-center">Add Time</h2>
            <div class="flex justify-start items-end input-wrap mv3">
                <label class="tr pa3">Full Name:</label>
                <input class="f2 ph2" type="text" placeholder="Amanda Kissandhug" />
            </div>
            <div class="flex justify-start items-end input-wrap mv3">
                <label class="tr pa3">Time:</label>
                <input class="f2 ph2" type="text" placeholder="m.ss.ms"/>
            </div>
            <div class="submit-btn bg-black white self-end mt3 mr3">Submit</div>
        </div>
    </div>
    `

    function closeModal(e) {
        emit('modal:close');
    }
}
