/******************
  Mini-jeu de rôle
*******************/
'use strict'


var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force, weapon, hit) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.weapon = weapon;
        this.hit = hit;
        // L'inventaire est géré sous la forme d'une propriété de type objet
        this.inventaire = {
            or: 10,
            //cles: 1
        };
    },
    // Attaque un personnage cible
    attaquer: function (cible) {

        if (this.sante > 0) {
            var degats = this.force * this.hit / 10;
            var description = this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts </br>";
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
                cible.nom + " a encore " + cible.sante + " points de vie </br>";
            } else {
                cible.sante = 0;
                cible.nom + " est mort ! </br>";
            }
            return description;
        } else {
            var description = this.nom + " ne peut pas attaquer : pour cause de décès... </br>";
            return description;
        }

    }
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force, weapon, hit) {
    this.initPerso(nom, sante, force, weapon, hit);
    this.xp = 0; // L'expérience du joueur est toujours initialisée à 0
};

// Renvoie la description du joueur (Debut du combat)
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force, " + this.xp + " points d'expérience, " +
        this.inventaire.or + " pièces d'or et " + this.weapon + " comme arme </br>";
    return description;
};
// Renvoie la description du joueur (Pendant le combat)
Joueur.finCombat = function () {
    var description = this.nom + " a " + this.sante + " points de vies </br>";
    return description;
};
// Combat un adversaire (Après le combat)
Joueur.combattre = function (adversaire) {
    var description = this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        var description = this.nom + " a tué " + adversaire.nom + " et gagne " +
            adversaire.valeur + " points d'expérience, ainsi que " +
            adversaire.inventaire.or + " pièces d'or"
//            adversaire.inventaire.cles + " clé(s) </br>";
        this.xp += adversaire.valeur;
        // L'inventaire de la victime est transféré à son vainqueur
        this.inventaire.or += adversaire.inventaire.or;
        this.inventaire.cles += adversaire.inventaire.cles;
        return description;
    }
    return description;

};

var Adversaire = Object.create(Personnage);
// Initialise les propriétés de l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur, weapon, hit) {
    this.initPerso(nom, sante, force, weapon, hit);
    this.race = race;
    this.valeur = valeur;
    this.weapon = weapon;
    this.hit = hit;
};

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Asuna", 400, 30, "Breaker", 60);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Kirito", 600, 50, "Dark Repulsor", 80);

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 1000, 20, "Orc", 50, "Giant Axe", 60);



//Teste TimeOut
//setTimeout(function affichage(){
//    var presentation = "Bienvenue dans ce jeu d'aventure ! </br>Voici nos courageux héros : </br>" + joueur1.decrire() + joueur2.decrire();
//    var introMob = "Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom + "</br>";
//}, 5000);


// --- ok ---
var presentation = "<p class='dialogue'>Bienvenue dans ce jeu d'aventure ! </br>Voici nos courageux héros : </br></p>" + joueur1.decrire() + joueur2.decrire();


// --- ok ---
var introMob = "Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom + "</br>";

// --- ok ---
var attaque1 = monstre.attaquer(joueur1) + monstre.attaquer(joueur2);

// --- ok ---
var attaque2 = joueur1.combattre(monstre) + joueur2.combattre(monstre);

// --- ok ---
var attaque3 = monstre.attaquer(joueur1) + monstre.attaquer(joueur2);

// --- ok ---
var attaque4 = joueur1.combattre(monstre) + joueur2.combattre(monstre);

// --- ok ---
var attaque5 = monstre.attaquer(joueur1) + monstre.attaquer(joueur2);

// --- ok ---
var attaque6 = joueur1.combattre(monstre) + joueur2.combattre(monstre);

// --- ok ---
var terminus = joueur1.finCombat() + joueur2.finCombat();

var tab = [presentation, introMob, attaque1, attaque2, attaque3, attaque4, attaque5, attaque6, terminus];



//----- to do ==> RandomHit (player, monster)-----------------
// var randomHit = Joueur[Math.floor(Joueur * Math.random())];

//monstre.attaquer(joueur1);
//monstre.attaquer(joueur2);
//
//joueur1.combattre(monstre);
//joueur2.combattre(monstre);
//
//joueur1.finCombat();
//joueur2.finCombat();



//Visibilité du texte (affiché)
var showText = document.querySelector('.dialogue');
function show (){
        var test = showText.innerHTML = presentation;

    
    // showText.classList.add("elementToAnimate");
    
    showText.style.visibility = "visible";
    
    return test;

}

//Visibilité du texte (caché par défaut)
var resetText = document.querySelector('.dialogue');
function reset(){
    resetText.innerHTML = presentation;
    
    counter = 1;
    //    resetText.classList.add("elementToAnimate");
    resetText.style.visibility = "hidden";
}



var counter = 1;

// test affichage autre variable
function intro (){
    
//    var test = showText.innerHTML = tab;
    
        console.log(tab);
        switch(counter) {
            case 0:
                showText.innerHTML = tab[counter++];
                break;
            case 1:
                showText.innerHTML = tab[counter++];
                break;
            case 2:
                showText.innerHTML = tab[counter++];
                break;
            case 3:
                showText.innerHTML = tab[counter++];
                break;
            case 4:
                showText.innerHTML = tab[counter++];
                break;
            case 5:
                showText.innerHTML = tab[counter++];
                break;
            case 6:
                showText.innerHTML = tab[counter++];
                break;
            case 7:
                showText.innerHTML = tab[counter++];
                break;
            case 8:
                showText.innerHTML = tab[counter++];
                break;
            default:
                break;
        }
    
    
    showText.style.visibility = "visible";
    
}

// reinitialisation
function retour (){
    showText.innerHTML = tab[--counter];
    showText.style.visibility = "visible";
}

// -------------  TESTE  ---------------------

//// TESTE PROTOTYPE 
// ---- INFRUCTUEUX ------
//// Ecriture de phrase lettre par lettre
//var chaine = presentation; 
//var nb_car = chaine.length; 
//var tableau = chaine.split("");
//texte = new Array;
//var txt = '';
//var nb_msg = nb_car - 1;
//for (i=0; i<nb_car; i++) {
//    texte[i] = txt+tableau[i];
//    var txt = texte[i];
//}
//
//actual_texte = 0;
//function changeMessage()
//{
//    document.querySelector(".textDialogue").innerHTML = texte[actual_texte];
//    actual_texte++;
//    if(actual_texte >= texte.length)
//        actual_texte = nb_msg;
//}
//if(document.querySelector)
//
//    setInterval("changeMessage()",200) /* la vitesse de defilement (plus on a une valeur                                               faible plus texte s'affiche rapidement) */