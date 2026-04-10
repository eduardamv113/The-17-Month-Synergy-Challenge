const container = document.getElementById('card-stack');
const { openInfoModal, openPosterModal } = setupModals(curatorsNotesPorMes);

setupCinematicDust();
renderCards({
    container,
    dados,
    openInfoModal,
    openPosterModal
});
