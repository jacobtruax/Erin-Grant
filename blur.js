const sections = document.querySelectorAll("section")
const mainTag = document.querySelector("main")
const divTag = document.querySelector("div.Loop")

const addMovement = function() {
  const topViewport = divTag.offsetTop
  const midViewport = topViewport + (divTag.offsetHeight / 2)

  sections.forEach(section => {
    const topSection = section.offsetTop

    const midSection = topSection + (section.offsetHeight / 2)
    // console.log(midSection)

    const distanceToSection = midViewport - midSection
    console.log(distanceToSection)

    const image = section.querySelector("img")

    image.style.transform = `rotate(${distanceToSection}deg)`
  })
}

addMovement()

mainTag.addEventListener("scroll", function() {
  addMovement()
})

window.addEventListener("resize", function() {
  addMovement()
})
