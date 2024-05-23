//atteindre la liste (ul) de la page
//et pointer le premier élément ul
let list = document.querySelector("ul");

//récupérer tous les éléments enfants de CETTE ul

let listElements = list.querySelectorAll("li");

console.log("la liste", list);
console.log("Les elements", listElements);

listElements.forEach(function(element){
    console.dir(element)
    element.style.color = "red"
})