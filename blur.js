const sections = document.querySelectorAll("section")
const mainTag = document.querySelector("main")

const addMovement = function() {
  const topViewport = mainTag.offsetTop
  const midViewport = topViewport + (mainTag.offsetHeight / 2)

  sections.forEach(section => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)

    const distanceToSection = midViewport - midSection

    const image = section.querySelector("img")

    image.style.transform = `rotate(${distanceToSection}deg)`
  })
}

addMovement()

document.addEventListener("scroll", function() {
  addMovement()
})

window.addEventListener("resize", function() {
  addMovement()
})
