// Exo 1
// En cliquant sur la forme, une boîte de dialogue (alerte) affiche les informations sur 
/*
    - Couleur du texte et couleur de fond
    - Hauteur et largeur du carré
    - Nom de la classe du carré
    - Police et taille du text
    */

const block = document.querySelector(".block") // select div with class = "block"
const text = document.querySelector(".content") // select element(h1) with class = "content"

let blockBgColor = window.getComputedStyle(block).backgroundColor // get the value of block's bg color and assign it to blockBgColor
let textColor = window.getComputedStyle(text).color

let blockHeight = window.getComputedStyle(block).height
let blockWidth = window.getComputedStyle(block).width

let textSize = window.getComputedStyle(text).fontSize
let textFont = window.getComputedStyle(text).fontFamily

let blockClassName = block.classList
let textClassName = text.classList


// console.log("Block bg color is " + blockBgColor) //tests
// console.log("Header color is " + textColor)
// console.log(textClassName)

// function that displays info when clicking on the block

block.addEventListener('click', function(){
    
    alert("Class: " + blockClassName + "\n -Block bg color: " + blockBgColor + ";\n -Text color: " + textColor + "\n -Block height: " + blockHeight + 
        " and width: " + blockWidth + "\n -Header font-size: " + textSize + " and font-family: " + textFont)

}) 