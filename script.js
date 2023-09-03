const proteinList = ["Cuisses de poulet","Steak haché",
"Oeufs","Poisson Pané","Filets de poulet","Cordons bleu",
"Viande hachée","Cubes de poulet", "Nuggets/Chichis"];

const proteinSpecialList = ["Cuisses de poulet marinées",
"Filets de poulet marinés","Brochettes de poulet fines herbes",
"Bavettes d'aloyau","Brochettes de rumsteak",
"Brochettes de poulet miel curry citron"];

const sideList = ["Purée de pomme de terre",
"Riz","Pâtes","Frites","Semoule","Petit pois",
"Lentilles","Nouille chinoises","Wraps"];

const sideSpecialList = ["Cuisses de poulet marinées",
"Filets de poulet marinés","Brochettes de poulet fines herbes",
"Bavettes d'aloyau","Brochettes de rumsteak",
"Brochettes de poulet miel curry citron"];

const vegetableList = ["Betterave","Soupe",
"Tomates huile d'olive","Salade composées","Salade de riz",
"Oeufs mayonnaise","Avocat","Concombres","Carottes rapées"];

const dessertList = ["Compote","Fruits",
"Biscuits","Glaces","Mousse au chocolat",
"Yaourt"];

const buttonClick = document.querySelector("#btn-click");
const buttonClickDel = document.querySelector("#btn-click-del");


buttonClick.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 9)
  const randomDessertNumber = Math.floor(Math.random() * 6)
  let recipeRandom =`Recette aléatoire:
  Entrée: ${vegetableList[randomNumber]}
  Plat principal: ${proteinList[randomNumber]} + ${sideList[randomNumber]}
  Dessert: ${dessertList[randomDessertNumber]}`;
  console.log(recipeRandom);

  //L'element du dom dans lequel on placera les articles
  const divCard = document.querySelector(".card-wrapper");

  //Element à créer pour afficher les infos du repas
  const recipeElement = document.createElement("article");

  const vegetableElement = document.createElement("p");
  vegetableElement.innerText=`Entrée: ${vegetableList[randomNumber]}`;
  const proteinElement = document.createElement("p");
  proteinElement.innerText=`Viande: ${proteinList[randomNumber]}`;
  const sideElement = document.createElement("p");
  sideElement.innerText=`Accompagnement: ${sideList[randomNumber]}`;
  const dessertElement = document.createElement("p");
  dessertElement.innerText=`Dessert: ${dessertList[randomDessertNumber]}`;

  divCard.appendChild(recipeElement);

  recipeElement.appendChild(vegetableElement);
  recipeElement.appendChild(proteinElement);
  recipeElement.appendChild(sideElement);
  recipeElement.appendChild(dessertElement);


});

buttonClickDel.addEventListener("click", function () {
  const divCard = document.querySelector(".card-wrapper");
  divCard.innerHTML = "";
});
