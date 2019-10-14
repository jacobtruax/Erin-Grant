const sections = document.querySelectorAll("section")
const divTag = document.querySelector("div.Loop")
const mainTag = document.querySelector("main")

var doc = window.document,
  clones = divTag.querySelectorAll('.is-clone'),
  disableScroll = false,
  scrollHeight = 0,
  scrollPos = 0,
  clonesHeight = 0,
  i = 0;

const addMovement = function() {
  const topViewport = divTag.scrollTop
  const midViewport = topViewport + (divTag.offsetHeight / 2)

  sections.forEach(section => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)

    const distanceToSection = midViewport - midSection
    // const skewToSection = (midViewport - midSection) / 75
    // const skewToSection2 = (midViewport - midSection) / 100

    const images = section.querySelectorAll("img")
    const image2 = section.querySelector(".blur")

    let rotation = distanceToSection / 100
    let skew = -1 * distanceToSection / 50
    let opacity = distanceToSection / 800
    let top = (distanceToSection / 20) + 50
    let left = (distanceToSection / 10) + 375
    // let contentDist = -1 * distanceToSection / 2

    images.forEach((image, index) => {
      if(index % 2 == 1){
        image.style.opacity = `${opacity}`
        image.style.transform = `rotate(${rotation}deg)`
        image.style.transform = `skewX(${skew}deg)`
        image.style.bottom = `${top}px`
        image.style.left = `${left}px`
      }

      if(index % 2 == 0){
        image.style.transform = `rotate(${rotation}deg)`
        image.style.transform = `skewX(${skew}deg)`
      }
    })

    // image2.style.transform += `skewX(${skewToSection2}deg)`


    // image.style.filter += `blur(${distanceToSection}px)`
    // image.style.transform = `skewY(${-1 * skewToSection}deg)`
    // image.style.top = `${contentDist}px`
  })
}

addMovement()

function getScrollPos () {
  return (divTag.offsetTop || divTag.scrollTop) - (divTag.clientTop || 0);
}

function setScrollPos (pos) {
  divTag.scrollTop = pos;
}

function getClonesHeight () {
  clonesHeight = 0;

  for (i = 0; i < clones.length; i += 1) {
    clonesHeight = clonesHeight + clones[i].offsetHeight;
  }

  return clonesHeight;
}

function reCalc () {
  scrollPos = getScrollPos();
  scrollHeight = divTag.scrollHeight;
  clonesHeight = getClonesHeight();

  if (scrollPos <= 0) {
    setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
  }
}

function scrollUpdate () {
  if (!disableScroll) {
    scrollPos = getScrollPos();

    if (clonesHeight + scrollPos >= scrollHeight) {
      // Scroll to the top when you’ve reached the bottom
      setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
      disableScroll = true;
      console.log("hello")
    } else if (scrollPos <= 0) {
      // Scroll to the bottom when you reach the top
      setScrollPos(scrollHeight - clonesHeight);
      disableScroll = true;
      console.log("helloUp")
    }
  }

  if (disableScroll) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      disableScroll = false;
    }, 40);
  }
}

function init () {
  reCalc();

  divTag.addEventListener('scroll', function () {
    window.requestAnimationFrame(scrollUpdate);
    addMovement()
  }, false);

  window.addEventListener('resize', function () {
    window.requestAnimationFrame(reCalc);
    addMovement()
  }, false);
}

if (document.readyState !== 'loading') {
  init()
} else {
  doc.addEventListener('DOMContentLoaded', init, false)
}
