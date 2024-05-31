
// Notre variable qui contient le "module" app (un objet)

let app = {
    
    // Tableau contenant le nom des 4 maisons : je transforme le tableau en objet et je le sors de ma fonction
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus',
    ],

    // Méthode appelée au chargement de la page
    init: function() {
        //je sélectionne le formulaire contenant le champs
        const form = document.querySelector("form");
        //j'écoute la soumission et je vérifie si le prénom est ok
        form.addEventListener("submit",app.handleSubmit,);
    
    },

    handleSubmit: function(event){
        //je bloque le rafraichissement
        event.preventDefault();
        //je sélectionne le champs 
        const userNameField = document.querySelector(".name");
        //je récupère la valeur soumise
        const nameField = userNameField.value; 
        //je vérifie si champs n'est pas vide ou n'est pas un nombre
        if (nameField == "" || (isNaN(nameField)==false)){
            alert ("Ça ne fonctionne qu'avec un nom, pardi !");
            return false;
        }

        else {
            //let speech = document.querySelector(".speech_container");
            let divSpeech = document.querySelector(".speech");

            //je vérifie si la div existe
            if (divSpeech) {
                divSpeech.remove();
                //console.log("texte supprimé?");
            }
           

            // je génère un nombre aléatoire pour sélectionner une maison
            
            let randomNumber = Math.floor(Math.random() * (3 - 0) + 0);
            console.log(randomNumber);
            let divImage = document.querySelector(".speech_container");

            //je vérifie si une img est déjà présente, si oui je la supprime
            let existingHouseImg = divImage.querySelector("img");
            if (existingHouseImg) {
                existingHouseImg.remove();
            }

            let houseImg = document.createElement("img");
            divImage.appendChild(houseImg); 
        
            if (randomNumber == 0){
            houseImg.src="images/anthorvus.png";
            }
            else if (randomNumber == 1){
            houseImg.src="images/darioptera.png";
            }
            else if (randomNumber == 2){
            houseImg.src="images/lustrix.png";
            }
            else {
             houseImg.src = "images/maxopus.png";
           }
           // je vide le champ de texte
           userNameField.value = "";
        }   
        
    },
    


    
    
}
// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
