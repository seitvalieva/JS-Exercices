const blocks = document.querySelectorAll(".block")
// console.log(blocks)

blocks.forEach((block) => {
    block.addEventListener("click", () => {
  
        const bgcolor = '#FF0000'
        block.style.backgroundColor = bgcolor;
        // block.innerHTML = bgcolor;
    
        block.classList.add('animation')
        
    })
    
  })
  
  const redBlocks = document.querySelectorAll('.animation')
//   console.log(redBlocks)
  redBlocks.forEach((redBlock) => {

    redBlock.addEventListener('click', () => {

        const color = 'initial';
        redBlock.style.backgroundColor = color;

        redBlock.classList.remove('animation');
    })
  })
  