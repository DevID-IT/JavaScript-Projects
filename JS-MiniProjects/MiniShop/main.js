const breadList = [
  "bread",
  "roll",
  "wheat roll",
  "corn roll",
  "wheat bread",
  "wholemeal bread",
  "lightweight bread",
  "doughnut",
  "corner",
  "yeast",
];
const drinkList = [
  "orange juice",
  "apple juice",
  "lemon juice",
  "coffee 1kg",
  "box of tea",
  "energy drink",
  "carbonated water",
  "still water",
  "coca-cola",
  "milk",
];
const snackList = [
  "chips",
  "sticks",
  "crackers",
  "rice waffles",
  "peanuts",
  "corn crisps",
  "lay's chips",
];
const sweetList = [
  "Jellyfish",
  "marshmello",
  "bar of mars",
  "bar of snickers",
  "bar of chocolate",
  "chocolate box",
  "lollipop",
  "teasers",
  "Cookies",
];
const daiaryList = [
  "milk",
  "white cheese",
  "cheese",
  "yoghurt",
  "cream",
  "cottage cheese",
  "rennet cheese",
  "kefir",
];
const alcoholList = [
  "Drinking honey",
  "Tincture",
  "Ouzo",
  "Beer",
  "Sake",
  "Rum",
  "Spirits",
  "liqueur",
  "Vodka",
  "Wine",
  "whisky",
  "Cognac",
];
const fruitList = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Cantaloupe",
  "Blackberries",
  "Cherries",
  "Grapefruit",
  "Grapes",
  "Guava",
  "Kiwi",
  "Lemons",
  "Mango",
  "Oranges",
  "Papaya",
  "Peach",
];
const vegetableList = [
  "arugula",
  "beet",
  "bell pepper",
  "celery",
  "corn",
  "cucumber",
  "mushrooms",
  "radish",
  "spinach",
  "tomato",
  "aubergine",
  "cauliflower",
  "courgette",
  "broccoli",
  "onion",
  "carrot",
  "potatoes",
  "zucchini",
];

const listHeader = document.querySelector(".product_holder h2");
const titleList = [...document.querySelectorAll("nav ul li")];
const description = document.querySelector(".product_description");
const search = document.querySelector(".search");
const productDiv = document.querySelector(".basket");
const productPlace = document.querySelector(".basket ul");
const clearBasketButton = document.querySelector(".basket button");
let arraySearch = [];
let changeNumber = 0;
let productValue = [];

const removeBasketElement = (el) => {
  productPlace.innerHTML = "";

  let that = el.target.parentNode.textContent;
  that = that.slice(0, -1);
  for (let i = 0; i < productValue.length; i++) {
    if (productValue[i] == that) {
      productValue.splice(i, 1);
    }
  }
  for (let i = 0; i < productValue.length; i++) {
    productPlace.innerHTML += `<li class='basket_elements'>${productValue[i]}<span>-</span></li>`;
  }

  if (productValue.length > 3) {
    productDiv.scrollTop += 32;
  } else if (productValue.length < 1) {
    productDiv.style.display = "none";
  }

  productPlace.querySelectorAll("span").forEach((el) => {
    el.addEventListener("click", removeBasketElement);
  });
};

const addBasketElement = (el) => {
  productDiv.style.display = "block";

  let that = el.target.parentElement.textContent;
  that = that.substring(0, that.length - 1).toUpperCase();

  productPlace.innerHTML += `<li class='basket_elements'>${that}<span>-</span></li>`;
  if (productValue.length > 3) {
    productDiv.scrollTop += 32;
  }
  productValue.push(that);
  productPlace.querySelectorAll("span").forEach((el) => {
    el.addEventListener("click", removeBasketElement);
  });
};

const addProducts = (element) => {
  description.innerHTML = "";
  if (changeNumber != 0) {
    arraySearch = [];
  }
  for (let i = 0; i < element.length; i++) {
    let text = element[i];
    description.innerHTML += `<div class="elements">${text}<span>+</span></div>`;
    arraySearch.push(text);
  }
  changeNumber++;

  description.querySelectorAll("span").forEach((el) => {
    el.addEventListener("click", addBasketElement);
  });
};

for (let index = 0; index < titleList.length; index++)
  titleList[index].addEventListener("click", () => {
    listHeader.textContent = `List of available products in category: ${titleList[index].textContent}.`;
    switch (titleList[index].textContent) {
      case "Bread":
        addProducts(breadList);
        break;
      case "Drinks":
        addProducts(drinkList);
        break;
      case "Snacks":
        addProducts(snackList);
        break;
      case "Sweets":
        addProducts(sweetList);
        break;
      case "Dairy products":
        addProducts(daiaryList);
        break;
      case "Alcohol":
        addProducts(alcoholList);
        break;
      case "Fruits":
        addProducts(fruitList);
        break;
      case "Vegetables":
        addProducts(vegetableList);
        break;
      default:
        console.log("You haven't choose anything!");
        break;
    }
  });

const searchItem = (e) => {
  const text = e.target.value.toLowerCase();
  description.innerHTML = "";
  for (i = 0; i < arraySearch.length; i++) {
    if (arraySearch[i].toLowerCase().includes(text)) {
      description.innerHTML += `<div class="elements">${arraySearch[i]}<span>+</span></div>`;
    }
  }
  description.querySelectorAll("span").forEach((el) => {
    el.addEventListener("click", addBasketElement);
  });
};

const clearBasket = () => {
  productDiv.style.display = "none";
  productPlace.innerHTML = "";
  productValue = [];
};

search.addEventListener("keyup", searchItem);
clearBasketButton.addEventListener("click", clearBasket);
