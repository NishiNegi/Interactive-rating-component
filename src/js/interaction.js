 // Mostrar/ocultar mains
 const submitButton = document.getElementById("submit-button");
 function changeDisplay() {
   const rating = document.getElementById("container-rating");
   const thankyou = document.getElementById("container-thankyou");

   rating.classList.add("hidden");
   thankyou.classList.remove("hidden");
 }
 submitButton.addEventListener("click", changeDisplay);

 // Tomar valor de opción elegida

 const ratings = document.getElementsByClassName("rating-option");
 let rating = 0;
 // console.log(ratings)
 for (let i = 0; i < ratings.length; i++) {
   let ratingValue = ratings[i]["text"];
   // console.log(ratingValue)
   function selectRating() {
    for (let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove("selected")
    }
     ratings[i].classList.add("selected");
     rating = ratingValue;
     let message = `You selected ${rating} out of 5`;
     // console.log(message);
     let messageP = document.getElementById("message");
     // console.log(messageP);
     messageP.innerHTML = message;
   }

   ratings[i].addEventListener("click", selectRating);
 }