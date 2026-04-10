import './js/main.js';
const dados = [
    {
        mes: "Mês 01, Novembro 2024",
        titulo: "1 Frame",
        filme: "A Room With A View",
        filmeLink: "https://letterboxd.com/film/a-room-with-a-view/",
        poster: "images/roomwithaview.png",
        album: "Ella & Louis — Ella Fitzgerald & Louis Armstrong",
        albumLink: "https://music.apple.com/pt/album/ella-and-louis/1469584174",
        capa: "images/ella.jpg"
    },
    {
        mes: "Mês 02, Dezembro 2024",
        titulo: "2 Frame",
        filme: "2001: A Space Odyssey", 
        filmeLink: "https://letterboxd.com/film/2001-a-space-odyssey/",
        poster: "images/space.png",
        album: "The Blue Room EP — Coldplay",
        albumLink: "https://music.apple.com/pt/album/the-blue-room-ep/697044079",
        capa: "images/blue.jpg"
    },
    {
        mes: "Mês 03, Janeiro 2025",
        titulo: "3 Frame",
        filme: "The Apartment",
        filmeLink: "https://letterboxd.com/film/the-apartment/",
        poster: "images/apartment.png",
        album: "What's Going On — Marvin Gaye",
        albumLink: "https://music.apple.com/pt/album/whats-going-on/1538081586",
        capa: "images/marvi.jpg"
    },
    {
        mes: "Mês 04, Fevereiro 2025",
        titulo: "4 Frame",
        filme: "The Shop Around the Corner",
        filmeLink: "https://letterboxd.com/film/the-shop-around-the-corner/",
        poster: "images/shop.png",
        album: "Thee Sacred Souls — Thee Sacred Souls",
        albumLink: "https://music.apple.com/pt/album/thee-sacred-souls/1620092975",
        capa: "images/thee.png"
    },
    {
        mes: "Mês 05, Março 2025",
        titulo: "5 Frame",
        filme: "It Happened One Night",
        filmeLink: "https://letterboxd.com/film/it-happened-one-night/",
        poster: "images/it.png",
        album: "Chasing Yesterday — Noel Gallagher",
        albumLink: "https://music.apple.com/pt/album/chasing-yesterday-deluxe/1517620249",
        capa: "images/yesterday.jpg"
    },
    {
        mes: "Mês 06, Abril 2025",
        titulo: "O Sexto Frame",
        filme: "Casablanca",
        filmeLink: "https://letterboxd.com/film/casablanca/",
        poster: "images/casablanca.png",
        album: "Everything You've Come To Expect — The Last Shadow Puppets",
        albumLink: "https://music.apple.com/us/album/everything-youve-come-to-expect-deluxe-edition/1165278698",
        capa: "images/last.png"
    },
    {
        mes: "Mês 07, Maio 2025",
        titulo: "O Sétimo Frame",
        filme: "Dirty Dancing",
        filmeLink: "https://letterboxd.com/film/dirty-dancing/",
        poster: "images/dirty.png",
        album: "Rmcm - Ritchy Mitch & The Coal Miners",
        albumLink: "https://music.apple.com/us/album/rmcm/1663060232",
        capa: "images/rmcm.jpg"
    },
    {
        mes: "Mês 08, Junho 2025",
        titulo: "O Oitavo Frame",
        filme: "Bound",
        filmeLink: "https://letterboxd.com/film/bound/",
        poster: "images/bound.png",
        album: "Born Under a Bad Sign — Albert King",
        albumLink: "https://music.apple.com/us/album/born-under-a-bad-sign/1681210958?i=1681211118",
        capa: "images/born.jpg"
    },
    {
        mes: "Mês 09, Julho 2025",
        titulo: "O Nono Frame",
        filme: "The Purple Rose of Cairo",
        filmeLink: "https://letterboxd.com/film/the-purple-rose-of-cairo/",
        poster: "images/rose.png",
        album: "Hurry Up, We're Dreaming — M83",
        albumLink: "https://music.apple.com/us/album/hurry-up-were-dreaming/828259375",
        capa: "images/hurry.jpg"
    },
    {
        mes: "Mês 10, Agosto 2025",
        titulo: "O Décimo Frame",
        filme: "Bringing Up Baby",
        filmeLink: "https://letterboxd.com/film/bringing-up-baby/",
        poster: "images/bringing.png",
        album: "Virtue — The Voidz",
        albumLink: "https://music.apple.com/us/album/virtue/1337790882",
        capa: "images/virtue.png"
    },
    {
        mes: "Mês 11, Setembro 2025",
        titulo: "O Décimo Primeiro Frame",
        filme: "Chungking Express",
        filmeLink: "https://letterboxd.com/film/chungking-express/",
        poster: "images/express.png",
        album: "Turn On the Bright Lights — Interpol",
        albumLink: "https://music.apple.com/us/album/turn-on-the-bright-lights-the-tenth-anniversary/1589218896",
        capa: "images/interol.jpg"
    },
    {
        mes: "Mês 12, Outubro 2025",
        titulo: "O Décimo Segundo Frame",
        filme: "Notting Hill",
        filmeLink: "https://letterboxd.com/film/notting-hill/",
        poster: "images/hill.png",
        album: "Tapestry — Carole King",
        albumLink: "https://music.apple.com/us/album/tapestry/747087657",
        capa: "images/carole.jpg"
    },
    {
        mes: "Mês 13, Novembro 2025",
        titulo: "O Décimo Terceiro Frame",
        filme: "Desert Hearts ",
        filmeLink: "https://letterboxd.com/film/desert-hearts/",
        poster: "images/desert.png",
        album: "Milo Greene — Milo Greene",
        albumLink: "https://music.apple.com/us/album/milo-greene/541312919",
        capa: "images/milo.jpg"
    },
    {
        mes: "Mês 14, Dezembro 2025",
        titulo: "O Décimo Quarto Frame",
        filme: "Roman Holiday",
        filmeLink: "https://letterboxd.com/film/roman-holiday/",
        poster: "images/roman.png",
        album: "When You Dream — Don Luxe",
        albumLink: "https://music.apple.com/us/album/when-you-dream/1526726161?i=1526726408",
        capa: "images/don.jpg"
    },
    {
        mes: "Mês 15, Janeiro 2026",
        titulo: "O Décimo Quinto Frame",
        filme: "Nausicaä of the Valley of the Wind",
        filmeLink: "https://letterboxd.com/film/nausicaa-of-the-valley-of-the-wind/",
        poster: "images/nausica.png",
        album: "First Breath After Coma — The Misadventures of Anthony Knivet",
        albumLink: "https://music.apple.com/us/album/the-misadventures-of-anthony-knivet/822025978",
        capa: "images/breath.jpg"
    },
    {
        mes: "Mês 16, Fevereiro 2026",
        titulo: "O Décimo Sexto Frame",
        filme: "Wings of Desire",
        filmeLink: "https://letterboxd.com/film/wings-of-desire/",
        poster: "images/wings.png",
        album: "Twin Fantasy — Car Seat Headrest",
        albumLink: "https://music.apple.com/us/album/twin-fantasy/1586483380",
        capa: "images/twin.jpg"
    },
    {
        mes: "Mês 17, Março 2026",
        titulo: "O Décimo Sétimo Frame",
        filme: "Stranger Than Paradise",
        filmeLink: "https://letterboxd.com/film/stranger-than-paradise/",
        poster: "images/stranger.png",
        album: "Then Play On — Fleetwood Mac",
        albumLink: "https://music.apple.com/us/album/then-play-on-expanded-edition-2013-remaster/1441329962",
        capa: "images/playon.jpg"
    },
    
];

const container = document.getElementById('card-stack');
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

    // Reinicia a animacao sempre que o modal abre
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

const curatorsNotesPorMes = {
    '1': { itens: ['em processo....'] },
    '2': { itens: ['em processo....'] },
    '3': { itens: ['em processo....'] },
    '4': { itens: ['em processo....'] },
    '5': { itens: ['em processo....'] },
    '6': { itens: ['em processo....'] },
    '7': { itens: ['em processo....'] },
    '8': { itens: ['em processo....'] },
    '9': { itens: ['em processo....'] },
    '10': { itens: ['em processo....'] },
    '11': { itens: ['em processo....'] },
    '12': { itens: ['em processo....'] },
    '13': { itens: ['em processo....'] },
    '14': { itens: ['em processo....'] },
    '15': { itens: ['em processo....'] },
    '16': { itens: ['em processo....'] }
};

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

function abrirInfoModal(item, cardIndex) {
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

// Cria o modal para exibir o poster em tamanho grande
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

function setupCinematicDust() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    if (typeof THREE === 'undefined') {
        setupCinematicDustFallback();
        return;
    }

    const dustLayer = document.createElement('div');
    dustLayer.id = 'cinematic-dust-layer';
    dustLayer.setAttribute('aria-hidden', 'true');
    document.body.prepend(dustLayer);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.03);

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = 'dust-canvas';
    renderer.domElement.style.opacity = '0.98';
    dustLayer.appendChild(renderer.domElement);

    const particleCount = 1300;
    const positions = new Float32Array(particleCount * 3);
    const seeds = new Float32Array(particleCount);
    const depths = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i += 1) {
        const index = i * 3;
        const depth = Math.random();

        positions[index] = (Math.random() - 0.5) * 30;
        positions[index + 1] = (Math.random() - 0.5) * 18;
        positions[index + 2] = -Math.random() * 32;
        seeds[i] = Math.random() * Math.PI * 2;
        depths[i] = depth;
    }

    const basePositions = positions.slice();

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 64;
    glowCanvas.height = 64;
    const glowContext = glowCanvas.getContext('2d');
    const glowGradient = glowContext.createRadialGradient(32, 32, 0, 32, 32, 32);
    glowGradient.addColorStop(0, 'rgba(255, 244, 210, 1)');
    glowGradient.addColorStop(0.33, 'rgba(255, 225, 120, 0.82)');
    glowGradient.addColorStop(0.55, 'rgba(241, 196, 15, 0.55)');
    glowGradient.addColorStop(1, 'rgba(241, 196, 15, 0)');
    glowContext.fillStyle = glowGradient;
    glowContext.fillRect(0, 0, 64, 64);

    const particleMaterial = new THREE.PointsMaterial({
        color: 0xf1c40f,
        size: 0.2,
        map: new THREE.CanvasTexture(glowCanvas),
        transparent: true,
        opacity: 0.58,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });

    const beamCanvas = document.createElement('canvas');
    beamCanvas.width = 256;
    beamCanvas.height = 256;
    const beamContext = beamCanvas.getContext('2d');
    const beamGradient = beamContext.createRadialGradient(128, 128, 10, 128, 128, 128);
    beamGradient.addColorStop(0, 'rgba(255, 248, 220, 0.26)');
    beamGradient.addColorStop(0.28, 'rgba(241, 196, 15, 0.18)');
    beamGradient.addColorStop(0.6, 'rgba(241, 196, 15, 0.08)');
    beamGradient.addColorStop(1, 'rgba(241, 196, 15, 0)');
    beamContext.fillStyle = beamGradient;
    beamContext.fillRect(0, 0, 256, 256);

    const dustField = new THREE.Points(geometry, particleMaterial);
    scene.add(dustField);

    const beamMaterial = new THREE.SpriteMaterial({
        map: new THREE.CanvasTexture(beamCanvas),
        color: 0xffffff,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    const projectorBeam = new THREE.Sprite(beamMaterial);
    projectorBeam.scale.set(34, 22, 1);
    projectorBeam.position.set(0, 0, -12);
    scene.add(projectorBeam);

    const mouse = {
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
    };

    const resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const updatePointer = (event) => {
        mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = -((event.clientY / window.innerHeight) * 2 - 1);
    };

    const resetPointer = () => {
        mouse.targetX = 0;
        mouse.targetY = 0;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', updatePointer, { passive: true });
    window.addEventListener('pointerleave', resetPointer);

    const clock = new THREE.Clock();

    const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        mouse.x = THREE.MathUtils.lerp(mouse.x, mouse.targetX, 0.06);
        mouse.y = THREE.MathUtils.lerp(mouse.y, mouse.targetY, 0.06);

        camera.position.x = mouse.x * 1.2;
        camera.position.y = mouse.y * 0.8;
        camera.lookAt(0, 0, 0);

        dustField.rotation.y = mouse.x * 0.18 + elapsedTime * 0.025;
        dustField.rotation.x = mouse.y * 0.08;
        projectorBeam.position.x = mouse.x * 0.8;
        projectorBeam.position.y = mouse.y * 0.5;
        projectorBeam.material.opacity = 0.34 + Math.abs(mouse.x) * 0.08;

        const positionAttribute = geometry.getAttribute('position');

        for (let i = 0; i < particleCount; i += 1) {
            const index = i * 3;
            const depth = depths[i];
            const wave = elapsedTime * (0.22 + depth * 0.32) + seeds[i];
            const sway = 0.24 + depth * 0.75;
            const mouseLift = 1 - depth;

            positionAttribute.array[index] = basePositions[index]
                + Math.sin(wave) * (0.12 + depth * 0.28)
                + mouse.x * sway * mouseLift * 1.35;
            positionAttribute.array[index + 1] = basePositions[index + 1]
                + Math.cos(wave * 1.2) * (0.12 + depth * 0.24)
                + mouse.y * sway * mouseLift * 1.02;
            positionAttribute.array[index + 2] = basePositions[index + 2]
                + Math.sin(wave * 0.7) * (0.06 + depth * 0.15)
                - Math.abs(mouse.x) * mouseLift * 1.6;
        }

        positionAttribute.needsUpdate = true;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };

    resize();
    animate();
}

function setupCinematicDustFallback() {
    const dustLayer = document.createElement('div');
    dustLayer.id = 'cinematic-dust-layer';
    dustLayer.setAttribute('aria-hidden', 'true');
    document.body.prepend(dustLayer);

    const canvas = document.createElement('canvas');
    canvas.className = 'dust-canvas';
    dustLayer.appendChild(canvas);

    const context = canvas.getContext('2d');
    const particleCount = 220;
    const particles = [];

    const resize = () => {
        canvas.width = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
        canvas.height = window.innerHeight * Math.min(window.devicePixelRatio || 1, 2);
        canvas.style.width = '100%';
        canvas.style.height = '100%';
    };

    for (let i = 0; i < particleCount; i += 1) {
        particles.push({
            x: Math.random(),
            y: Math.random(),
            z: Math.random(),
            speed: 0.00012 + Math.random() * 0.00022,
            size: 0.7 + Math.random() * 1.9,
            drift: (Math.random() - 0.5) * 0.00035,
            phase: Math.random() * Math.PI * 2
        });
    }

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const updatePointer = (event) => {
        mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', updatePointer, { passive: true });
    resize();

    const glow = (x, y, radius, alpha) => {
        const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(255, 248, 220, ${alpha})`);
        gradient.addColorStop(0.3, `rgba(241, 196, 15, ${alpha * 0.7})`);
        gradient.addColorStop(1, 'rgba(241, 196, 15, 0)');
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
    };

    const animate = (time) => {
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        context.clearRect(0, 0, canvas.width, canvas.height);

        const width = canvas.width;
        const height = canvas.height;
        const mouseInfluenceX = mouse.x * width * 0.08;
        const mouseInfluenceY = mouse.y * height * 0.06;

        glow(width * 0.5 + mouseInfluenceX * 0.4, height * 0.42 + mouseInfluenceY * 0.35, width * 0.34, 0.18);

        for (const particle of particles) {
            particle.y -= particle.speed * (0.8 + particle.z * 1.4);
            particle.x += particle.drift + mouseInfluenceX * 0.00002 * (1 - particle.z);

            if (particle.y < -0.05) {
                particle.y = 1.05;
                particle.x = Math.random();
                particle.z = Math.random();
            }

            if (particle.x < -0.05) particle.x = 1.05;
            if (particle.x > 1.05) particle.x = -0.05;

            const px = particle.x * width;
            const py = particle.y * height;
            const pulse = 0.55 + Math.sin(time * 0.0015 + particle.phase) * 0.25;
            const size = particle.size * (0.55 + particle.z * 1.5) * pulse;
            const alpha = 0.12 + particle.z * 0.35;

            context.fillStyle = `rgba(241, 196, 15, ${alpha})`;
            context.beginPath();
            context.arc(px, py, size, 0, Math.PI * 2);
            context.fill();
        }

        requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
}

setupCinematicDust();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupCardTilt(card) {
    if (prefersReducedMotion) {
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
            card.style.setProperty('--tilt-x', `${tiltState.targetX}deg`);
            card.style.setProperty('--tilt-y', `${tiltState.targetY}deg`);
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
            abrirInfoModal(item, index);
        });
    }

    setupCardTilt(card);
    container.appendChild(card);
});

// Evento para abrir o modal ao clicar no poster
container.addEventListener('click', function(e) {
    if (e.target.classList.contains('poster-img')) {
        const src = e.target.getAttribute('src');
        document.getElementById('modal-img').setAttribute('src', src);
        posterModal.style.display = 'flex';
    }
});