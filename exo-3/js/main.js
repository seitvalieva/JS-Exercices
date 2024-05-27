const blocks = document.querySelectorAll(".block")
// console.log(blocks)

blocks.forEach((block) => {
    block.addEventListener("click", () => {
  
        // block.innerHTML = bgcolor;
    
        block.classList.toggle('animation')
        
    })
    
  })
  
  