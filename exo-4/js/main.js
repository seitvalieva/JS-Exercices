const icons = document.querySelectorAll('.icon')

// console.log(icons)

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
  
        icon.classList.toggle('animation')
        
    })
    
  })


