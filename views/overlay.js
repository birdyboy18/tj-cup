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
                <input class="f2 ph2" type="text" placeholder="Amanda Kissandhug" value="${state.newTime.name}" onkeyup="${updateNewTimeName}" />
            </div>
            <div class="flex justify-start items-end input-wrap mv3">
                <label class="tr pa3">Time:</label>
                <input class="f2 ph2" type="text" placeholder="m.ss.ms" value="${state.newTime.time}" onkeyup="${updateNewTimeTime}"/>
            </div>
            <div class="submit-btn bg-black white self-end mt3 mr3" onclick="${addTime}">Submit</div>
        </div>
    </div>
    `

    function closeModal(e) {
        emit('modal:close');
    }

    function updateNewTimeName(e) {
        emit('newTime:update', {
            key: 'name',
            value: this.value
        });
    }

    function updateNewTimeTime(e) {
        emit('newTime:update', {
            key: 'time',
            value: this.value
        });
    }

    function addTime() {
        emit('time:add');
    }
}
