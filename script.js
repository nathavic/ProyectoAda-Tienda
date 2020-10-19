console.log("Hola Male!");

// PRODUCTOS

// // TARJETAS:
const productCard = document.querySelectorAll(".product__card");

// // BUSQUEDAS:
const searchFilter = document.querySelector(".search-input");

// // CATEGORIA:
const categoryFilter = document.querySelectorAll(".search-category");

// // PUNTAJE:
const reviewFilter = document.querySelectorAll(".search-review");

// FILTROS:

// input:

searchFilter.oninput = () => {
  allFilterCard();
};

const inputSearchOk = () => {
  if (searchFilter.value) {
    return true;
  } else {
    return false;
  }
};

const compareInputCard = (card) => {
  if (card.dataset.name.includes(searchFilter.value.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

const filterInput = (card) => {
  if (inputSearchOk()) {
    if (compareInputCard(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

// category:

for (let checkbox of categoryFilter) {
  checkbox.oninput = () => {
    allFilterCard();
  };
}

const checkboxCategoryOk = () => {
  for (let checkbox of categoryFilter) {
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
};

const compareCategoryCard = (card) => {
  for (let checkbox of categoryFilter) {
    if (checkbox.checked) {
      if (checkbox.value === card.dataset.category) {
        return true;
      }
    }
  }
  return false;
};

const allFilterCategory = (card) => {
  if (checkboxCategoryOk()) {
    if (compareCategoryCard(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

//review:

for (let checkbox of reviewFilter) {
  checkbox.oninput = () => {
    allFilterCard();
  };
}

const checkboxReviewOk = () => {
  for (let checkbox of reviewFilter) {
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
};

const compareReviewCard = (card) => {
  for (let checkbox of reviewFilter) {
    if (checkbox.checked) {
      if (checkbox.value === card.dataset.review) {
        return true;
      }
    }
  }
  return false;
};

const allFilterReview = (card) => {
  if (checkboxReviewOk()) {
    if (compareReviewCard(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

// accion:

const filterTotal = (card) => {
  if (filterInput(card) && allFilterReview(card) && allFilterCategory(card)) {
    return true;
  } else {
    return false;
  }
};

const hide = (card) => {
  return card.classList.add("hidden");
};

const show = (card) => {
  return card.classList.remove("hidden");
};

const allFilterCard = () => {
  for (let card of productCard) {
    if (filterTotal(card)) {
      show(card);
    } else {
      hide(card);
    }
  }
};

// borrar:




// GRILLA Y LISTA

const showList = document.getElementById("show__list");
const showGrid = document.getElementById("show__grid");
// LISTAS DE PRODUCTOS
const productContainer = document.querySelectorAll(".product__description");
// TARJETAS DE PRODUCTOS
const productContent = document.querySelectorAll(".product__content");




// ABRIR y CERRAR CARRITO

const openCart = document.querySelectorAll(".shopcart__btn")
const closeCart = document.querySelectorAll(".close__cart");
const shopCart = document.getElementById("shopcart");
const overlay = document.querySelector(".overlay");

openCart.onclick = () => {
  overlay.classList.remove("hidden");
  document.body.classList.add("no-scroll");
  shopcart.classList.add("show_cart");
};

closeCart.onclick = () => {
  overlay.classList.add("hidden");
  document.body.classList.remove("no-scroll");
  shopcart.classList.remove("show_cart");
};

