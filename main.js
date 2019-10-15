const sections = document.querySelectorAll("section")
const divTag = document.querySelector("div.Loop")
const mainTag = document.querySelector("main")
const realTag = document.getElementById("real")
const reflTag = document.getElementById("refl")

var doc = window.document,
  clones = divTag.querySelectorAll('.is-clone'),
  disableScroll = false,
  scrollHeight = 0,
  scrollPos = 0,
  clonesHeight = 0,
  i = 0;


// Info Hover ==================
const infoTag = document.querySelector("aside")
const iTag = document.getElementById("info")
const circleTag = document.getElementById("circle")

infoTag.addEventListener("mouseover", function() {
  infoTag.style.cursor = "pointer"
  iTag.style.transform = "scaleX(-1)"
  circleTag.style.transform = "scaleX(-1)"
})

infoTag.addEventListener("mouseout", function() {
  infoTag.style.cursor = "default"
  iTag.style.transform = "scaleX(1)"
  circleTag.style.transform = "scaleX(1)"
})
//
// var scrollDirection = 1, pageScroll;
// pageScroll = function() {
//     divTag.scrollBy(0,scrollDirection); // horizontal and vertical scroll increments
//     scrolldelay = setTimeout(pageScroll,1); // scrolls every 100 milliseconds
// }
// pageScroll();




// Images ==============================
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
    const divs = section.querySelectorAll("div")

    let rotation = distanceToSection / 100
    let negRotation = -1 * distanceToSection / 100
    let skew = -1 * distanceToSection / 60
    let smallSkew = -1 * distanceToSection / 100
    let negSkew = distanceToSection / 80
    let opacity = distanceToSection / 500
    let negOpacity = -1 * distanceToSection / 600
    let top = -1 * (distanceToSection / 20) + 120
    let left = (distanceToSection / 20) + 395
    // let contentDist = -1 * distanceToSection / 2

    divs.forEach((div, index) => {
      div.style.transform = `rotateX(${rotation}deg) rotateY(${negRotation}deg) rotateZ(${rotation}deg) translateZ(15px) skewX(${smallSkew}deg)`
      div.style.cursor = "pointer"
    })

    divs.forEach(div => {
      div.addEventListener("mouseover", function() {
        div.classList.add("open")
      })
    })

    divs.forEach(div => {
      div.addEventListener("mouseout", function() {
        div.classList.remove("open")
      })
    })

    images.forEach((image, index, array) => {
      image.addEventListener("mouseover", function() {
        image.style.cursor = "pointer"
        // image.classList.add("blurImage")
      })



      if(index === array.length - 1){
        image.style.opacity = `${opacity}`
        image.style.transform = `rotateX(${rotation}deg) rotateY(${negRotation}deg) rotateZ(${rotation}deg) skewX(${negSkew}deg)`
        // image.style.transform = `rotate(${rotation}deg)`
        // image.style.transform = `skewX(${skew}deg)`
        // image.style.bottom = `${top}px`
        // image.style.left = `${left}px`
      }

      if(index === array.length - 2){
        image.style.opacity = `${negOpacity}`
        image.style.transform = `rotateX(${rotation}deg) rotateY(${negRotation}deg) rotateZ(${rotation}deg) skewX(${skew}deg)`
        // image.style.transform = `skewX(${skew}deg)`
        // image.style.bottom = `${top}px`
        // image.style.left = `${left}px`
      }

      if(index === array.length - 3){
        image.style.transform = `rotateX(${rotation}deg) rotateY(${negRotation}deg) rotateZ(${rotation}deg)
        skewX(${smallSkew}deg)`
        // image.style.transform = `skewX(${skew}deg)`
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

// function scrollOne(){
//   var clone = getClonesHeight()
//   divTag.scrollTop = clone - (clone / 2)
// }
//
// scrollOne();

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


// Scroll on page looad =================
function scrollOne(){
  var clone = getClonesHeight()
  const clone2 = clone - (clone / 2)
  scrollTo(divTag, clone2, 1250);
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

scrollOne();
