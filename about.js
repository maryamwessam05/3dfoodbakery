       let burger = document.querySelector(".burger");
        let menu = document.querySelector(".burgermenu");
        let closeX = document.getElementById("x");
burger.onclick = () => {
    menu.classList.add("active");
  };
  
  closeX.onclick = () => {
    menu.classList.remove("active");
  };








let about2 = document.querySelector(".about2");
let abouttxt2 = document.querySelector(".about2_txt");
let about_img = document.querySelector(".about_img");


about2.onmouseenter = function () {

            abouttxt2.style.opacity = "1";
            abouttxt2.style.transform = "translateX(0)";
            about_img.style.opacity = "1";
            about_img.style.transform = "translateX(0)";

        }

document.querySelectorAll(".Hotspot").forEach(btn => {
  btn.addEventListener("click", function () {
    this.querySelector(".HotspotAnnotation").style.opacity = "1";
  });
});


const earth = document.querySelector(".earth3d");

// Your orbit limits
const minAz = 103;
const maxAz = 148;

let currentAz = 103;
let currentPolar = 72.83;
let currentRadius = 7.377;

function rotateEarth() {
    currentAz += 0.1; // rotation speed

    // loop the rotation only within limits
    if (currentAz > maxAz) currentAz = minAz;

    earth.cameraOrbit = `${currentAz}deg ${currentPolar}deg ${currentRadius}m`;

    requestAnimationFrame(rotateEarth);
}

// Disable built-in auto-rotate for the earth only
earth.autoRotate = false;

// Start rotation when model is ready
earth.addEventListener("load", () => {
    rotateEarth();
});

document.querySelectorAll(".Hotspot2, .Hotspot3, .Hotspot4").forEach(btn => {
  btn.addEventListener("click", function () {
    // Show annotation (2 or 3)
    const ann = this.querySelector(".HotspotAnnotation2, .HotspotAnnotation3");
    if (ann) ann.style.opacity = "1";

    // Show line (linegreen or linegreen2)
    const line = this.querySelector(".linegreen, .linegreen2");
    if (line) line.style.opacity = "1";
  });
});



const donutModel = document.getElementById("donutModel");

function adjustModel() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    // Mobile view
    donutModel.setAttribute("field-of-view", "20deg"); // wider view
    donutModel.setAttribute("camera-orbit", "135deg 70deg 0.7m"); // move camera back
  } else {
    // Desktop / larger screens
    donutModel.setAttribute("field-of-view", "40deg");
    donutModel.setAttribute("camera-orbit", "135.1deg 76.38deg 0.4502m");
  }
}

// Run on page load
adjustModel();

// Update on resize
window.addEventListener("resize", adjustModel);
