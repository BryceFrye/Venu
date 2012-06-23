$('#search-artist input').keypress(function(e) {
  if (e.keyCode === 13) {
    getData();
  }
});

$(function() {
	var availableTags = [
	"Coldplay",
	"Radiohead",
	"Rihanna",
	"Florence + the Machine",
	"The Beatles",
	"Gotye",
	"Linkin Park",
	"Red Hot Chili Peppers",
	"Adele",
	"Muse",
	"Maroon 5",
	"David Guetta",
	"Nirvana",
	"The Black Keys",
	"Foo Fighters",
	"fun.",
	"Lana Del Rey",
	"Arctic Monkeys",
	"Kanye West",
	"Katy Perry",
	"Foster the People",
	"M83",
	"Queen",
	"Nicki Minaj",
	"Pink Floyd",
	"Carly Rae Jepsen",
	"Skrillex",
	"Metallica",
	"Lady Gaga",
	"Daft Punk",
	"Eminem",
	"Gorillaz",
	"The Killers",
	"The Rolling Stones",
	"Bon Iver",
	"Flo Rida",
	"Green Day",
	"Kings of Leon",
	"The Strokes",
	"The Cure",
	"System of a Down",
	"The xx",
	"David Bowie",
	"Madonna",
	"Arcade Fire",
	"Blink-182",
	"Led Zeppelin",
	"Jay-Z",
	"Drake",
	"Usher",
	"U2",
	"Oasis",
	"The Smiths",
	"Guns N' Roses",
	"Bob Dylan",
	"Hot Chip",
	"The White Stripes",
	"MGMT",
	"Mumford & Sons",
	"Train",
	"Michael Jackson",
	"Beyoncé",
	"Death Cab for Cutie",
	"John Mayer",
	"Calvin Harris",
	"Pearl Jam",
	"The Offspring",
	"The Smashing Pumpkins",
	"Depeche Mode",
	"The Doors",
	"AC/DC",
	"Regina Spektor",
	"Beach House",
	"Paramore",
	"Metric",
	"LMFAO",
	"Massive Attack",
	"Avicii",
	"deadmau5",
	"Ellie Goulding",
	"Britney Spears",
	"The Kooks",
	"Placebo",
	"Justin Bieber",
	"The Shins",
	"Jason Mraz",
	"Snow Patrol",
	"Johnny Cash",
	"Kelly Clarkson",
	"Pitbull",
	"Iron Maiden",
	"Rise Against",
	"R.E.M.",
	"Chris Brown",
	"Yeah Yeah Yeahs",
	"The National",
	"Two Door Cinema Club",
	"Phoenix",
	"Weezer",
	"Nickelback",
	"Sigur Rós",
	"Franz Ferdinand",
	"Korn",
	"Amy Winehouse",
	"The Prodigy",
	"Moby",
	"Black Eyed Peas",
	"Aerosmith",
	"Marilyn Manson",
	"Lykke Li",
	"Of Monsters and Men",
	"Vampire Weekend",
	"Evanescence",
	"Pixies",
	"30 Seconds to Mars",
	"Black Sabbath",
	"Beastie Boys",
	"Kid Cudi",
	"Beck",
	"Kasabian",
	"Blur",
	"The Temper Trap",
	"Queens of the Stone Age",
	"Crystal Castles",
	"Ed Sheeran",
	"Justice",
	"The Beach Boys",
	"Nine Inch Nails",
	"Slipknot",
	"Passion Pit",
	"Marina & the Diamonds",
	"Taylor Swift",
	"One Direction",
	"Beirut",
	"Jennifer Lopez",
	"B.o.B",
	"Avril Lavigne",
	"My Chemical Romance",
	"Rammstein",
	"Rage Against the Machine",
	"The Clash",
	"Incubus",
	"Pendulum",
	"Feist",
	"Keane",
	"Modest Mouse",
	"The Who",
	"Bloc Party",
	"Bruno Mars",
	"Bruce Springsteen",
	"The Wanted",
	"The Tallest Man on Earth",
	"Jessie J",
	"Edward Sharpe & The Magnetic Zeros",
	"Limp Bizkit",
	"Joy Division",
	"Fleet Foxes",
	"Jack Johnson",
	"Björk",
	"Bon Jovi",
	"Glee Cast",
	"Fall Out Boy",
	"The Naked and Famous",
	"Alex Clare",
	"Miike Snow",
	"[unknown]",
	"Fleetwood Mac",
	"Simon & Garfunkel",
	"Santigold",
	"Creedence Clearwater Revival",
	"Sum 41",
	"Interpol",
	"Avenged Sevenfold",
	"Air",
	"Lil' Wayne",
	"The Fray",
	"Loreen",
	"Nightwish",
	"Disturbed",
	"Röyksopp",
	"Shakira",
	"Wiz Khalifa",
	"Portishead",
	"Swedish House Mafia",
	"Panic! At the Disco",
	"Elvis Presley",
	"The Chemical Brothers",
	"M.I.A.",
	"Norah Jones",
	"Neil Young",
	"The Cranberries",
	"Dire Straits",
	"Band of Horses",
	"Elton John",
	"Jimi Hendrix",
	"Belle and Sebastian",
	"Christina Aguilera",
	"Gym Class Heroes",
	"OneRepublic",
	"3 Doors Down",
	"P!nk",
	"Papa Roach",
	"Tenacious D",
	"Grimes",
	"Sufjan Stevens",
	"Nero",
	"Alice in Chains",
	"LCD Soundsystem",
	"Kylie Minogue",
	"Lily Allen",
	"Bob Marley & The Wailers",
	"Bonobo",
	"Bombay Bicycle Club",
	"Ramones",
	"Garbage",
	"OutKast",
	"Jack White",
	"Megadeth",
	"Simple Plan",
	"New Order",
	"The Police",
	"Iron & Wine",
	"Eric Clapton",
	"In Flames",
	"Ke$ha",
	"Three Days Grace",
	"The Kinks",
	"A Day To Remember",
	"Bob Marley",
	"Animal Collective",
	"Far East Movement",
	"Deftones",
	"AWOLNATION",
	"Taio Cruz",
	"Tool",
	"Bright Eyes",
	"The Hives",
	"Bullet For My Valentine",
	"Deep Purple",
	"Jimmy Eat World",
	"Robyn",
	"2Pac",
	"Stevie Wonder",
	"Tom Waits",
	"Snoop Dogg",
	"The Velvet Underground",
	"Nelly Furtado",
	"Scissor Sisters",
	"Kings of Convenience",
	"Soundgarden",
	"Dr. Dre",
	"Scorpions",
	"Ben Howard",
	"Metronomy",
	"Justin Timberlake",
	"Kaiser Chiefs",
	"Ozzy Osbourne",
	"Talking Heads",
	"Azealia Banks",
	"Gossip",
	"Sean Paul",
	"Slayer",
	"Japandroids",
	"Frank Sinatra",
	"Breaking Benjamin",
	"Damien Rice",
	"Pantera",
	"Audioslave",
	"Ratatat",
	"Rush",
	"Grouplove",
	"The All-American Rejects",
	"La Roux",
	"Dream Theater",
	"Yann Tiersen",
	"Wilco",
	"Alanis Morissette",
	"Empire of the Sun",
	"The Verve",
	"Elliott Smith",
	"Tiësto",
	"Birdy",
	"Owl City",
	"Grizzly Bear",
	"No Doubt",
	"Best Coast",
	"Jamiroquai",
	"Sonic Youth",
	"Hans Zimmer",
	"Motörhead",
	"The Decemberists",
	"Jay-Z & Kanye West",
	"The Script",
	"The Roots",
	"Demi Lovato",
	"Kiss",
	"Nas",
	"The Notorious B.I.G.",
	"Lynyrd Skynyrd",
	"City and Colour",
	"Alicia Keys",
	"Van Halen",
	"Nina Simone",
	"Goo Goo Dolls",
	"Cat Power",
	"Explosions in the Sky",
	"Sia",
	"Fatboy Slim",
	"The Knife",
	"The Jimi Hendrix Experience",
	"PJ Harvey",
	"Sublime",
	"Noah and the Whale",
	"SBTRKT",
	"The Flaming Lips",
	"Counting Crows",
	"Sting",
	"Judas Priest",
	"Apocalyptica",
	"Marvin Gaye",
	"A Perfect Circle",
	"Billy Talent",
	"Foals",
	"The Cardigans",
	"Childish Gambino",
	"The Lonely Island",
	"The Drums",
	"Journey",
	"Lenny Kravitz",
	"Lupe Fiasco",
	"Angus & Julia Stone",
	"Phil Collins",
	"Mogwai",
	"James Blake",
	"Within Temptation",
	"Robbie Williams",
	"50 Cent",
	"The Ting Tings",
	"Good Charlotte",
	"The Walkmen",
	"Cake",
	"The Kills",
	"Billy Joel",
	"The Wombats",
	"Fiona Apple",
	"Blondie",
	"Neon Trees",
	"MIKA",
	"ABBA",
	"Mac Miller",
	"James Blunt",
	"Aphex Twin",
	"Bryan Adams",
	"Michael Bublé",
	"Opeth",
	"Paul Simon",
	"Shinedown",
	"Jason Derülo",
	"Chase & Status",
	"Eels",
	"Friendly Fires",
	"Brand New",
	"José González",
	"Miles Davis",
	"Sleigh Bells",
	"Young the Giant",
	"Tyga",
	"Santana",
	"Washed Out",
	"Silversun Pickups",
	"Enrique Iglesias",
	"John Lennon",
	"Iggy Pop",
	"TV on the Radio",
	"Tegan And Sara",
	"Leonard Cohen",
	"Wolfmother",
	"Selena Gomez & the Scene",
	"Dropkick Murphys",
	"The Vaccines",
	"Amy Macdonald",
	"All Time Low",
	"Mariah Carey",
	"Emeli Sandé",
	"Seether",
	"Yeasayer",
	"Stone Sour",
	"Editors",
	"Peter Bjorn and John",
	"Frank Ocean",
	"Yellowcard",
	"Andrew Bird",
	"Skillet",
	"Prince",
	"Cobra Starship",
	"Christina Perri",
	"Little Dragon",
	"Faith No More",
	"Jeff Buckley",
	"Armin Van Buuren",
	"Alice Cooper",
	"ZZ Top",
	"Boards of Canada",
	"Duran Duran",
	"The Postal Service",
	"Lostprophets",
	"Van Morrison",
	"Neutral Milk Hotel",
	"Timbaland",
	"Alabama Shakes",
	"Benny Benassi",
	"Ray Charles",
	"Spoon",
	"Lifehouse",
	"Porcupine Tree",
	"The Stone Roses",
	"3OH!3",
	"T.I.",
	"Cut Copy",
	"Dido",
	"Mastodon",
	"Otis Redding",
	"Goldfrapp",
	"Whitney Houston",
	"Bloodhound Gang",
	"Martin Solveig",
	"Adam Lambert",
	"Morrissey",
	"Cypress Hill",
	"Bee Gees",
	"Caribou",
	"Enter Shikari",
	"Aretha Franklin",
	"Genesis",
	"Bad Religion",
	"The Used",
	"James Morrison",
	"The Mars Volta",
	"Burial",
	"Lady Antebellum",
	"Nick Cave and the Bad Seeds",
	"Michel Teló",
	"Wu-Tang Clan",
	"Imogen Heap",
	"Snoop Dogg & Wiz Khalifa",
	"The Maccabees",
	"HIM",
	"Prodigy",
	"Louis Armstrong",
	"Gavin DeGraw",
	"Broken Social Scene",
	"Zero 7",
	"Dave Matthews Band",
	"a-ha",
	"Eddie Vedder",
	"A Tribe Called Quest",
	"Pretty Lights",
	"Bat for Lashes",
	"Totally Enormous Extinct Dinosaurs",
	"Jet",
	"Biffy Clyro",
	"The Pretty Reckless",
	"AFI",
	"Stereophonics",
	"Cage The Elephant",
	"DJ Shadow",
	"Killswitch Engage",
	"Miley Cyrus",
	"White Lies",
	"Infected Mushroom",
	"Stone Temple Pilots",
	"Jefferson Airplane",
	"Children of Bodom",
	"Kate Nash",
	"Neon Indian",
	"Thievery Corporation",
	"Kavinsky",
	"Bring Me The Horizon",
	"Ryan Adams",
	"Toto",
	"James Brown",
	"St. Vincent",
	"The Fratellis",
	"Cat Stevens",
	"Nick Drake",
	"Sara Bareilles",
	"Ladyhawke",
	"Pulp",
	"Enya",
	"The Rapture",
	"Major Lazer",
	"Lamb of God",
	"Die Antwoord",
	"Lou Reed",
	"Groove Armada",
	"Carrie Underwood",
	"Parov Stelar",
	"Four Tet",
	"Electric Light Orchestra",
	"The Weeknd",
	"The Raconteurs",
	"Eagles",
	"Misfits",
	"Gnarls Barkley",
	"Example",
	"The Gaslight Anthem",
	"Taking Back Sunday",
	"Hall & Oates",
	"Cults",
	"Ne-Yo",
	"Gwen Stefani",
	"Hoobastank",
	"Kate Bush",
	"Klaxons",
	"Travis",
	"Trivium",
	"The Libertines",
	"Morcheeba",
	"The Glitch Mob",
	"Pet Shop Boys",
	"The Cinematic Orchestra",
	"Plain White T's",
	"OK Go",
	"Cream",
	"Tori Amos",
	"Rusko",
	"Colbie Caillat",
	"Flux Pavilion",
	"You Me At Six",
	"Tears for Fears",
	"Pink",
	"of Montreal",
	"My Bloody Valentine",
	"Sonata Arctica",
	"First Aid Kit",
	"Karmin",
	"Laura Marling",
	"J. Cole",
	"Backstreet Boys",
	"Cee Lo Green",
	"Sade",
	"Paul McCartney",
	"NOFX",
	"Patti Smith",
	"Staind",
	"Hollywood Undead",
	"Nouvelle Vague",
	"Five Finger Death Punch",
	"She & Him",
	"Matchbox Twenty",
	"Akon",
	"College",
	"Third Eye Blind",
	"Godsmack",
	"Cold War Kids",
	"Ludwig van Beethoven",
	"Daughtry",
	"Nelly",
	"The Whitest Boy Alive",
	"Creed",
	"Hurts",
	"Tinie Tempah",
	"Chromatics",
	"Ingrid Michaelson",
	"RJD2",
	"The Antlers",
	"UNKLE",
	"Machine Head",
	"Kimbra",
	"Anberlin",
	"Janis Joplin",
	"Black Rebel Motorcycle Club",
	"Elbow",
	"Blind Guardian",
	"Leona Lewis",
	"Tom Petty and the Heartbreakers",
	"Anathema",
	"Broken Bells",
	"Mötley Crüe",
	"Manu Chao",
	"Girls",
	"Bush",
	"Rob Zombie",
	"Phantogram",
	"Chairlift",
	"Slash",
	"Roxette",
	"Dev",
	"Flogging Molly",
	"Tyler, The Creator",
	"R. Kelly",
	"DJ Fresh",
	"Devendra Banhart",
	"Bobby Womack",
	"Ludacris",
	"Real Estate",
	"P.O.D.",
	"The Civil Wars",
	"Serj Tankian",
	"The Game",
	"Asking Alexandria",
	"Billy Idol",
	"The Dandy Warhols",
	"Pavement",
	"Stars",
	"Labrinth",
	"Sex Pistols",
	"My Morning Jacket",
	"Imagine Dragons",
	"Wolfgang Amadeus Mozart",
	"Peter Gabriel",
	"Chuck Berry",
	"Matt & Kim",
	"John Legend",
	"John Williams",
	"Céline Dion",
	"Paolo Nutini",
	"Toro Y Moi",
	"Billie Holiday",
	"Rod Stewart",
	"Cyndi Lauper",
	"Ludovico Einaudi",
	"Destiny's Child",
	"George Michael",
	"Chiddy Bang",
	"BIG BANG",
	"The Avett Brothers",
	"Motion City Soundtrack",
	"Deerhunter",
	"Alt-J",
	"Duffy",
	"Eurythmics",
	"Bill Withers",
	"Sepultura",
	"Escape The Fate",
	"Flying Lotus",
	"God Is An Astronaut",
	"Al Green",
	"Liars",
	"Switchfoot",
	"Volbeat",
	"Rufus Wainwright",
	"Anthrax",
	"Common",
	"Dio",
	"Cheryl Cole",
	"Faithless",
	"Manic Street Preachers",
	"Olly Murs",
	"Kansas",
	"Digitalism",
	"The Magnetic Fields",
	"Breathe Carolina",
	"Ella Fitzgerald",
	"CocoRosie",
	"Radical Face",
	"Sabaton",
	"Ennio Morricone",
	"Gojira",
	"New Found Glory",
	"Amon Amarth",
	"The Pussycat Dolls",
	"The Horrors",
	"Supertramp",
	"Kent",
	"Rick Ross",
	"Johann Sebastian Bach",
	"Guano Apes",
	"Ladytron",
	"Tracy Chapman",
	"T. Rex",
	"Brian Eno",
	"T-pain",
	"Alexandra Stan",
	"Wale",
	"Knife Party",
	"Ray LaMontagne",
	"Def Leppard",
	"Mos Def",
	"Yes",
	"Simian Mobile Disco",
	"Whitesnake",
	"Basement Jaxx",
	"Aloe Blacc",
	"Crystal Fighters",
	"Fever Ray",
	"Bassnectar",
	"Boston",
	"Cascada",
	"Atreyu",
	"Amon Tobin",
	"Fort Minor",
	"Woodkid",
	"Fear Factory",
	"Mayday Parade",
	"N*E*R*D",
	"Local Natives",
	"Atmosphere",
	"Electric Guest",
	"Ice Cube",
	"Chevelle",
	"The Subways",
	"Alter Bridge",
	"Lacuna Coil",
	"INXS",
	"Kendrick Lamar",
	"Kraftwerk",
	"Clint Mansell",
	"Flyleaf",
	"Rancid",
	"Foreigner",
	"Dashboard Confessional",
	"The Throne",
	"Earth, Wind & Fire",
	"Thin Lizzy",
	"Thom Yorke",
	"Trey Songz",
	"Yo La Tengo",
	"Gogol Bordello",
	"Big Sean",
	"The Streets",
	"Portugal. The Man",
	"Rita Ora",
	"Angels & Airwaves",
	"Tennis",
	"Joshua Radin",
	"Youth Lagoon",
	"Dusty Springfield",
	"Inna",
	"KT Tunstall",
	"Blue Öyster Cult",
	"Clams Casino",
	"Noel Gallagher's High Flying Birds",
	"Busta Rhymes",
	"Cansei de Ser Sexy",
	"Alkaline Trio",
	"Luke Bryan",
	"The Asteroids Galaxy Tour",
	"t.A.T.u.",
	"Coheed and Cambria",
	"Helloween",
	"Jethro Tull",
	"Tricky",
	"As I Lay Dying",
	"Waka Flocka Flame",
	"The Mamas & The Papas",
	"Django Django",
	"Mando Diao",
	"ATB",
	"Tycho",
	"Seal",
	"Plan B",
	"Paul Kalkbrenner",
	"Epica",
	"Ben Folds",
	"The Animals",
	"The Jackson 5",
	"Mystery Jets",
	"Netsky",
	"Spiritualized",
	"Nancy Sinatra",
	"Natasha Bedingfield",
	"Tom Petty",
	"David Gray",
	"The Jesus and Mary Chain",
	"The Lumineers",
	"M. Ward",
	"Thrice",
	"Parkway Drive",
	"Chromeo",
	"Sarah McLachlan",
	"The Stooges",
	"The Dead Weather",
	"Yelle",
	"Ben Harper",
	"Sheryl Crow",
	"James Vincent McMorrow",
	"Katatonia",
	"The Last Shadow Puppets",
	"The Red Jumpsuit Apparatus",
	"The Rasmus",
	"John Coltrane",
	"Kreator",
	"Band of Skulls",
	"Starfucker",
	"Alexisonfire",
	"Europe",
	"Frédéric Chopin",
	"Grateful Dead",
	"Maxïmo Park",
	"Etta James",
	"Manowar",
	"Porter Robinson",
	"Trentemøller",
	"Smash Mouth",
	"Dinosaur Jr.",
	"Mazzy Star",
	"Gold Panda",
	"Alesso",
	"Underworld",
	"Apparat",
	"Emilíana Torrini",
	"Tokyo Police Club",
	"Boys Like Girls",
	"Kaskade",
	"Eluveitie",
	"Blue Foundation",
	"Joni Mitchell",
	"Drowning Pool",
	"Barenaked Ladies",
	"Architecture in Helsinki",
	"Paloma Faith",
	"Battles",
	"소녀시대",
	"Erykah Badu",
	"Hole",
	"K'naan",
	"Razorlight",
	"Primal Scream",
	"Siouxsie and the Banshees",
	"Los Hermanos",
	"Doves",
	"Echo & the Bunnymen",
	"Joe Cocker",
	"The Head And The Heart",
	"Matisyahu",
	"Nada Surf",
	"Sam Cooke",
	"Lauryn Hill",
	"The Temptations",
	"Meshuggah",
	"Silverstein",
	"Howard Shore",
	"Kelis",
	"Mary J. Blige",
	"Eric Church",
	"The Mountain Goats",
	"The Band",
	"Arch Enemy",
	"Warpaint",
	"Spice Girls",
	"Poets Of The Fall",
	"Camera Obscura",
	"Mike Posner",
	"Mat Kearney",
	"King Crimson",
	"Elvis Costello",
	"Purity Ring",
	"Enigma",
	"Hot Chelle Rae",
	"Kelly Rowland",
	"Modestep",
	"DJ Khaled",
	"Static-X",
	"Tame Impala",
	"Michael Kiwanuka",
	"Rilo Kiley",
	"Theory Of A Deadman",
	"Oh Land",
	"2NE1",
	"Dimmu Borgir",
	"Fugees",
	"All That Remains",
	"Rainbow",
	"Puddle Of Mudd",
	"Madness",
	"Simple Minds",
	"Architects",
	"Gang Starr",
	"John Frusciante",
	"iamamiwhoami",
	"Pixie Lott",
	"Mew",
	"Little Boots",
	"We Are Scientists",
	"Black Label Society",
	"Dizzee Rascal",
	"Feed Me",
	"Manchester Orchestra",
	"Survivor",
	"Noisia",
	"Cher",
	"Zac Brown Band",
	"Dead by April",
	"Dada Life",
	"The Bravery",
	"Orbital",
	"The Radio Dept.",
	"Heart",
	"August Burns Red",
	"Los Campesinos!",
	"Say Anything",
	"Live",
	"Celldweller",
	"DragonForce",
	"Death Grips",
	"The Devil Wears Prada",
	"Dead Kennedys",
	"Archive",
	"Cradle of Filth",
	"Violent Femmes",
	"A Fine Frenzy",
	"Cloud Nothings",
	"Young Jeezy",
	"Black Lips",
	"The Allman Brothers Band",
	"Afrojack",
	"Fergie",
	"Desire",
	"Janelle Monáe",
	"A$AP Rocky",
	"Roy Orbison",
	"Against Me!",
	"Jason Aldean",
	"The Byrds",
	"Natalie Imbruglia",
	"George Harrison",
	"f(x)",
	"311",
	"TLC",
	"Dirty Projectors",
	"Missy Elliott",
	"Mindless Self Indulgence",
	"The Sounds",
	"Take That",
	"Ciara",
	"Rascal Flatts",
	"Boyce Avenue",
	"Danny Brown",
	"Savage Garden",
	"Roxy Music",
	"Jay Sean",
	"Lionel Richie",
	"Jane's Addiction",
	"Janet Jackson",
	"At the Drive-In",
	"Jay-Z and Linkin Park",
	"Jamie Cullum",
	"Curren$y",
	"The New Pornographers",
	"Run-D.M.C.",
	"Emancipator",
	"tUnE-yArDs",
	"DMX",
	"Jack's Mannequin",
	"Supergrass",
	"Rizzle Kicks",
	"Nicolas Jaar",
	"Sébastien Tellier",
	"Buddy Holly",
	"J Dilla",
	"Lamb",
	"Silverchair",
	"Skid Row",
	"Don Omar",
	"Cher Lloyd",
	"65daysofstatic",
	"Eagles of Death Metal",
	"Death",
	"Flight Facilities",
	"Cocteau Twins",
	"Kyuss",
	"Corinne Bailey Rae",
	"Red",
	"UB40",
	"Kool & The Gang",
	"Die Toten Hosen",
	"Twin Shadow",
	"Hooverphonic",
	"Alien Ant Farm",
	"Them Crooked Vultures",
	"The Jam",
	"Miss May I",
	"Ace of Base",
	"El-P",
	"Die Ärzte",
	"Rudimental",
	"The Maine",
	"Laleh",
	"Blood Red Shoes",
	"ASAP Rocky",
	"Donna Summer",
	"The Cribs",
	"Antony and the Johnsons",
	"Big K.R.I.T.",
	"Wild Nothing",
	"植松伸夫",
	"Nat King Cole",
	"The Zombies",
	"Legião Urbana",
	"Nicole Scherzinger",
	"Vangelis",
	"Carla Bruni",
	"Hammerfall",
	"Korpiklaani",
	"Frank Zappa",
	"Will Smith",
	"Atlas Sound",
	"Mudvayne",
	"Fugazi",
	"Maps & Atlases"
	];
	$("#appendedInputButton").autocomplete({
		source: availableTags
	});
});

function getData() {
	$(".ui-autocomplete").hide();
	$("header").slideUp();    
  $('#artist-name').html("");
	$('#notice').html("");
  $('#shows').html("");
	var origArtist = $('#search-artist input').val();
  var artist = toTitleCase(origArtist);
  $.ajax({
    url: "http://ws.audioscrobbler.com/2.0/?method=artist.getevents&artist="+artist+"&autocorrect=1&api_key=894064fca12d26335a68f014d98f4145&format=json"
  }).done(function(data){
		console.log(data);
		if (data.error){
			$("#notice").append(data.message+".");
		} else if (data.events.total === "0"){
			$("#notice").append("Sorry, no shows found at this time.");
		} else if (data.events["@attr"].total === "1"){	
			displaySingle(data.events.event, artist);
		} else if (data.events["@attr"].artist === artist) {
			displayData(data.events.event, artist);
		} else {
			$("#notice").append("Did you mean '"+data.events["@attr"].artist+
			"', ya dingus?<br /><button id='autocorrect-correct' class='btn'>Yup, show me "+
			data.events["@attr"].artist+
			".</button><button id='autocorrect-incorrect' class='btn'>Nope, I meant "+
			origArtist+".</button>");
			$("#autocorrect-correct").click(function(){
				displayData(data.events.event, data.events["@attr"].artist);
			});
			$("#autocorrect-incorrect").click(function(){
				$.ajax({
			    url: "http://ws.audioscrobbler.com/2.0/?method=artist.getevents&artist="+origArtist+"&autocorrect=0&api_key=894064fca12d26335a68f014d98f4145&format=json"
			  }).done(function(data){
					if (data.events.total === "0"){
						$("#notice").html("");
						$("#artist-name").html("");
						$("#notice").append("Sorry, no shows found at this time.");
					} else {
						displayData(data.events.event, origArtist);
					}
				});
			});
		}
  });
}

function displayData(data, artist) {
	$("#notice").html("");
	$("#artist-name").html("");
	$("#artist-name").append(artist);
	for (var i = 0; i < data.length; i++) {
    $('#shows').append('<li id='+i+'>'+data[i].startDate+" at "+data[i].venue.name+" in "+
		data[i].venue.location.city+ ", "+data[i].venue.location.country+" </li>");
  }
	$("#shows li:last").addClass("last");
	sortData(data);
}

function displaySingle(data, artist) {
	$("#notice").html("");
	$("#artist-name").html("");
	$("#artist-name").append(artist);
	console.log(data);
  $('#shows').append('<li id="1">'+data.startDate+" at "+data.venue.name+" in "+
	data.venue.location.city+ ", "+data.venue.location.country+" </li>");
	$("#shows li:last").addClass("last");
	sortData(data);
}

function toTitleCase(str){
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function sortData(data){
	for (var j = 0; j < data.length; j++) {
		if (data[j].cancelled === "1"){
			$('#'+j).append("<span class='cancelled'> Cancelled!</span>");
		}
	}
}









