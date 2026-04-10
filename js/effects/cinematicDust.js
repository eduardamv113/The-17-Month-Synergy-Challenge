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
