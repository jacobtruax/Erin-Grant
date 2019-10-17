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
const infoTag = document.querySelector("aside.info")
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

var tlInfo = new TimelineMax({paused: true, reversed:true});

TweenMax.set('#circle2',{autoAlpha:0, transformOrigin:"top right"})
TweenMax.set('.bio', {visibility:"hidden"})
TweenMax.set('#name',{autoAlpha:0})
TweenMax.set('#director',{autoAlpha:0})
TweenMax.set('#mail',{autoAlpha:0})
TweenMax.set('#number',{autoAlpha:0})

tlInfo.timeScale(1)
tlInfo.to("#circle2", .1, {autoAlpha:1, ease:Power2.easeOut})
.to("#circle2", 1.4, {borderRadius:'0%', top: 0, right: 0, width:"100vw", height: "100vh", ease:Power4.easeOut})
.to(".bio", .1, {visibility: "visible"}, 0)
.fromTo("#name", 1, {y:100}, {autoAlpha:1, y: 0, ease:Power1.easeOut}, 0.5)
.fromTo("#director", 1, {y:100}, {autoAlpha:1, y: 0, ease:Power1.easeOut}, 0.7)
.fromTo("#mail", 1, {y:100}, {autoAlpha:1, y: 0, ease:Power1.easeOut}, 0.9)
.fromTo("#number", 1, {y:100}, {autoAlpha:1, y: 0, ease:Power1.easeOut}, 1.1)

infoTag.addEventListener("click", function(event) {
  event.preventDefault();
  if(iTag.innerHTML == "i"){
    iTag.innerHTML = "X"
  }else{
    iTag.innerHTML = "i"
  }

  tlInfo.reversed() ? tlInfo.play() : tlInfo.reverse();
})

// Video ==============================
const closeBlock = document.querySelector("aside.closeBlock")
const closeTag = document.getElementById("closeTag")

closeBlock.addEventListener("mouseover", function() {
  closeBlock.style.cursor = "pointer"
  closeTag.style.transform = "scale(1.1,1)"
})

closeBlock.addEventListener("mouseout", function() {
  closeBlock.style.cursor = "default"
  closeTag.style.transform = "scale(1,1)"
})

closeBlock.addEventListener("click", function() {
  tlVideo.reverse();
})

TweenMax.set('#closeTag',{autoAlpha:0})
TweenMax.set('#vidTitle',{autoAlpha:0})
TweenMax.set('#vidName',{autoAlpha:0})
TweenMax.set('#vidCred',{autoAlpha:0})
TweenMax.set('#vidDesc',{autoAlpha:0})
TweenMax.set('#videoSRC',{autoAlpha:0, visibility: "hidden"})
TweenMax.set('#videoPage',{visibility: "hidden"})

var tlVideo = new TimelineMax({paused: true, reversed: true});
tlVideo.timeScale(1)

tlVideo.to("#block", 1.7, {height: "100vh", ease:Power4.easeOut})
.to("#videoPage", .1, {visibility:"visible"}, 0)
.fromTo("#closeTag", .7, {}, {autoAlpha:1, y: 0, ease:Power1.easeOut}, .5)
.fromTo("#vidTitle", .4, {y:10}, {autoAlpha:1, y: 0, ease:Power1.easeOut}, 0.3)
.fromTo("#vidName", .4, {y:10}, {autoAlpha:1, y: 0, ease:Power1.easeOut}, 0.5)
.fromTo("#vidCred", .4, {y:10}, {autoAlpha:1, y: 0, ease:Power1.easeOut}, 0.7)
.fromTo("#vidDesc", .4, {y:10}, {autoAlpha:1, y: 0, ease:Power1.easeOut}, .9)
.fromTo("#videoSRC", .4, {y:0}, {visibility:"visible", autoAlpha:1, y: 0, ease:Power0.easeNone}, 1)






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
    let skew = -1 * distanceToSection / 40
    let smallSkew = -1 * distanceToSection / 100
    let negSkew = distanceToSection / 80
    let opacity = 0.5 + distanceToSection / 500
    let opacity3 = 1.6 - distanceToSection / 500
    let negOpacity = -1 * distanceToSection / 300
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

    // var tlDiv = new TimelineMax({paused: true, reversed:true});
    // tlDiv.to(divs, 2, {top: 0, right: 0, width:"100vw", height: "100vh", ease:Power4.easeOut})


    divs.forEach(div => {
      div.addEventListener("click", function() {
        // tlVideo.play()
        console.log("click")
          tlVideo.play()
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
        image.style.transform = `rotateX(${rotation}deg) rotateY(${negRotation}deg) rotateZ(${rotation}deg) skewX(${negSkew}deg)`
        // image.style.transform = `skewX(${skew}deg)`
        // image.style.bottom = `${top}px`
        // image.style.left = `${left}px`
      }

      if(index === array.length - 3){
        image.style.opacity = `${opacity3}`
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
const scrollOne = function() {
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

// Load animation ==========================
var tlLoad = new TimelineMax({delay: .25, onStart:scrollOne})

TweenMax.set("#real", {autoAlpha: 0})

tlLoad.fromTo("#real", 2.2, {y:10}, {autoAlpha:1, y: -30, ease:Power4.easeOut})
.fromTo("#infoBlock", 1, {x:100}, {autoAlpha:1, x: 0, ease:Power4.easeOut}, 1)
//
//
//
//
//
//
//
