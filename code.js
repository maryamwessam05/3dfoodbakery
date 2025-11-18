

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