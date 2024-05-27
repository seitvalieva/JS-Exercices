const icons = document.querySelectorAll('.icon')

// console.log(icons)
const container = document.querySelector('.container')

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
  
        icon.classList.toggle('animation')

        const iconBgcolor = getComputedStyle(icon).backgroundColor
        // console.log(bgcolor)
        container.style.backgroundColor = iconBgcolor;

        
    })
    
  })


