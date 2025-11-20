

    let cakeContainer = document.querySelector(".cakecontainer");
    let pastryContainer = document.querySelector(".pastconatiner");
    let breadContainer = document.querySelector(".breadconatiner");
    let dessertContainer = document.querySelector(".dessertconatiner");

    let buttons = document.querySelectorAll(".choices .type");

    
    let hideAll = function () {
        cakeContainer.style.display = "none";
        pastryContainer.style.display = "none";
        breadContainer.style.display = "none";
        dessertContainer.style.display = "none";
    };


    buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {

        buttons.forEach(function (b) {
            b.classList.remove("selectedbox");
        });
 
    btn.classList.add("selectedbox");
   
    hideAll();

    let text = btn.innerText;

    if (text === "CAKES") {
        cakeContainer.style.display = "block";
        }
    else if (text === "PASTRIES") {
        pastryContainer.style.display = "block";
        }
    else if (text === "BREAD") {
        breadContainer.style.display = "block";
        }
    else if (text === "DESSERTS") {
        dessertContainer.style.display = "block";
        }
        });
    });

    hideAll();
    cakeContainer.style.display = "block";

let section2 = document.querySelector(".section2");
let half1 = document.querySelector(".half1");
let half2 = document.querySelector(".half2");


section2.onmouseenter = function () {

            half1.style.opacity = "1";
            half1.style.transform = "translateX(0)";
            half2.style.opacity = "1";
            half2.style.transform = "translateX(0)";
            

        }


let section3 = document.querySelector(".section3");
let sec3_img = document.querySelector(".sec3_img");
let sec3_txt = document.querySelector(".sec3_txt");


section3.onmouseenter = function () {

            sec3_img.style.opacity = "1";
            sec3_img.style.transform = "translateX(0)";
            sec3_txt.style.opacity = "1";
            sec3_txt.style.transform = "translateX(0)";

        }



        let time2015 = document.querySelector(".time2015");
        let img2015 = document.querySelector(".img2015");
        let txt2015 = document.querySelector(".txt2015");
        let time2018 = document.querySelector(".time2018");
        let img2018 = document.querySelector(".img2018");
        let txt2018 = document.querySelector(".txt2018");
        let time2025 = document.querySelector(".time2025");
        let img2025 = document.querySelector(".img2025");
        let txt2025 = document.querySelector(".txt2025");


        time2015.onmouseenter = function () {

            img2015.style.opacity = "1";
            img2015.style.transform = "translateX(0)";
            txt2015.style.opacity = "1";
            txt2015.style.transform = "translateX(0)";

        }

        time2018.onmouseenter = function () {

            img2018.style.opacity = "1";
            img2018.style.transform = "translateX(0)";
            txt2018.style.opacity = "1";
            txt2018.style.transform = "translateX(0)";

        }

        time2025.onmouseenter = function () {

            img2025.style.opacity = "1";
            img2025.style.transform = "translateX(0)";
            txt2025.style.opacity = "1";
            txt2025.style.transform = "translateX(0)";

        }

        let burger = document.querySelector(".burger");
        let menu = document.querySelector(".burgermenu");
        let closeX = document.getElementById("x");
burger.onclick = () => {
    menu.classList.add("active");
  };
  
  closeX.onclick = () => {
    menu.classList.remove("active");
  };


const model = document.querySelector(".croissanth");

const mobileQuery = window.matchMedia("(min-width: 300px) and (max-width: 600px)");

function updateModelSettings() {
  if (mobileQuery.matches) {
    
    model.setAttribute("camera-target", "0m 0m -0.004743m");
    model.setAttribute("camera-orbit", "-108.3deg 17.7deg 2.5m");
    model.setAttribute("field-of-view", "29.76deg");
  } else {
  
    model.setAttribute("camera-target", "0m 0m 0m");
    model.setAttribute("camera-orbit", "-142.2deg 77.78deg 2.51m");
    model.setAttribute("field-of-view", "30deg");
  }
}

updateModelSettings(); 
mobileQuery.addEventListener("change", updateModelSettings); 

let svg = document.querySelector(".svg");
let path = svg.querySelector("path")

const pathLength = path.getTotalLength();

gsap.set(path , { 
  strokeDasharray: pathLength,
  strokeDashoffset: pathLength
});

gsap.to(path, {
  strokeDashoffset: 0,
  
  duration: 50,
  scrollTrigger: {
    trigger: ".svg",
    start: "top 20%",
    end: "bottom 20%",
    scrub: 2.5
  }
});
