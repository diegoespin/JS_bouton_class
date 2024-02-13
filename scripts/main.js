// 1. Créez 3 boutons (<button>)
// 2. Quand on clique sur un bouton, lui ajouter une classe "active"
// 3. Quand on re-clique sur le même bouton, lui enlever sa classe "active"
// 4. Quand on clique sur un autre bouton que celui qui a déjà la classe "active", enlever la classe "active" sur le bouton qui l'a déjà et l'ajouter sur le bouton en cours
// 5. Il ne peut donc n'y avoir qu'une seule classe active à chaque fois (et pas 2 ou 3)

// let btn1 = document.querySelector(".btnOne")
// let btn2 = document.querySelector(".btnTwo")
// let btn3 = document.querySelector(".btnTree")

// btn1.addEventListener("click", function(){
//         btn1.classList.toggle("active")
// })
// btn2.addEventListener("click", function(){
//     btn2.classList.toggle("active")
// })
// btn3.addEventListener("click", function(){
//     btn3.classList.toggle("active")
// })


let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.classList.toggle("active")
    if (this === buttons[0]){
        this.classList.remove("active")
    }
    if (this === buttons[2]){
        this.classList.remove("active")
    }
  });
}