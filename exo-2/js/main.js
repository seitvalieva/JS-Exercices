const addBlockBtn = document.querySelector(".btn")
addBlockBtn.addEventListener('click', addBlock)

const block = document.querySelector(".block")
// block.addEventListener('click', newColor())

const container = document.querySelector(".container")

function addBlock(){
    const newBlock = block.cloneNode(true)

    const newContent = newBlock.querySelector(".content")
    newContent.value = "Click again"

    container.appendChild(newBlock)

}


















//--------------Random color generator----------//
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }