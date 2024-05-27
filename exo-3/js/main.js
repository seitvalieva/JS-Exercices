const blocks = document.querySelectorAll(".block")
// console.log(blocks)

blocks.forEach((block) => {
    block.addEventListener("click", () => {
  
      const bgcolor = '#FF0000'

      block.style.backgroundColor = bgcolor;
      block.innerHTML = bgcolor;
    
    })
    
  })