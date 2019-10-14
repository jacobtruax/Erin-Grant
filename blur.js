// const sections = document.querySelectorAll("section")
// const divTag = document.querySelector("div.Loop")
// const mainTag = document.querySelector("main")
//
// const addMovement = function() {
//   const topViewport = window.pageYOffset
//   const midViewport = topViewport + (window.innerHeight / 2)
//
//   sections.forEach(section => {
//     const topSection = section.offsetTop
//     const midSection = topSection + (section.offsetHeight / 2)
//
//     const distanceToSection = (midViewport - midSection)
//     console.log(distanceToSection)
//
//     const image = section.querySelector("img")
//
//     image.style.transform = `rotate(${distanceToSection}deg)`
//   })
// }
//
// addMovement()
//
// document.addEventListener("scroll", function() {
//   addMovement()
// })
//
// window.addEventListener("resize", function() {
//   addMovement()
// })
