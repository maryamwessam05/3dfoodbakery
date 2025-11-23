       let burger = document.querySelector(".burger");
        let menu = document.querySelector(".burgermenu");
        let closeX = document.getElementById("x");
burger.onclick = () => {
    menu.classList.add("active");
  };
  
  closeX.onclick = () => {
    menu.classList.remove("active");
  };
