const blocks = document.querySelectorAll(".block")
console.log(blocks)
const result = document.querySelector(".result")

// console.log(block)
blocks.forEach((block) => {
  block.addEventListener("click", () => {

    const bgcolor = getComputedStyle(block).backgroundColor
    result.style.backgroundColor = bgcolor;
    result.innerHTML = bgcolor;
  })
})

