let randomNumber = Math.floor(Math.random() * 100) + 1;
let lives = 10;

alert("Vous avez " + lives + " tentatives pour réussir le jeu");

function validForm() {
    let userNumber = document.forms["form"]["field"].value;
    userNumber = parseInt(userNumber);

    if(!Number.isInteger(userNumber)) {
        alert("Vous devez indiquer un nombre !");
    } else {
       
        if(lives > 0) {
           if(userNumber < randomNumber) {
                --lives;
               alert("Le nombre indiqué est trop petit !\nIl vous reste : " +lives+ " tentatives.");
           } else if(userNumber > randomNumber) {
                --lives
               alert("Le nombre indiqué est trop grand \nIl vous reste : " +lives+ " tentatives.");
           } else if(userNumber == randomNumber) {
               alert("Vous avez gagné !");
           }
        } else {
            alert("Vous avez perdu !");
        }         
    }

    return false;
}