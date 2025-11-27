       let burger = document.querySelector(".burger");
        let menu = document.querySelector(".burgermenu");
        let closeX = document.getElementById("x");
burger.onclick = () => {
    menu.classList.add("active");
  };
  
  closeX.onclick = () => {
    menu.classList.remove("active");
  };


let scacards = document.querySelector(".scacards");

let card1 = document.querySelector(".scard1");
let card2 = document.querySelector(".scard2");
let card3 = document.querySelector(".scard3");
let card4 = document.querySelector(".scard4");
let card5 = document.querySelector(".scard5");

// Function to check if it's mobile
function isMobile() {
    return window.innerWidth >= 300 && window.innerWidth <= 600;
}

scacards.onmouseenter = function () {
    card1.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    card2.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    card3.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    card4.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    card5.style.transform = "translateX(0) translateY(0) rotate(0deg)";
};

scacards.onmouseleave = function () {
    if (isMobile()) {
       
        card1.style.transform = "translateX(-12px) translateY(60px) rotate(-15deg)";
        card2.style.transform = "translateX(-79px) translateY(46px) rotate(0deg)";
        card3.style.transform = "translateX(9px) translateY(39px) rotate(10deg)";
        card4.style.transform = "translateX(-11px) translateY(-25px) rotate(-10deg)";
        card5.style.transform = "translateX(-9px) translateY(-91px) rotate(6deg)";
    } else {
       
        card1.style.transform = "translateX(85px) translateY(60px) rotate(-15deg)";
        card2.style.transform = "translateX(-3px) translateY(46px) rotate(0deg)";
        card3.style.transform = "translateX(-87px) translateY(58px) rotate(10deg)";
        card4.style.transform = "translateX(63px) translateY(-40px) rotate(-10deg)";
        card5.style.transform = "translateX(-18px) translateY(-49px) rotate(6deg)";
    }
};

window.addEventListener("resize", () => {
    if (!scacards.matches(":hover")) {
        scacards.onmouseleave();
    }
});

const containers = document.querySelectorAll(".msgcontain, .msgcontain2, .msgcontain3");
const nextBtn = document.querySelector(".btns button:last-child");
const prevBtn = document.querySelector(".btns button:first-child");

let current = 0;


showContainer(current);

function showContainer(index) {
    containers.forEach((c, i) => {
        c.style.transition = "opacity 0.6s ease";
        c.style.opacity = i === index ? "1" : "0";
        c.style.zIndex = i === index ? "10" : "1";   
    });
}

nextBtn.addEventListener("click", () => {
    current++;
    if (current >= containers.length) current = 0; 
    showContainer(current);
});

prevBtn.addEventListener("click", () => {
    current--;
    if (current < 0) current = containers.length - 1;
    showContainer(current);
});
