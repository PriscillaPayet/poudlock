
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
                console.log("texte supprimé");
            }

            let divImage = document.querySelector(".speech_container");

            //je vérifie si une img est déjà présente, si oui je la supprime
            let existingHouseImg = divImage.querySelector("img");
            if (existingHouseImg) {
                existingHouseImg.remove();
            }

            let houseImg = document.createElement("img")

            //si 8 caractères, maison maxopus
            if (nameField.length === 8){
                console.log("contient 8caractères");
                houseImg.src = "images/maxopus.png";
            } 
            
            else if (nameField.startsWith("L") || nameField.charAt(nameField.length - 1) === "x") {
                console.log("commence par L ou se termine par x");
                houseImg.src = "images/lustrix.png";

            }

            else if (nameField.length % 5 === 0 ||  nameField.length % 3 === 0) {
                console.log("multiple de 5 ou de 3");
                houseImg.src = "images/anthorvus.png";

            }
            
            else {
            houseImg.src="images/darioptera.png";
            }
            divImage.appendChild(houseImg); 
            userNameField.value = "";
        }   
        
    },
      
}
// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
