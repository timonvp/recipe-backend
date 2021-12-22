let RECIPES = [{
        id: 0,
        name: 'Croques met truffelmayonaise',
        preparation: 'Beleg twee sneetjes toastbrood met een plakje kaas en een plakje ham. Leg er opnieuw twee sneetjes toastbrood bovenop. Toast de croques goudbruin en krokant in de oven of in een croquemachine. Serveer met truffelmayonaise.',
        duration: 10,
        people: 1,
        ingredients: [{
                name: 'toastbrood',
                unit: 'sneetjes',
                amount: 4,
            },
            {
                name: 'hesp',
                unit: 'plakjes',
                amount: 2,
            },
            {
                name: 'kaas',
                unit: 'plakjes',
                amount: 2,
            },
            {
                name: 'truffelmayonaise',
                unit: 'el',
                amount: 1,
            },
        ],
    },
    {
        id: 1,
        name: 'Crème brulée',
        preparation: 'Roer de suiker onder de eigelen. Voeg hier de volle melk en de room aan toe. Schraap de zaadjes uit de vanillestok en voeg bij het mengsel. Laat een uurtje rusten in de koelkast. Doe het mengsel in vuurvaste schaaltjes en bak de crème brulée af gedurende 1 uur en 15 minuten in een voorverwarmde oven van 95 graden. Haal ze uit de oven en laat ze afkoelen. Bestrooi de crème brulées met fijne suiker en karamelliseer de suiker met een brander.',
        duration: 120,
        people: 6,
        ingredients: [{
                name: 'eigelen',
                unit: '',
                amount: 10,
            },
            {
                name: 'suiker',
                unit: 'gr',
                amount: 200,
            },
            {
                name: 'volle melk',
                unit: 'dl',
                amount: 3,
            },
            {
                name: 'volle room',
                unit: 'dl',
                amount: 9,
            },
            {
                name: 'vanillestok',
                unit: '',
                amount: 1,
            },
        ],
    },
    {
        id: 2,
        name: 'Zalm en croûte',
        preparation: 'Doe voor de vulling de ricotta, de pijnboompitten, knoflook, olijfolie, basilicum, dille en citroenzeste in de foodprocessor. Pureer tot een mooie crème. Breng het geheel op smaak met peper en zout. Verwarm de oven voor op 180°C. Neem een vel filodeeg. Vouw het dubbel en leg het met de lange zijde verticaal voor je. Smeer volledig in met een dun laagje gesmolten boter. Leg er een tweede vel dubbelgevouwen filodeeg over en bestrijk met boter. Doe dit ook met het derde vel. Bestrijk dan het filodeeg volledig met ricottavulling en leg daarop aan de bovenkant een stuk zalm. Rol het filodeeg voorzichtig op vanaf de kant waar je de zalm hebt gelegd. Vouw de zijkanten nonchalant naar binnen zoals een pakketje. Smeer de buitenkant in met gesmolten boter en leg de zalm en croûte op een bakplaat bekleed met bakpapier. Maak nu de tweede portie. Bak de zalm en croûte 30-35 minuten in de oven.',
        duration: 60,
        people: 2,
        ingredients: [{
                name: 'ricotta',
                unit: 'gr',
                amount: 180,
            },
            {
                name: 'pijnboompitten',
                unit: 'gr',
                amount: 50,
            },
            {
                name: 'knoflook',
                unit: 'tenen',
                amount: 2,
            },
            {
                name: 'olijfolie',
                unit: 'el',
                amount: 1,
            },
            {
                name: 'basilicum',
                unit: 'blaadjes',
                amount: 10,
            },
            {
                name: 'dille',
                unit: 'takjes',
                amount: 4,
            },
            {
                name: 'citroen',
                unit: '',
                amount: 1,
            },
            {
                name: 'filodeeg',
                unit: 'vellen',
                amount: 6,
            },
            {
                name: 'gesmolten boter',
                unit: 'gr',
                amount: 30,
            },
            {
                name: 'zalmfilet',
                unit: 'gr',
                amount: 500,
            },
        ],
    },
];

module.exports = { RECIPES };