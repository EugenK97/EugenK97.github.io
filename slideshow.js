const indikatoren = document.getElementsByClassName("indikator");
indikatoren[0].classList.add("aktiv");

const slides = document.getElementsByClassName("slide");
slides[0].classList.add("aktiv");

var aktuellerIndex = 0;

// Timer starten
var zeitZumUmschalten = 5 * 1000 // 5 Sekunden
var timer = setInterval(function(){
    umschalten(1)
}, zeitZumUmschalten)

function umschalten(anzahl) {

    // Timer löschen
    clearInterval(timer)
    // Timer neu setzen
    timer = setInterval(function(){
        umschalten(1)
    }, zeitZumUmschalten)

    var neuerIndex = aktuellerIndex + anzahl;
    if(neuerIndex < 0) {
        neuerIndex = slides.length -1;
    }
    if(neuerIndex > slides.length -1) {
        neuerIndex = 0;
    }
    springeZuBild(neuerIndex);
}

function springeZuBild(neuerIndex) {
    indikatoren[aktuellerIndex].classList.remove("aktiv");
    slides[aktuellerIndex].classList.remove("aktiv");

    indikatoren[neuerIndex].classList.add("aktiv");
    slides[neuerIndex].classList.add("aktiv");

    aktuellerIndex = neuerIndex;
}