// const flightPath = {
//     curviness:0,
//     autoRotate: true,
//     values: [
//         {x: "-50%", yPercent: "-50%"}
        
//     ]
// };

// const tween = new TimelineLite();

// tween.add(
//     TweenLite.to(".circle-custom", 5, {
//         bezier: flightPath,
//         ease: Power1.easeInOut
//     })
// )
var animateAbout = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();
TweenLite.set(".circle-custom", {transformStyle:"preserve-3d"});
animateAbout
.from(".circle-custom", 1, {top: "0%", right:"0",  ease: Power2.easeInOut})
.to(".circle-custom", 1, {top: "88%", right: "95%", rotation: 90, ease: Power1.easeInOut})
.to(".circle-custom", 1, {top: "0%", right: "95%", rotation: 180, ease: Power1.easeInOut})
.to(".circle-custom", 1, {top: "88%", right: "0%", rotation: 270, ease: Power1.easeInOut})
.to(".circle-custom", 1, {top: "0%", right: "0%", rotation: 360, ease: Power1.easeInOut});

const scene =  new ScrollMagic.Scene({
    triggerElement: ".bg",
    triggerHook: 0.02,
    reverse:true,
    duration: "300%"
})
.setPin(".bg").setTween(animateAbout).addTo(controller);

function updatePercentage() {
    animateAbout.progress();
    console.log(animateAbout.progress());
}
