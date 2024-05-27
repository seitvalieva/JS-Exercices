const icons = document.querySelectorAll('.icon')

// console.log(icons)
const container = document.querySelector('.container')

const iconName = document.querySelector('.iconName')

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
  
        icon.classList.toggle('animation')

        const iconBgcolor = getComputedStyle(icon).backgroundColor
        // console.log(bgcolor)
        container.style.backgroundColor = iconBgcolor;

        
        const name = icon.id
        // console.log(name)
        iconName.innerHTML = name
    })
    
  })


