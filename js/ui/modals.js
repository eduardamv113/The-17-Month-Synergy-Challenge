function setupModals(curatorsNotesPorMes) {
    const btnCreditos = document.getElementById('btn-creditos');
    const modalCreditos = document.getElementById('creditos-finais');
    const fecharCreditosBtn = document.getElementById('fechar-creditos');
    const playAgainCreditosBtn = document.getElementById('play-again-credits');
    const creditsContent = modalCreditos ? modalCreditos.querySelector('.credits-content') : null;

    function abrirCreditos() {
        if (!modalCreditos || !creditsContent) {
            return;
        }

        modalCreditos.classList.add('ativo');
        document.body.style.overflow = 'hidden';

        creditsContent.style.animation = 'none';
        void creditsContent.offsetHeight;
        creditsContent.style.animation = '';
    }

    function fecharCreditos() {
        if (!modalCreditos || !creditsContent) {
            return;
        }

        modalCreditos.classList.remove('ativo');
        document.body.style.overflow = '';
    }

    if (btnCreditos) {
        btnCreditos.addEventListener('click', abrirCreditos);
    }

    if (fecharCreditosBtn) {
        fecharCreditosBtn.addEventListener('click', fecharCreditos);
    }

    if (playAgainCreditosBtn) {
        playAgainCreditosBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            abrirCreditos();
        });
    }

    if (modalCreditos) {
        modalCreditos.addEventListener('click', (event) => {
            if (event.target === modalCreditos) {
                fecharCreditos();
            }
        });
    }

    const infoModal = document.createElement('div');
    infoModal.id = 'info-modal';
    infoModal.innerHTML = `
        <div id="info-modal-content">
            <button id="close-info-modal" type="button" aria-label="Fechar">x</button>
            <h2 id="info-modal-title">Curator's Note</h2>
            <div id="info-modal-list"></div>
        </div>
    `;
    document.body.appendChild(infoModal);

    const closeInfoModalBtn = infoModal.querySelector('#close-info-modal');
    const infoModalTitle = infoModal.querySelector('#info-modal-title');
    const infoModalList = infoModal.querySelector('#info-modal-list');

    function abrirInfoModal(cardIndex) {
        const secao = curatorsNotesPorMes[String(cardIndex + 1)];
        infoModalTitle.textContent = "Curator's Note";

        if (secao) {
            infoModalList.innerHTML = `
                <section class="bts-section">
                    <ul>
                        ${secao.itens.map((texto) => `<li>${texto}</li>`).join('')}
                    </ul>
                </section>
            `;
        } else {
            infoModalList.innerHTML = `
                <section class="bts-section">
                    <ul>
                        <li>Este mês ainda não tem cenas extra definidas.</li>
                    </ul>
                </section>
            `;
        }

        infoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function fecharInfoModal() {
        infoModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    closeInfoModalBtn.addEventListener('click', fecharInfoModal);
    infoModal.addEventListener('click', (event) => {
        if (event.target === infoModal) {
            fecharInfoModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') {
            return;
        }

        if (infoModal.style.display === 'flex') {
            fecharInfoModal();
        }

        if (modalCreditos && modalCreditos.classList.contains('ativo')) {
            fecharCreditos();
        }
    });

    const posterModal = document.createElement('div');
    posterModal.id = 'poster-modal';
    posterModal.style.display = 'none';
    posterModal.style.position = 'fixed';
    posterModal.style.top = '0';
    posterModal.style.left = '0';
    posterModal.style.width = '100vw';
    posterModal.style.height = '100vh';
    posterModal.style.background = 'rgba(0,0,0,0.85)';
    posterModal.style.justifyContent = 'center';
    posterModal.style.alignItems = 'center';
    posterModal.style.zIndex = '9999';
    posterModal.style.cursor = 'zoom-out';
    posterModal.innerHTML = '<img id="modal-img" style="max-width:80vw; max-height:80vh; border-radius:16px; box-shadow:0 0 40px #000; border:4px solid #fff;">';
    document.body.appendChild(posterModal);

    posterModal.addEventListener('click', () => {
        posterModal.style.display = 'none';
    });

    function openPosterModal(src) {
        const modalImg = document.getElementById('modal-img');
        modalImg.setAttribute('src', src);
        posterModal.style.display = 'flex';
    }

    return {
        openInfoModal: abrirInfoModal,
        openPosterModal
    };
}
