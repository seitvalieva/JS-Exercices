console.log("Hello JS!");

const a = 7;
const b = 3;

x = a%b;
console.log("Module de 7 % 3 vaut "+x);

// ---------------L’opérateur ternaire----------------------//
const age = 26;
const isAdult = age >= 21 ? "Yes" : "No";
console.log(isAdult); //Yes

// ---------------L’ordre des conditions----------------------//

if(age>=18) {
    console.log("La personne est majeure");
}else {
    console.log("La personne est mineure");
}

const s="*";
console.log(s.repeat(20));

if(age >= 18){
    console.log("La personne est plus 18 ans");
} else if(age >= 21){
    console.log("La personne est plus 21 ans");
}else{
    console.log("La personne est mineure");

}
console.log(s.repeat(20));

// ---------------Le « switch/case »----------------------//

let action = "virement";

switch(action) {
    case "retrait":
        //instructions de retrait
        break;
    case "virement":
        //instructions de virement
        break;
    case "clotureCompte":
        //instructions de cloture de compte
        break;
    default:
        
        break;
}
console.log(s.repeat(20));

let numberToGuess = 7;
let operation ="foisDeuxPlusTrois";

switch(operation){
    case "plusUn":
        numberToGuess++;
        break;
    case "foisDeuxPlusTrois":
        numberToGuess *=2;
        // break;
    case "plusTrois":
        numberToGuess +=3;
        break;
    case "foisZero":
    default:
        numberToGuess = 0; 
        break;

}
console.log(numberToGuess); //17 ou 14

// ---------------Le boucle « for »----------------------//

//  for "de a à b inclus"

for (let i=1; i<=10; i++){
    console.log(`3 * ${i} = ${3 * i}`);     // resultat: la table de multiplication des 3
}


// « for » « n fois »
for (let i = 0; i < 3; i++){
    console.log("Je serai un bon developpeur"); //resultat: (3)Je serai un bon developpeur
}


//« for » « de a à b inclus avec un pas différent de 1 »
for (let i = 3; i<=10; i+=3){

    console.log(`${i} est inferieur ou egal a 10 et est divisible par 3`);
}

//« for » « inversé » (on décrémente)
for( let i = 10; i > 0; i--){

    console.log(`${i}...`);
}
console.log("Bonne annee!...");

//-----------La boucle « while »-------------//

let kAge = 12;
while(kAge < 18) {
    console.log(`J'ai maintenant ${kAge} ans`);
    kAge++;
}
console.log(`J'ai finalement ${kAge} ans`);

//---------Les fonctions--------------------//

//function  with 3 arguments 

function functionName(arg1, arg2, arg3){
    const result = arg1 * arg2 * arg3;
    return result;
}
const valeurRenvoyee = functionName(1, 2, 3);

console.log(valeurRenvoyee);

// multiply * 3

function getNombreFoisTrois(nombre){
    return nombre * 3;
   
}
const cinqFoisTrois = getNombreFoisTrois(5);
console.log(cinqFoisTrois);
console.log("cinqFoisTrois = " + cinqFoisTrois);

//Une fonction sans résultat retourné
function logPhraseAvecPointExclamation(phrase){
    console.log(`${phrase} !`);
} 
logPhraseAvecPointExclamation("Je serai un bon develpopeur"); //Je serai un bon develpopeur !

//Une fonction sans argument

function getApproximatePi(){
    return 3.14;
}
console.log(`360 deg = 2*pi ~= ${2 * getApproximatePi()} rad`); //  360 deg = 2*pi ~= 6.28 rad

//Une fonction qui appelle d'autres fonctions

function getResultatAddition2Nombres(nombre1, nombre2){
    return nombre1 + nombre2;
}
function getResultatMultiplication2Nombres(nombre1, nombre2){
    return nombre1 * nombre2;

}
function getResultCalculEntre2Nombres(nombre1, operation, nombre2){
    switch(operation) {
        case "addition":
            return getResultatAddition2Nombres(nombre1, nombre2);
        case "soustraction":
            return getResultatAddition2Nombres(nombre1, -nombre2);
        
        case "multiplication":
            return getResultatMultiplication2Nombres(nombre1, nombre2);
        case "division":
            return getResultatMultiplication2Nombres(nombre1, 1/nombre2);
    
        default:
            console.log(`Operation "${operation}" non geree`);
            return null;
    }
}
console.log(`7+2=${getResultCalculEntre2Nombres(7, "addition", 2)}`);
console.log(`6-1=${getResultCalculEntre2Nombres(6, "soustraction", 1)}`);
console.log(`3 * 4 = ${getResultCalculEntre2Nombres(3, "multiplication", 4)}`);

console.log(`10/2 = ${getResultCalculEntre2Nombres(10, "division", 2)}`);
console.log(`2**3 = ${getResultCalculEntre2Nombres(2, "puissance", 3)}`);


//---------------Les tableaux indexés------------------//

const tableauVide = [];

//Créer un tableau indexé qui contient des valeurs fournies (ici 7 nombres) et l’affecter à une variable :
const tabNums = [11, 22, 33, 44, 55, 66, 77];

//Ajouter un élément à la fin du tableau (en dernière position) :
tableauVide.push(2);
tableauVide.push(3);
tableauVide.push(7);
console.log("tableau vide = ", tableauVide);

//Récupérer un élément par son index
console.log("tableauVide[1] = ", tableauVide[1]);

//modifier la valeur d'un element à un certain index :
tableauVide[2] = "abc";
console.log(tableauVide[2]);

// Boucler sur un tableau et appliquer une logique pour chaque élément :

for (let i = 0; i < tableauVide.length; i++){

    //recuperation de l'element a l'index i
    const elementTableauVide = tableauVide[i];

    //log de cet element
    console.log(elementTableauVide);
    console.log("tableauVide[" + i + "] =", elementTableauVide);
}

 // ------------ MéTHODES utiles sur les tableaux indexés (classe Array) ------------//
/*
    1. .push(newElement) : ajouter un élément à la fin du tableau */

    tableauVide.push(2);

/* 
    2. .join(separateur) : transforme un tableau en string, 
        en concaténant tous les éléments dans l’ordre et en ajoutant le séparateur entre chaque élément*/

    console.log(`tabNums.join("_|_") = ${tabNums.join("_|_")}`);  // tabNums.join("_|_") = 11_|_22_|_33_|_44_|_55_|_66

/*
    3. .includes(elementRecherche) : renvoie true ou false, si l'élément est présent ou non dans le tableau*/

    console.log(`l'element ${77} ${tabNums.includes(77) ? "est" : "n'est pas" } present dans le tableau [${tabNums.join(" , ")}]`);

    // resultat: l'element 77 est present dans le tableau [11 , 22 , 33 , 44 , 55 , 66 , 77]

/*    4. .indexOf(elementRecherche) : renvoie l'index de l'élément recherché */

    const indexOf77 = tabNums.indexOf(77);
    if (indexOf77 != -1) {
        console.log(`L'element ${77} a l'index ${indexOf77} dans  le tableau [${tabNums.join(", ")}]`);
    } else {

    }

/*     5. .slice(indexDebutEltInclus, indexFinEltExclu) : renvoie une copie (sans impacter le tableau initial) d'un morceau du tableau */

const morceau = tabNums.slice(2, 4);
console.log(`morceau (tabNums.slice(2, 4)) = [${morceau.join(", ")}]`); // morceau (tabNums.slice(2, 4)) = [33, 44]

 //-----------------Les tableaux associatifs-----------//

 let tabAssVide = {};                   // Création d’un tableau associatif vide

 tabAssVide.prenom = "Bryan";           // Ajout d’une paire clef/valeur
 tabAssVide.age = 27;

 console.log("tabAssVide = ", tabAssVide);

 console.log(`Je m'appelle  ${tabAssVide.prenom}`); // Accéder à une valeur

 tabAssVide.age = 28;                              // Modification d’une valeur


 
// Créer un tableau associatif contenant des paires clef/valeur fournies

let pikachu = {
    id: 25,
    name: "Pikachu",
    weightKg: 6.0,
    hpMax: 80,
    attacks: [
        {
            name: "vive-Attack",
            damages: 10,
        },
        {
            name: "Boule Elek",
            damages: 20,
        },
    ],
};
console.log(`pikachu = `, pikachu);

function listerAttacksPokemon(pokemon) {
    console.log(`${pokemon.name} possede ${pokemon.attacks.length} attacks: `);

    for(let i = 0; i < pokemon.attacks.length; i++){
        
        const attack = pokemon.attacks[i];      //recuperation du tableau associatif de l'attaque

        console.log(`\t"${attack.name}" (puissance ${attack.damages})`);
    }
}
listerAttacksPokemon(pikachu);


