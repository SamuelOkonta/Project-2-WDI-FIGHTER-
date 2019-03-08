const mongoose = require("./connection.js");
const Character = require("../models/Character.js");


const Bison = new Character({
    name: "Bison",
    category: "Pressure",
    description: " He is a self-imposed dictator and megalomaniac seeking world domination. ",
    imgLink: "https://www.fightersgeneration.com/nz9/game/sfv/art/mbison-sfv-altcostume-concept1.png",
    
});

const Vega = new Character({
    name: "Vega",
    category: "All-Around",
    description: "He is a claw-wielding, narcissistic, Spanish ninja, obsessed with beauty and personal bodyguard to M. Bison.",
    imgLink: "http://www.fightersgeneration.com/nz9/game/sfv/art/2/vega-sfv-alt-costume-oct2016.jpg",
    
});

const Sagat = new Character({
    name: "Sagat",
    category: "Zoner",
    description: " Battling the Satsui No Hado, Sagat seeks to purge it from himself in a similar path as his rival, Ryu.",
    imgLink: "http://www.fightersgeneration.com/nz7/game/sfv/concept/sfv-concept-art-sagat.jpg",
    
});

const Balrog = new Character({
    name: "Balrog",
    category: "Rushdown",
    description: "He is a greedy American boxer and personal bodyguard to M. Bison.",
    imgLink: "http://www.fightersgeneration.com/nz8/game/sfv/art/4/balrog-sfv-suit-alt-costume-artwork.jpg",
   
});

Character.remove({})
    .then(() => Character.create([Bison, Vega, Sagat, Balrog]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));