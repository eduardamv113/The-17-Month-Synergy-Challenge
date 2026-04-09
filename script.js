const dados = [
    {
        mes: "Mês 01, Novembro 2024",
        titulo: "1 Frame",
        filme: "A Room With A View",
        filmeLink: "https://letterboxd.com/film/a-room-with-a-view/",
        poster: "images/roomwithaview.png",
        album: "Ella & Louis — Ella Fitzgerald & Louis Armstrong",
        albumLink: "https://music.apple.com/pt/album/ella-and-louis/1469584174",
        capa: "images/ella.jpg",
        fotoVossa: [
            "images/nov24/2.png", 
            "images/nov24/a.png", 
            "images/nov24/b.jpg", 
            "images/nov24/c.jpg"
        ]
    },
    {
        mes: "Mês 02, Dezembro 2024",
        titulo: "2 Frame",
        filme: "2001: A Space Odyssey", 
        filmeLink: "https://letterboxd.com/film/2001-a-space-odyssey/",
        poster: "images/space.png",
        album: "The Blue Room EP — Coldplay",
        albumLink: "https://music.apple.com/pt/album/the-blue-room-ep/697044079",
        capa: "images/blue.jpg",
        fotoVossa: [
            "images/dez24/1.png", "images/dez24/a.jpg", "images/dez24/b.jpg", 
            "images/dez24/c.jpg", "images/dez24/d.jpg", "images/dez24/e.jpg", 
            "images/dez24/f.jpg", "images/dez24/g.jpg", "images/dez24/h.jpg", "images/dez24/i.jpg"
        ]
    },
    {
        mes: "Mês 03, Janeiro 2025",
        titulo: "3 Frame",
        filme: "The Apartment",
        filmeLink: "https://letterboxd.com/film/the-apartment/",
        poster: "images/apartment.png",
        album: "What's Going On — Marvin Gaye",
        albumLink: "https://music.apple.com/pt/album/whats-going-on/1538081586",
        capa: "images/marvi.jpg",
        fotoVossa: [
            "images/jan25/1.png", "images/jan25/a.jpg", "images/jan25/b.jpg", 
            "images/jan25/c.jpg", "images/jan25/d.jpg", "images/jan25/e.jpg", "images/jan25/f.jpg"
        ]
    },
    {
        mes: "Mês 04, Fevereiro 2025",
        titulo: "4 Frame",
        filme: "The Shop Around the Corner",
        filmeLink: "https://letterboxd.com/film/the-shop-around-the-corner/",
        poster: "images/shop.png",
        album: "Thee Sacred Souls — Thee Sacred Souls",
        albumLink: "https://music.apple.com/pt/album/thee-sacred-souls/1620092975",
        capa: "images/thee.png",
        fotoVossa: [
            "images/fev25/1.png", "images/fev25/a.jpg", "images/fev25/b.jpg", 
            "images/fev25/c.jpg", "images/fev25/d.jpg", "images/fev25/e.jpg", 
            "images/fev25/f.jpg", "images/fev25/g.jpg", "images/fev25/h.png"
        ]
    },
    {
        mes: "Mês 05, Março 2025",
        titulo: "5 Frame",
        filme: "It Happened One Night",
        filmeLink: "https://letterboxd.com/film/it-happened-one-night/",
        poster: "images/it.png",
        album: "Chasing Yesterday — Noel Gallagher",
        albumLink: "https://music.apple.com/pt/album/chasing-yesterday-deluxe/1517620249",
        capa: "images/yesterday.jpg",
        fotoVossa: [
            "images/mar25/1.png", "images/mar25/a.jpg", "images/mar25/b.jpg", 
            "images/mar25/c.jpg", "images/mar25/d.jpg", "images/mar25/e.jpg", 
            "images/mar25/f.jpg", "images/mar25/g.jpg", "images/mar25/h.jpg", 
            "images/mar25/k.jpg", "images/mar25/l.png", "images/mar25/u.jpg"
        ]
    },
    {
        mes: "Mês 06, Abril 2025",
        titulo: "O Sexto Frame",
        filme: "Casablanca",
        filmeLink: "https://letterboxd.com/film/casablanca/",
        poster: "images/casablanca.png",
        album: "Everything You've Come To Expect — The Last Shadow Puppets",
        albumLink: "https://music.apple.com/us/album/everything-youve-come-to-expect-deluxe-edition/1165278698",
        capa: "images/last.png",
        fotoVossa: [
            "images/abril25/1.png", "images/abril25/a.jpg", "images/abril25/b.jpg", 
            "images/abril25/c.jpg", "images/abril25/d.jpg", "images/abril25/e.png"
        ]
    },
    {
        mes: "Mês 07, Maio 2025",
        titulo: "O Sétimo Frame",
        filme: "Dirty Dancing",
        filmeLink: "https://letterboxd.com/film/dirty-dancing/",
        poster: "images/dirty.png",
        album: "Rmcm - Ritchy Mitch & The Coal Miners",
        albumLink: "https://music.apple.com/us/album/rmcm/1663060232",
        capa: "images/rmcm.jpg",
        fotoVossa: [
            "images/maio25/1.png", "images/maio25/a.jpg", "images/maio25/b.jpg",
            "images/maio25/c.jpg", "images/maio25/d.jpg", "images/maio25/e.jpg",
            "images/maio25/f.jpg", "images/maio25/g.jpg", "images/maio25/h.jpg",
            "images/maio25/j.jpg", "images/maio25/k.jpg", "images/maio25/l.jpeg",
            "images/maio25/u.jpg", "images/maio25/hj.jpg"
        ]
    },
    {
        mes: "Mês 08, Junho 2025",
        titulo: "O Oitavo Frame",
        filme: "Bound",
        filmeLink: "https://letterboxd.com/film/bound/",
        poster: "images/bound.png",
        album: "Born Under a Bad Sign — Albert King",
        albumLink: "https://music.apple.com/us/album/born-under-a-bad-sign/1681210958?i=1681211118",
        capa: "images/born.jpg",
        fotoVossa: [
            "images/junho25/1.png", "images/junho25/a.jpg", "images/junho25/b.jpg", 
            "images/junho25/c.jpg", "images/junho25/d.jpg", "images/junho25/e.jpeg", "images/junho25/f.jpeg"
        ]
    },
    {
        mes: "Mês 09, Julho 2025",
        titulo: "O Nono Frame",
        filme: "The Purple Rose of Cairo",
        filmeLink: "https://letterboxd.com/film/the-purple-rose-of-cairo/",
        poster: "images/rose.png",
        album: "Hurry Up, We're Dreaming — M83",
        albumLink: "https://music.apple.com/us/album/hurry-up-were-dreaming/828259375",
        capa: "images/hurry.jpg",
        fotoVossa: [
            "images/julho25/1.png", "images/julho25/a.jpg", "images/julho25/b.jpg", 
            "images/julho25/c.jpg", "images/julho25/d.jpg", "images/julho25/e.jpg", 
            "images/julho25/f.jpg", "images/julho25/g.jpg", "images/julho25/h.jpg", 
            "images/julho25/i.jpg", "images/julho25/j.jpeg"
        ]
    },
    {
        mes: "Mês 10, Agosto 2025",
        titulo: "O Décimo Frame",
        filme: "Bringing Up Baby",
        filmeLink: "https://letterboxd.com/film/bringing-up-baby/",
        poster: "images/bringing.png",
        album: "Virtue — The Voidz",
        albumLink: "https://music.apple.com/us/album/virtue/1337790882",
        capa: "images/virtue.png",
        fotoVossa: [
            "images/agosto25/1.png", "images/agosto25/a.png", "images/agosto25/b.jpg", 
            "images/agosto25/c.jpg", "images/agosto25/d.jpg", "images/agosto25/e.jpg", 
            "images/agosto25/f.jpg", "images/agosto25/g.jpg", "images/agosto25/h.jpg", 
            "images/agosto25/i.jpg",  "images/agosto25/k.jpg", 
            "images/agosto25/l.jpg", "images/agosto25/m.jpg", "images/agosto25/n.jpg", 
            "images/agosto25/o.jpg", "images/agosto25/p.jpeg", "images/agosto25/q.jpeg", 
            "images/agosto25/r.jpeg", "images/agosto25/s.jpeg", "images/agosto25/t.jpeg", 
            "images/agosto25/u.jpeg", "images/agosto25/v.jpeg", "images/agosto25/x.jpeg", "images/agosto25/z.jpeg"
        ]
    },
    {
        mes: "Mês 11, Setembro 2025",
        titulo: "O Décimo Primeiro Frame",
        filme: "Chungking Express",
        filmeLink: "https://letterboxd.com/film/chungking-express/",
        poster: "images/express.png",
        album: "Turn On the Bright Lights — Interpol",
        albumLink: "https://music.apple.com/us/album/turn-on-the-bright-lights-the-tenth-anniversary/1589218896",
        capa: "images/interol.jpg",
        fotoVossa: [
            "images/setembro/1.png", "images/setembro/a.jpg", "images/setembro/b.jpg",
            "images/setembro/c.jpg", "images/setembro/d.jpg", "images/setembro/e.jpg",
            "images/setembro/f.jpg", "images/setembro/g.png"
        ]
    },
    {
        mes: "Mês 12, Outubro 2025",
        titulo: "O Décimo Segundo Frame",
        filme: "Notting Hill",
        filmeLink: "https://letterboxd.com/film/notting-hill/",
        poster: "images/hill.png",
        album: "Tapestry — Carole King",
        albumLink: "https://music.apple.com/us/album/tapestry/747087657",
        capa: "images/carole.jpg",
        fotoVossa: [
            "images/out25/1.png", "images/out25/a.jpg", "images/out25/b.jpg",
            "images/out25/c.jpg", "images/out25/d.jpg", "images/out25/e.jpg",
            "images/out25/f.jpeg", "images/out25/g.jpeg", "images/out25/h.jpeg",
            "images/out25/i.jpeg", "images/out25/k.jpeg", "images/out25/l.jpeg",
            "images/out25/m.jpeg", "images/out25/n.jpeg", "images/out25/o.jpeg",
            "images/out25/p.jpeg", "images/out25/q.jpeg", "images/out25/r.jpeg",
            "images/out25/s.jpeg"
        ]
    },
    {
        mes: "Mês 13, Novembro 2025",
        titulo: "O Décimo Terceiro Frame",
        filme: "Desert Hearts ",
        filmeLink: "https://letterboxd.com/film/desert-hearts/",
        poster: "images/desert.png",
        album: "Milo Greene — Milo Greene",
        albumLink: "https://music.apple.com/us/album/milo-greene/541312919",
        capa: "images/milo.jpg",
        fotoVossa: [
            "images/nov25/1.png", "images/nov25/a.png", "images/nov25/b.jpeg",
            "images/nov25/c.jpeg", "images/nov25/d.jpeg", "images/nov25/e.jpeg",
            "images/nov25/f.jpeg", "images/nov25/g.jpeg", "images/nov25/h.jpeg",
            "images/nov25/i.jpeg", "images/nov25/j.jpeg", "images/nov25/k.jpeg",
            "images/nov25/l.jpeg", "images/nov25/m.jpeg", "images/nov25/n.jpeg",
            "images/nov25/o.jpeg", "images/nov25/p.jpeg"
        ]
    },
    {
        mes: "Mês 14, Dezembro 2025",
        titulo: "O Décimo Quarto Frame",
        filme: "Roman Holiday",
        filmeLink: "https://letterboxd.com/film/roman-holiday/",
        poster: "images/roman.png",
        album: "When You Dream — Don Luxe",
        albumLink: "https://music.apple.com/us/album/when-you-dream/1526726161?i=1526726408",
        capa: "images/don.jpg",
        fotoVossa: [
            "images/dez25/1.png", "images/dez25/a.jpeg", "images/dez25/b.jpeg",
            "images/dez25/c.jpeg", "images/dez25/d.jpeg", "images/dez25/e.jpeg",
            "images/dez25/f.jpeg", "images/dez25/g.jpeg", "images/dez25/h.jpeg",
            "images/dez25/i.jpeg", "images/dez25/j.jpeg", "images/dez25/k.jpeg",
            "images/dez25/l.jpeg", "images/dez25/m.jpeg", "images/dez25/n.jpeg",
            "images/dez25/o.jpeg", "images/dez25/p.jpeg", "images/dez25/q.jpeg",
            "images/dez25/r.jpeg", "images/dez25/s.jpeg"
        ]
    },
    {
        mes: "Mês 15, Janeiro 2026",
        titulo: "O Décimo Quinto Frame",
        filme: "Nausicaä of the Valley of the Wind",
        filmeLink: "https://letterboxd.com/film/nausicaa-of-the-valley-of-the-wind/",
        poster: "images/nausica.png",
        album: "First Breath After Coma — The Misadventures of Anthony Knivet",
        albumLink: "https://music.apple.com/us/album/the-misadventures-of-anthony-knivet/822025978",
        capa: "images/breath.jpg",
        fotoVossa: [
            "images/jan26/1.png", "images/jan26/a.jpeg", "images/jan26/b.jpeg",
            "images/jan26/c.jpeg", "images/jan26/d.jpeg", "images/jan26/e.jpeg"
        ]
    },
    {
        mes: "Mês 16, Fevereiro 2026",
        titulo: "O Décimo Sexto Frame",
        filme: "Wings of Desire",
        filmeLink: "https://letterboxd.com/film/wings-of-desire/",
        poster: "images/wings.png",
        album: "Twin Fantasy — Car Seat Headrest",
        albumLink: "https://music.apple.com/us/album/twin-fantasy/1586483380",
        capa: "images/twin.jpg",
        fotoVossa: [
            "images/fev26/1.png", "images/fev26/a.jpeg", "images/fev26/b.png",
            "images/fev26/c.jpeg", "images/fev26/d.jpeg", "images/fev26/e.jpeg",
            "images/fev26/f.jpeg", "images/fev26/g.jpeg", "images/fev26/h.jpeg",
            "images/fev26/i.jpeg", "images/fev26/j.jpeg", "images/fev26/k.jpeg",
            "images/fev26/l.jpeg", "images/fev26/m.jpeg", "images/fev26/mm.jpeg",
            "images/fev26/n.jpeg", "images/fev26/nn.jpeg", "images/fev26/o.jpeg",
            "images/fev26/oo.jpeg", "images/fev26/p.jpeg", "images/fev26/pp.jpeg",
            "images/fev26/q.jpeg", "images/fev26/qq.jpeg", "images/fev26/r.jpeg",
            "images/fev26/s.jpeg", "images/fev26/t.jpeg", "images/fev26/u.jpeg",
            "images/fev26/uu.jpeg", "images/fev26/v.jpeg", "images/fev26/ww.jpeg",
            "images/fev26/x.jpeg", "images/fev26/yy.jpeg", "images/fev26/z.jpeg"
        ]
    },
    {
        mes: "Mês 17, Março 2026",
        titulo: "O Décimo Sétimo Frame",
        filme: "Stranger Than Paradise",
        filmeLink: "https://letterboxd.com/film/stranger-than-paradise/",
        poster: "images/stranger.png",
        album: "Then Play On — Fleetwood Mac",
        albumLink: "https://music.apple.com/us/album/then-play-on-expanded-edition-2013-remaster/1441329962",
        capa: "images/playon.jpg",
        fotoVossa: [
            "images/mar26/1.png", "images/mar26/a.jpeg", "images/mar26/b.jpeg",
            "images/mar26/c.jpeg", "images/mar26/d.jpeg", "images/mar26/e.jpeg"
        ]
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
    'Novembro 2024': {
        itens: [
            'Milhões de videochamadas (Erasmus mode)',
            'Tarde a ver albunzinhos na Fnac'
        ]
    },
    'Dezembro 2024': {
        itens: [
            'Porto pela primeira vez juntas',
            'Panquecas salgadas, Ramen e Ape',
            'A nossa primeira troquinha de prendas :)'
        ]
    },
    'Janeiro 2025': {
        itens: [
            'A minha Primeira vez em Aveiro!',
            'Museu dos Brinquedos',
            'Jantar no Mário'
        ]
    },
    'Fevereiro 2025': {
        itens: [
            'Celebrar o teu aniversário pela primeira vez contigo',
            'O cheesecake que se derreteu todo',
            "Pizza D'Artista e fomos Scameads",
            'Troca de mimos de S. Valentim',
            'Descobri o teu vício de tirar pulgas aos gatinhos'
        ]
    },
    'Março 2025': {
        itens: [
             'Concertos: Más Influências e Valter Lobo',
             'Bom Jesus e almoço na Pausa Útil com o teu irmão',
             'Vício em Apple Crumble', 
             'Estreia no Londrina'
        ]
    },
    'Abril 2025': {
        itens: [
            'Muitos lanchichos de Panick e folhados de pistácio (a nossa obsessao por esses mes)',
            'Eu bêbada a esconder-me para fazer poop',
            'Coisinha da Society',
            'Ver os gatinhos a beira do Jardim (estavamos a ir buscar coisas para cozinhar...)',
        ]
    },
    'Maio 2025': {
        itens: [
            'Pizzas e Sushi caseiro',
            'Sushi Star pela primeira vez juntas ',
            'Moldar tricórnios e a tua Imposição de Insígnias',
            'Um Enterro (finalmente bom para as duas) e muitos beijinhos bêbadas',
            'Concerto do B-Fachada e Antu',
            'O puré com camarão que fiz e tu amaste'
        ]
    },
    'Junho 2025': {
        itens: [
            'Praia da Vagueira e piquenique ao pôr do sol',
            'Jantar Italiano no restaurante mais barulhento de sempre',
            'Noite de máscaras'
        ]
    },
    'Julho 2025': {
        itens: [
            'Barcelos pela primeira vez',
            'O cone de ovos com Nutella....',
            'Mini férias em Aveiro: Praia do Mar Morto e banho de sal',
            'Início oficial do nosso Rally de Sushi',
            'Jogos sem Fronteiras'
        ]
    },
    'Agosto 2025': {
        itens: [
            'Paredes de Coura: muitos concertos e comidinha',
            'A frase icónica das Lambrini Girls (que ninguém se lembra)',
            'Batatas fritas caríssimas, mas valeram a pena',
            'Vender brincos',
            'Fazer as unhas',
            'Lanche com a minha família',
            'Loureiros com as girlies',
            'Porto e a Francesinha que sabia a sopa (e o nosso poema!)'
        ]
    },
    'Setembro 2025': {
        itens: [
            'Muitas idas à Normal',
            'Jogo de Portugal com finos e tremoços',
            'Festa do Marley :))',
            'Competição de finos em na festa de Soza',
            'Sushi (ao fazer isto apercebo-me o quanto gastamos em sushi...)'
        ]
    },
    'Outubro 2025': {
        itens: [
            'O meu aniversário e sleepover com as girlies',
            'Tábua Trip de 1 ano!',
            'Mais Sushi!',
            'Defesa da tese da Bela',
            'Noite de Halloween: pintar abóboras, cookies, e o teu 1º jogo de terror no PC'
        ]
    },
    'Novembro 2025': {
        itens: [
            'Ver fotos antigas em casa da tua avó',
            'Encontramos a saia branca',
            'Noodles feitos do zero e Soju!!!',
            'Porto, hambúrgueres e Tim Bernardes',
            'AGRO: ver os animais e descobrir as cookies orgásmicas de Red Velvet'
        ]
    },
    'Dezembro 2025': {
        itens: [
            'Bastuço e Barcelos: vários night snacks',
            'Stranger Things Finale',
            'Starbucks e troquinha de prendas',
            'Jantar com a Bela e o Duarte',
            'French Toast de Tiramisu...',
            'Muitas e muitas chamadinhas',
            'Troca de prendinhas de Natal'
        ]
    },
    'Janeiro 2026': {
        itens: [
            'Mutus e lanchinhos',
            'Loni, gavi, marley jantar:) (e descobrir a personalidade do rui...)',
            'Pizzas caseiras com Aperol',
            'O momento épico da Very Cool Chair ;)',
            'Mais noodles'
        ]
    },
    'Fevereiro 2026': {
        itens: [
            '2º aniversário teu que passo contigo hihi!',
            'Color Hunting e sushi',
            'Color Date com snacks',
            'Dia dos Namorados em Viana <3',
            'Late snack no Bastucini'
        ]
    }
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

function obterMesAno(rotuloMes) {
    const partes = rotuloMes.split(',');
    return partes.length > 1 ? partes[1].trim() : rotuloMes.trim();
}

function abrirInfoModal(item) {
    const mesAno = obterMesAno(item.mes);
    const secao = curatorsNotesPorMes[mesAno];

    if (secao) {
        infoModalTitle.textContent = `Curator's Note - ${mesAno}`;
        infoModalList.innerHTML = `
            <section class="bts-section">
                <ul>
                    ${secao.itens.map((texto) => `<li>${texto}</li>`).join('')}
                </ul>
            </section>
        `;
    } else {
        infoModalTitle.textContent = `Curator's Note - ${mesAno}`;
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

dados.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.zIndex = index;
    card.style.background = 'none';

    const filmeLink = item.filmeLink;
    const albumLink = item.albumLink ? item.albumLink : `https://music.apple.com/search?term=${encodeURIComponent(item.album)}`;
    const fotos = Array.isArray(item.fotoVossa) ? item.fotoVossa : [item.fotoVossa];
    card.innerHTML = `
        <button class="curator-note-btn" type="button">Curator's Note</button>
        <div class="card-content">
            <div class="info-panel">
                <h2>${item.titulo}</h2>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 24px; margin-top: 10px;">
                    <div class="media-item" style="flex-direction: column; align-items: center;">
                        <img src="${item.poster}" alt="Poster" class="poster-img" style="cursor:zoom-in;">
                        <div style="text-align: center;">
                            <strong>The Discovery</strong>
                            <p><a href="${filmeLink}" target="_blank" class="media-link">${item.filme}</a></p>
                        </div>
                    </div>
                    <div class="media-item" style="flex-direction: column; align-items: center;">
                        <img src="${item.capa}" alt="Capa Album">
                        <div style="text-align: center;">
                            <strong>The Reference</strong>
                            <p><a href="${albumLink}" target="_blank" class="media-link">${item.album}</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="photo-panel">
                <div class="photo-track">
                    ${fotos.map((foto, i) => `<img src="${foto}" alt="Foto ${i + 1} de ${item.mes}" class="photo-slide">`).join('')}
                </div>
                <button class="photo-nav photo-nav-prev" type="button" aria-label="Foto anterior">&#8249;</button>
                <button class="photo-nav photo-nav-next" type="button" aria-label="Foto seguinte">&#8250;</button>
            </div>
        </div>
    `;

    card.querySelector('.curator-note-btn').addEventListener('click', (event) => {
        event.stopPropagation();
        abrirInfoModal(item);
    });

    const photoPanel = card.querySelector('.photo-panel');
    const photoTrack = card.querySelector('.photo-track');
    const prevBtn = card.querySelector('.photo-nav-prev');
    const nextBtn = card.querySelector('.photo-nav-next');
    const maxIndex = Math.max(fotos.length - 1, 0);
    let currentIndex = 0;

    function atualizarSlide() {
        photoTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    atualizarSlide();

    nextBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        if (maxIndex === 0) {
            return;
        }

        currentIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
        atualizarSlide();
    });

    prevBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        if (maxIndex === 0) {
            return;
        }

        currentIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
        atualizarSlide();
    });

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