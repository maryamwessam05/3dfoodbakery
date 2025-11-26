       let burger = document.querySelector(".burger");
        let menu = document.querySelector(".burgermenu");
        let closeX = document.getElementById("x");
burger.onclick = () => {
    menu.classList.add("active");
  };
  
  closeX.onclick = () => {
    menu.classList.remove("active");
  };


  function increase(numid){
    let num = document.getElementById(numid).innerHTML;

    document.getElementById(numid).innerHTML = ++num;
  }

    function decrease(numid){
    let num = document.getElementById(numid).innerHTML;
    if(num != 0){

        document.getElementById(numid).innerHTML = --num;
    }
  }

  function crois(){
    document.querySelector(".croisgame").style.opacity="1";
  }
    function cup(){
    document.querySelector(".cupgame").style.opacity="1";
  }
    function don(){
    document.querySelector(".donutgame").style.opacity="1";
  }
    function pret(){
    document.querySelector(".pretzelgame").style.opacity="1";
  }

