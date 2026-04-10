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
    }
];

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
