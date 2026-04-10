function setupCardTilt(card) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const lerp = (start, end, amount) => start + (end - start) * amount;

    const tiltState = {
        currentX: 0,
        currentY: 0,
        targetX: 0,
        targetY: 0,
        rafId: 0
    };

    const animateTilt = () => {
        tiltState.currentX = lerp(tiltState.currentX, tiltState.targetX, 0.12);
        tiltState.currentY = lerp(tiltState.currentY, tiltState.targetY, 0.12);

        card.style.setProperty('--tilt-x', `${tiltState.currentX}deg`);
        card.style.setProperty('--tilt-y', `${tiltState.currentY}deg`);
        card.style.setProperty('--tilt-lift', '-2px');

        const stillAnimating = Math.abs(tiltState.currentX - tiltState.targetX) > 0.02 || Math.abs(tiltState.currentY - tiltState.targetY) > 0.02;

        if (stillAnimating) {
            tiltState.rafId = requestAnimationFrame(animateTilt);
        } else {
            tiltState.rafId = 0;
        }
    };

    const startAnimation = () => {
        if (tiltState.rafId) {
            return;
        }

        tiltState.rafId = requestAnimationFrame(animateTilt);
    };

    const resetTilt = () => {
        tiltState.targetX = 0;
        tiltState.targetY = 0;
        card.style.setProperty('--tilt-lift', '0px');
        startAnimation();
    };

    card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const pointerX = (event.clientX - rect.left) / rect.width;
        const pointerY = (event.clientY - rect.top) / rect.height;

        tiltState.targetY = (pointerX - 0.5) * 12;
        tiltState.targetX = -(pointerY - 0.5) * 8;
        card.style.setProperty('--tilt-lift', '-2px');
        startAnimation();
    });

    card.addEventListener('pointerenter', startAnimation);
    card.addEventListener('pointerleave', resetTilt);
}

function renderCards({ container, dados, openInfoModal, openPosterModal }) {
    dados.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.zIndex = index;

        const albumLink = item.albumLink ? item.albumLink : `https://music.apple.com/search?term=${encodeURIComponent(item.album)}`;
        card.innerHTML = `
            <div class="card-header-badge">ENTRY #${index + 1 < 10 ? '0' + (index + 1) : index + 1}</div>
            <button class="behind-btn" type="button">Review & Verdict</button>

            <div class="card-content">
                <div class="info-panel">
                    <div class="media-container">
                        <div class="media-column">
                            <span class="column-title">THE DISCOVERY</span>
                            <div class="poster-wrapper">
                                <img src="${item.poster}" alt="Poster do filme ${item.filme}" class="poster-img media-cover">
                            </div>
                            <a href="${item.filmeLink}" target="_blank" class="media-title-link">${item.filme}</a>
                        </div>

                        <div class="media-column">
                            <span class="column-title">THE REFERENCE</span>
                            <div class="poster-wrapper">
                                <img src="${item.capa}" alt="Capa do album ${item.album}" class="album-img media-cover">
                            </div>
                            <a href="${albumLink}" target="_blank" class="media-title-link">${item.album}</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const synergyBtn = card.querySelector('.behind-btn');

        if (synergyBtn) {
            synergyBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                openInfoModal(index);
            });
        }

        setupCardTilt(card);
        container.appendChild(card);
    });

    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('poster-img')) {
            const src = event.target.getAttribute('src');
            openPosterModal(src);
        }
    });
}
