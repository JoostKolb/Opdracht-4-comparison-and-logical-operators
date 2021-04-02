// Deel 1: 50% korting
const age = 24;

if (age >= 18 && age <= 25) {

    console.log("Je bent oud genoeg en krijgt 50% korting");

} else {

    console.log("Je bent te jong, je moet helaas buiten blijven");

}

// Deel 2: Ludieke actie!
const name = "Sarah";

if (name == "Sarah" || name == "Bram") {

    console.log("Gefeliciteerd, je krijgt van ons een gratis biertje vanwege je naam");

}

// Deel 3: Jubileum korting
const totalAmount = 120;

if (totalAmount > 25 && totalAmount <= 50) {

    console.log("Je krijgt gratis (vega)bitterballen");

} else if (totalAmount > 50 && totalAmount <= 100) {

    console.log("Je krijgt een gratis portie nacho's!");

} else if (totalAmount > 100) {

    console.log("Je krijgt een gratis fles champagne");

} else {

    console.log("Je krijgt helaas niets");

}