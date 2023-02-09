const search = document.querySelector(".barSearch button");
// J'attache mon événement au button de search bar
search.addEventListener("click", searchCocktail);

// On créer un événement se déclenchant dès que la souris
//BUTTON
// FONCTION ASYNCHRONE
async function searchCocktail() {
  console.log("test search cocktel");

  //on recupere la valeur de recherche
  const search = document.querySelector("#id").value;
  console.log(`la valeur input : ${search}`);

  // Si je n'ai rien rentré
  if (!search) {
    // On arréte la fonction
    return;
  }
  
  // Je viens d'envoyer un requête au serveur du thecocktaildb !
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
  );

  // Je récupére l'objet javascript depuis le contenue json de la requête
  const data = await response.json();
  console.log(data);

  //je recupere la valeur de la liste drinks
  drinks = data.drinks
  
  
  //je doit boucler sur les cocktails
  for (const drink of drinks) {
    drinkNom = drink.strDrink
    drinkImg = drink.strDrinkThumb
    //ajouter le div dans le bordure cocktail
    console.log(drinkNom);
  }
}

// Je récupére le bouton avec la class "super-bouton"
//const testRectangle = document.querySelector('.rectangleSearche')
//const divCarre = document.querySelector('.carreSearche')
const divCercle = document.querySelector(".cercleSearch");
const h1 = document.querySelector(".logo");

// Créer une fonction d'événement
function onButtonClick(event) {
  //divCarre.classList.replace('carreSearche','carreSearcheModifie')
  divCercle.classList.replace("cercleSearch", "cercleSearcheModifie");
  h1.classList.replace("logo", "logoModifie");
  //appeler le div de barsearch et ajouter la classe active
  const barserach = document.querySelector(".barSearch");
  barserach.classList.add("active");

  console.log("test ok");
}

// J'ajoute un événement lors du clique !
divCercle.addEventListener("click", onButtonClick);
